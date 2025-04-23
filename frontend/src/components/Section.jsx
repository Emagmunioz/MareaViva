export default function Section({ title, children }) {
    return (
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl font-semibold mb-6">{title}</h2>
        <div className="max-w-4xl mx-auto text-lg">{children}</div>
      </section>
    );
  }
  