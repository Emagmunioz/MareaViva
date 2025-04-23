export default function StepCard({ Icon, title, description, color }) {
    return (
      <div className="bg-white/80 backdrop-blur-md shadow-md rounded-xl p-6 flex flex-col items-center text-center transition hover:scale-105">
        <Icon className={`w-10 h-10 mb-4 ${color}`} />
        <h3 className={`text-lg font-semibold mb-2 ${color}`}>{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    );
  }
  