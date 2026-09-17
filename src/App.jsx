import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Home from "./pages/Home";
import Invitation from "./pages/Invitation";
import GuestGenerator from "./pages/Generator";
import CommentSection from "./pages/Comment";
import OurGallery from "./pages/Gallery";

export default function App() {
  const location = useLocation();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("❌ Gagal play:", err));
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.error("❌ Gagal play:", err));
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      {/* Audio Global */}
      <audio
        ref={audioRef}
        src="/musik/Sezairi.mp3"
        loop
        preload="auto"
        style={{ display: "none" }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Floating button → hanya muncul kalau bukan di halaman "/" */}
      {location.pathname !== "/" && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-6  right-6 z-20 w-12 h-12 rounded-xl shadow-lg flex items-center justify-center bg-black/40 backdrop-blur-xs hover:scale-110 transition-transform"
        >
          {isPlaying ? (
            // Icon Pause
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6 text-[#D4AF37]"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 3.5A.5.5 0 0 1 6 4v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5" />
            </svg>
          ) : (
            // Icon Play
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6 text-[#D4AF37]"
              viewBox="0 0 16 16"
            >
              <path d="M11.596 8.697l-6.363 3.692A.5.5 0 0 1 4.5 12V4a.5.5 0 0 1 .733-.441l6.363 3.692a.5.5 0 0 1 0 .846" />
            </svg>
          )}
        </button>
      )}

      {/* Routing */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Outlet context={{ toggleMusic, playMusic }} />}>
            <Route path="/" element={<Home />} />
            <Route path="/invitation" element={<Invitation />} />
            <Route path="/generator" element={<GuestGenerator />} />
            <Route path="/comment" element={<CommentSection />} />
            <Route path="/gallery" element={<OurGallery />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}
