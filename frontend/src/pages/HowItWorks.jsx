import {
    UserPlus,
    ClipboardList,
    Users,
    MessageSquare,
    AlertTriangle,
    HeartHandshake,
  } from "lucide-react";
  import StepCard from "@/components/StepCard";
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
  
  export default function HowItWorks() {
    return (
      <div className="min-h-screen flex flex-col justify-between font-['Poppins'] text-black bg-gradient-to-b from-[#f1f4f3] to-[#c7d3d2]">
        <Header />
  
        <main className="flex-grow">
          <section className="py-12 px-4 max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-black text-center mb-4">
              ¿Cómo funciona Marea Viva?
            </h2>
            <p className="text-center mb-12 max-w-xl mx-auto">
              Una plataforma diseñada para acompañar, apoyar y conectar. Paso a paso, creamos una experiencia empática, sencilla y humana.
            </p>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <StepCard
                Icon={UserPlus}
                title="1. Registro"
                description="Formulario inicial validado para usuarios y voluntarios."
                color="text-teal-600"
              />
              <StepCard
                Icon={ClipboardList}
                title="2. Cuestionario"
                description="Evaluación emocional para personalizar la experiencia."
                color="text-teal-600"
              />
              <StepCard
                Icon={Users}
                title="3. Buscar apoyo"
                description="Explora perfiles de voluntarios y solicita conexión."
                color="text-teal-600"
              />
              <StepCard
                Icon={MessageSquare}
                title="4. Chat activo"
                description="El voluntario acepta y comienza el acompañamiento."
                color="text-teal-600"
              />
              <StepCard
                Icon={AlertTriangle}
                title="5. Botón SOS"
                description="Conexión urgente con el primer voluntario disponible."
                color="text-orange-500"
              />
              <StepCard
                Icon={HeartHandshake}
                title="6. Grupos"
                description="Únete a sesiones grupales de contención y diálogo."
                color="text-teal-600"
              />
            </div>
          </section>
        </main>
  
        <Footer />
      </div>
    );
  }
  