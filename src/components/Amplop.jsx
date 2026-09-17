import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Amplop() {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(null); // null = belum ada yg disalin

  // ✅ Daftar rekening
  const accounts = [
    {
      bank: "Bank BRI",
      number: "024801052206501",
      owner: "NI KOMANG TRIVENA LUJAN",
      logo: "assets/Logo BCA/Logo BRI.jpg",
    },
  ];

  // 🔒 Kunci scroll saat modal terbuka
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [showModal]);

  const handleCopy = (number) => {
    navigator.clipboard.writeText(number).then(() => {
      setCopied(number);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <main className="w-full bg-gradient-to-b from-[#fffdf7] to-[#fdf6e3] my-4 flex flex-col items-center justify-center px-6 py-12">
      <h1 className="font-bold font-qwitcher text-center text-5xl md:text-6xl mb-6 tracking-wider text-amber-500 drop-shadow-lg">
        Amplop Digital
      </h1>
      <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-10">
        Bagi keluarga dan sahabat yang ingin memberikan hadiah, silakan klik
        tombol di bawah ini:
      </p>

      {/* Tombol buka modal */}
      <button
        onClick={() => setShowModal(true)}
        className="px-4 flex gap-2 py-2 bg-[#D4AF37] text-white rounded-2xl font-semibold text-base shadow-lg hover:bg-amber-600 transition"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>
        </span>{" "}
        Beri Hadiah
      </button>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-amber-400/40 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl font-bold transition"
            >
              &times;
            </button>

            {/* Isi Modal */}
            <div className="flex flex-col gap-6">
              {accounts.map((acc, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center border-b pb-4 last:border-none"
                >
                  {/* Logo Bank */}
                  <img
                    src={acc.logo}
                    alt={acc.bank}
                    className=" w-14 object-contain mb-3"
                  />

                  <p className="text-sm text-gray-500">{acc.bank}</p>
                  <p className="mt-1 font-mono font-bold text-lg tracking-wide text-gray-900">
                    {acc.number}
                  </p>
                  <p className="text-gray-700 uppercase mt-2">{acc.owner}</p>

                  {/* Tombol salin */}
                  <button
                    onClick={() => handleCopy(acc.number)}
                    className="mt-5 flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                      />
                    </svg>
                    {copied === acc.number ? "Tersalin!" : "Salin Nomor"}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}

export default Amplop;
