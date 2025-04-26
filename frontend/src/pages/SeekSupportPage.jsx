import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeekSupportCard from "@/components/SeekSupportCards";

export default function SeekSupportPage() {
  const [supports, setSupports] = useState([]);

  useEffect(() => {
    const fetchSupports = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/seek-support");
        if (!response.ok) {
          throw new Error("Error al obtener las opciones de apoyo");
        }
        const data = await response.json();
        setSupports(data);
      } catch (error) {
        console.error("Error fetching supports:", error);
      }
    };

    fetchSupports();
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#f1f4f3] to-[#c7d3d2] min-h-screen flex flex-col font-['Poppins'] text-black">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {supports.length > 0 ? (
          supports.map((support) => (
            <SeekSupportCard
              key={support.id}
              title={support.title}
              description={support.description}
              imageUrl={support.imageUrl}
            />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            Cargando opciones de apoyo...
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}
