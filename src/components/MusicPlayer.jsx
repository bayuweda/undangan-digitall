import { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // default full volume

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div className="fixed z-[9999] bottom-5 right-5 bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-4 flex items-center gap-3 w-[220px]">
      {/* Audio Tag */}
      <audio
        ref={audioRef}
        src="/assets/musik/Sezairi.mp3
"
        loop
      />

      {/* Play / Pause */}
      <button
        onClick={togglePlay}
        className="p-2 bg-indigo-500 text-white rounded-full shadow hover:bg-indigo-600 transition"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      {/* Volume */}
      <div className="flex items-center gap-2 flex-1">
        <FaVolumeUp className="text-gray-600" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full accent-indigo-500"
        />
      </div>
    </div>
  );
}
