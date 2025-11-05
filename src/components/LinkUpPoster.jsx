
import { Ticket, Music, GlassCheers } from "lucide-react";
import EventDescription from "./EventDescription";

export default function LinkUpPoster() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center max-w-md w-full text-white border border-white/20"
      >
        <h1 className="text-4xl font-extrabold mb-3 tracking-tight">
          LinkUp Vibes
        </h1>
        <p className="text-sm uppercase tracking-wide text-white/70 mb-6">
          Where Energy Meets Unity 🌈
        </p>

        <EventDescription />

        <div className="space-y-2 mb-8">
          <p className="text-lg">🍹 Drinks | 🎶 Music | 💫 Good Energy</p>
          <p className="text-sm text-white/80">
            Queer & Straight Welcome — All Vibes, One Space
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <div className="flex items-center gap-1 bg-white/20 px-4 py-2 rounded-xl">
            <Ticket className="w-5 h-5" />
            <span>Entry: KSh 500 / 700</span>
          </div>
        </div>

        <div className="text-sm space-y-1 mb-10">
          <p>
            <strong>Date:</strong> 14th November 2025
          </p>
          <p>
            <strong>Time:</strong> 1:00PM — 10:00PM
          </p>
          <p>
            <strong>Venue:</strong> The Spot Lounge
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-200 transition"
        >
          Grab Your Ticket 🎟️
        </motion.button>

        <div className="mt-8 flex justify-center gap-4 text-white/80 text-sm">
          <div className="flex items-center gap-1">
            <GlassCheers className="w-4 h-4" /> <span>@linkup_vibes</span>
          </div>
          <div className="flex items-center gap-1">
            <Music className="w-4 h-4" /> <span>#GoodVibesOnly</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
