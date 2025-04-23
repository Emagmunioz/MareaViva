// src/pages/ChatSupport.jsx
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ChatSupport() {
  const [messages, setMessages] = useState([
    { text: "Hola, soy Carla. Estoy aquí para escucharte. ¿Cómo te sientes?", from: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { text: input, from: "user" }]);
    setInput("");
  };

  return (
    <div className="flex flex-col min-h-screen font-['Poppins'] bg-[#c7fcfc]">
        <Header />

      <main className="flex flex-col justify-between flex-1 p-4">
        <div className="bg-white rounded-xl shadow p-4 overflow-y-auto flex-1 mb-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-2 p-3 max-w-[70%] rounded-xl ${
                msg.from === "user" ? "bg-[#9ee3e3] self-end" : "bg-[#dbcaca] self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-xl"
            placeholder="Escribe tu mensaje..."
          />
          <button
            type="submit"
            className="bg-[#f7b733] text-white font-semibold px-6 py-2 rounded-xl"
          >
            Enviar
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
