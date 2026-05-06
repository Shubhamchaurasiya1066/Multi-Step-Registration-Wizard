import Wizard from "./Wizard";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500">
      
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 w-full max-w-md text-white">
        
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">
          ✨ Create Account
        </h2>

        <Wizard />
      </div>

    </div>
  );
}