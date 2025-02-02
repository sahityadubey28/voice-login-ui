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
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="glass-card w-full max-w-md p-8 rounded-2xl space-y-8 transform transition-all duration-300 hover:shadow-2xl"
    >
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-primary">Height Detection App</h1>
        <p className="text-muted-foreground">
          Authenticate with your voice
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={() => setIsLogin(true)}
          className={`px-6 py-2 rounded-lg transition-all ${
            isLogin
              ? "bg-primary text-white"
              : "text-primary hover:bg-primary/10"
          }`}
        >
          Login
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={() => setIsLogin(false)}
          className={`px-6 py-2 rounded-lg transition-all ${
            !isLogin
              ? "bg-primary text-white"
              : "text-primary hover:bg-primary/10"
          }`}
        >
          Sign Up
        </motion.button>
      </div>

      <div className="flex flex-col items-center gap-4">
        <motion.button
          onClick={handleVoiceAuth}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="voice-button bg-primary text-white p-8 rounded-full hover:bg-primary/90 shadow-lg"
        >
          <Mic size={32} />
        </motion.button>
        <p className="text-muted-foreground">
          {isLogin ? "Login with your voice" : "Sign up with your voice"}
        </p>
      </div>
    </motion.div>
  );
};