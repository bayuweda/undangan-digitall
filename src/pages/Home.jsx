import { useNavigate, useLocation, useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const { playMusic } = useOutletContext();

  // Ambil query parameter dari URL
  const queryParams = new URLSearchParams(location.search);
  const guestName = queryParams.get("guest") || "Tamu Undangan";

  const handleOpenInvitation = () => {
    playMusic();
    setTimeout(() => {
      navigate(`/invitation`);
    }, 300); // kasih waktu audio mulai
  };

  return (
    <motion.div
      className="relative min-h-[100dvh] w-full flex flex-col items-center bg-cover justify-center text-white overflow-hidden bg-[url('/assets/Galery/anto.jpg')]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Overlay gradasi */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Header atas */}
      <motion.div
        className="z-50"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="flex justify-center mb-2">
          <motion.img
            src="/assets/icon-1.png"
            alt=""
            className="w-24 md:w-12"
            initial={{ rotate: -15, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </div>
        <p className="uppercase tracking-[0.3em] text-xs md:text-sm">
          THE WEDDING OF
        </p>
      </motion.div>

      {/* Wrapper foto + bingkai */}
      <motion.div
        className="relative inline-block z-50"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        <img
          src="/assets/frame1.png"
          alt="Frame"
          className="relative -left-0.5 w-[235px] h-[380px] object-contain z-20"
        />
        <div className="absolute my-6 mx-2 inset-[20px] rounded-[160px] overflow-hidden z-10">
          <motion.img
            src="/assets/Galery/profil.jpg"
            alt="Foto"
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          />
        </div>
      </motion.div>

      {/* Ornamental corner */}
      <motion.img
        src="/assets/B-utama.png"
        alt="ornament 1"
        className="absolute top-0 right-0 w-28 md:w-32 z-10"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
      <motion.img
        src="/assets/bunga.png"
        alt="ornament"
        className="absolute bottom-0 left-0 w-28 md:w-32 z-10"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      />

      {/* Text Header */}
      <motion.div
        className="text-center px-6 -top-6 relative z-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 1 }}
      >
        <h1 className=" text-[45px] font-qwitcher font-light ">
          Radita & Trivena
        </h1>
        <h3>Kepada Yth.Bapak/Ibu/Saudara/i</h3>
        <h3 className="font-bold text-[16px] text-[#FADE84]">{guestName}</h3>
        <h3 className="text-[13px] italic">You’re Invited!</h3>
      </motion.div>

      {/* Button */}
      <motion.div
        className="z-50 mt-2"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 10,
          delay: 1.2,
        }}
      >
        <button
          onClick={handleOpenInvitation}
          className="flex z-50 items-center gap-2 px-4 py-1 rounded-xl bg-white text-black text-[12px] font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-yellow-600"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          </span>
          BUKA UNDANGAN
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Home;
