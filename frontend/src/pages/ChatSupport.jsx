
import { useState, useEffect, useRef } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ChatSupport() {
  const [messages, setMessages] = useState([
    { text: "Hola, soy Carla. Estoy aquí para escucharte. ¿Cómo te sientes?", from: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [stompClient, setStompClient] = useState(null);
  const chatEndRef = useRef(null); // 🚀 referencia al final del chat

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/chat-websocket");
    const client = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("✅ Conectado al WebSocket");
        client.subscribe("/topic/messages", (message) => {
          const body = JSON.parse(message.body);
          setMessages((prevMessages) => [...prevMessages, { text: body.text, from: "other" }]);
        });
      },
      onStompError: (frame) => {
        console.error("🚨 Error en WebSocket:", frame.headers["message"]);
      },
    });

    client.activate();
    setStompClient(client);

    return () => {
      client.deactivate();
    };
  }, []);

  // 🚀 Scroll automático al recibir mensajes
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim() || !stompClient) return;

    const message = { from: "usuario", text: input };

    stompClient.publish({
      destination: "/app/sendMessage",
      body: JSON.stringify(message),
    });

    setMessages((prevMessages) => [...prevMessages, { text: input, from: "user" }]);
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
                msg.from === "user"
                  ? "bg-[#9ee3e3] self-end"
                  : msg.from === "bot"
                  ? "bg-[#dbcaca] self-start"
                  : "bg-[#fff1b8] self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {/* 🚀 Este div invisible es donde se hace el scroll automático */}
          <div ref={chatEndRef} />
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
