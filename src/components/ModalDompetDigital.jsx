import React, { useState, useRef, useEffect } from "react";

export default function ModalDompetDigital({ wallets }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(wallets?.[0] ?? null);
  const [copied, setCopied] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (open) {
      const previous = document.activeElement;
      modalRef.current?.focus();
      return () => previous?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (copied) {
      const t = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(t);
    }
  }, [copied]);

  function handleCopy(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => setCopied(true))
      .catch((e) => console.error(e));
  }

  return (
    <div>
      {/* Tombol Trigger */}
      <button
        onClick={() => setOpen(true)}
        className="bg-gradient-to-r from-amber-400 to-amber-500 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
      >
        🎁 KIRIM HADIAH
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div
            ref={modalRef}
            tabIndex={-1}
            className="relative z-10 w-full max-w-md mx-auto bg-white text-gray-800 rounded-2xl shadow-2xl p-6 animate-fadeIn"
          >
            {/* Tombol Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
            >
              ✕
            </button>

            {/* Logo */}
            <div className="flex justify-center mb-4">
              <img
                src="assets/Logo BCA/Logo-BCA 1.png"
                alt="Logo Amplop"
                className="h-14"
              />
            </div>

            {/* Informasi Bank */}
            <div className="text-center">
              <p className="text-sm text-gray-500">Bank Transfer</p>
              <p className="font-semibold text-lg text-gray-900 mt-1">
                BCA – I Putu Endra Putra
              </p>
            </div>

            {/* Nomor Rekening */}
            <div className="mt-5 bg-gray-100 p-4 rounded-lg text-center shadow-inner">
              <p className="text-sm text-gray-600">{selected?.name}</p>
              <p className="mt-1 font-mono font-bold text-lg tracking-wide text-gray-900 break-all">
                {selected?.account}
              </p>

              <button
                onClick={() => handleCopy(selected?.account ?? "")}
                className="mt-3 flex items-center gap-2 px-4 py-2 mx-auto bg-amber-500 text-white rounded-lg shadow-md hover:bg-amber-600 transition"
              >
                📋 Salin Nomor
              </button>

              {copied && (
                <div className="mt-2 text-sm text-green-600 font-medium">
                  ✅ Nomor berhasil disalin
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
