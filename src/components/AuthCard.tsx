import { useState } from "react";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";

export const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleVoiceAuth = () => {
    // Voice authentication logic will go here
    console.log("Voice authentication initiated");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card w-full max-w-md p-8 rounded-2xl space-y-8"
    >
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-primary">Height Detection App</h1>
        <p className="text-muted-foreground">
          Authenticate with your voice
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setIsLogin(true)}
          className={`px-6 py-2 rounded-lg transition-all ${
            isLogin
              ? "bg-primary text-white"
              : "text-primary hover:bg-primary/10"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`px-6 py-2 rounded-lg transition-all ${
            !isLogin
              ? "bg-primary text-white"
              : "text-primary hover:bg-primary/10"
          }`}
        >
          Sign Up
        </button>
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          onClick={handleVoiceAuth}
          className="voice-button bg-primary text-white p-8 rounded-full hover:bg-primary/90"
        >
          <Mic size={32} />
        </button>
        <p className="text-muted-foreground">
          {isLogin ? "Login with your voice" : "Sign up with your voice"}
        </p>
      </div>
    </motion.div>
  );
};