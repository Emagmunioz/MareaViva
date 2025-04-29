export default function Section({ title, children }) {
    return (
      <section className="text-center py-16 px-4bg-white/70 backdrop-blur-md shadow-md rounded-xl px-6  mx-4 my-8 md:mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6">{title}</h2>
        <div className="max-w-4xl mx-auto text-lg text-black">{children}</div>
      </section>
      
    );
  }
  
    