import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' o 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/collaborators', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, description }),
      });

      if (response.ok) {
        setStatusType('success');
        setStatusMessage('¡Gracias por tu interés en colaborar! ✨');
        setName('');
        setEmail('');
        setDescription('');
      } else {
        setStatusType('error');
        setStatusMessage('Hubo un error al enviar el formulario. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setStatusType('error');
      setStatusMessage('Hubo un error de red. Inténtalo de nuevo.');
    }
  };

  return (
    <section className="text-center py-16 px-4">
      <h2 className="text-3xl font-semibold mb-6">Participa o Apoya</h2>
      <p className="mb-4 font-semibold">¿Eres fundación o universidad? Descubre cómo colaborar.</p>
      <button className="bg-white text-[#2ccfcf] font-semibold py-2 px-6 rounded-full mb-4">
        Descargar presentación
      </button>
      <p className="font-semibold mb-4">¿Quieres apoyar económicamente?</p>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Tu nombre"
          className="p-3 border border-gray-300 rounded"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Tu correo electrónico"
          className="p-3 border border-gray-300 rounded"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="¿Cómo te gustaría apoyar?"
          rows="4"
          className="p-3 border border-gray-300 rounded"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="bg-[#f7b733] text-white font-semibold py-2 rounded">
          Enviar
        </button>

        {/* Mensaje de estado */}
        {statusMessage && (
          <p className={`mt-4 font-semibold ${statusType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {statusMessage}
          </p>
        )}
      </form>
    </section>
  );
}
