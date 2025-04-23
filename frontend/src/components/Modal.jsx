import React from "react";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";

export default function Modal({ message, type = "success", onClose, bgColor = "#DBCACA" }) {
  const borderColor = type === "success" ? "#30CFC0" : "#F7B733";
  const Icon = type === "success" ? FiCheckCircle : FiAlertCircle;
  const title = type === "success" ? "Éxito" : "Error";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="rounded-xl p-6 w-full max-w-sm shadow-lg text-center relative animate-modal"
        style={{
          backgroundColor: bgColor,
          border: `3px solid ${borderColor}`,
          animation: "fadeScale 0.3s ease-out",
        }}
      >
        <div className="flex justify-center mb-2">
          <Icon size={40} color={borderColor} />
        </div>
        <h3 className="text-lg font-bold mb-2 text-gray-800">
          {title}
        </h3>
        <p className="text-gray-700 mb-4">{message}</p>
        <button
          onClick={onClose}
          className="text-white font-semibold px-4 py-2 rounded transition"
          style={{
            backgroundColor: "#F7B733",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e5a323")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#F7B733")}
        >
          Cerrar
        </button>
      </div>

      <style>{`
        @keyframes fadeScale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
