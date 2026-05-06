export default function InputField({
  label,
  type = "text",
  register,
  name,
  error,
}) {
  return (
    <div className="relative mb-6">
      {/* Input */}
      <input
        type={type}
        {...register(name)}
        placeholder=" "
        className={`peer w-full px-4 py-3 bg-white/10 border rounded-xl text-white outline-none
        transition-all duration-300
        ${error ? "border-red-400" : "border-white/30 focus:border-pink-400"}
        focus:ring-2 focus:ring-pink-400`}
      />

      {/* Floating Label */}
      <label
        className="absolute left-4 -top-2 text-xs text-pink-300 
        bg-indigo-600 px-1 rounded
        peer-placeholder-shown:top-3 
        peer-placeholder-shown:text-sm 
        peer-placeholder-shown:text-white/70
        peer-focus:-top-2 
        peer-focus:text-xs 
        peer-focus:text-pink-300 
        transition-all duration-300"
      >
        {label}
      </label>

      {/* Error */}
      {error && (
        <p className="text-red-400 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}