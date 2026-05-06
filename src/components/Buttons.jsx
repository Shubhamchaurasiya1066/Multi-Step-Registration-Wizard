export function PrimaryButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="w-full mt-3 py-3 rounded-xl font-semibold 
      bg-gradient-to-r from-pink-500 to-yellow-400
      hover:scale-105 transition-all duration-300
      disabled:opacity-50"
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition"
    >
      {children}
    </button>
  );
}