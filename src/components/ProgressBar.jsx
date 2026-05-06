export default function ProgressBar({ step }) {
  const progress = (step / 3) * 100;

  return (
    <div className="w-full h-2 bg-white/20 rounded-full mb-6 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-pink-400 to-yellow-400 transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}