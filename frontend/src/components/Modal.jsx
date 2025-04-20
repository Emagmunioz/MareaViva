import React from "react";

export default function Modal({ message, onClose, type = "success" }) {
  const bgColor = type === "success" ? "bg-green-100" : "bg-red-100";
  const textColor = type === "success" ? "text-green-700" : "text-red-700";
  const borderColor = type === "success" ? "border-green-400" : "border-red-400";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
    <div className={`w-full max-w-sm p-6 rounded-lg shadow-lg bg-white border ${borderColor} ${bgColor}`}>

    <h3 className={`text-lg font-semibold mb-4 ${textColor}`}>

          {type === "success" ? "¡Éxito!" : "Error"}
        </h3>
        <p className="text-sm text-gray-700">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}