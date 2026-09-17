// src/components/Snapshot.jsx
import { useState } from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { useNavigate, useLocation, useOutletContext } from "react-router-dom";

function Snapshot() {
  const navigate = useNavigate();
  const location = useLocation();
  const images = [
    "assets/Galery/profil.jpg",
     "assets/Galery/anto.jpg",
    "assets/Galery/Foto 1.jpg",
    "assets/Galery/Foto 2.jpg",
    "assets/Galery/Foto 3.jpg",
    "assets/Galery/Foto 4.jpg",
    "assets/Galery/Foto 5.jpg",
    "assets/Galery/Foto 6.jpg",
    "assets/Galery/Foto 7.jpg",
    "assets/Galery/Foto 8.jpg",
    
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  // breakpoint untuk grid (responsive)
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 2,
  };

  return (
    <main className="w-full ">
      {/* Gallery */}
      <section className="px-6  pt-0 ">
        {/* Masonry Grid */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-3"
          columnClassName="masonry-column"
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-xl shadow-lg border border-[#D4AF37]/30 group mb-3 cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`gallery-${idx}`}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition duration-500"
              />
              {/* Overlay Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <span className="text-white text-lg font-medium tracking-wide">
                  Lihat
                </span>
              </div>
            </motion.div>
          ))}
        </Masonry>

        {/* Modal Preview */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-black rounded-xl shadow-2xl overflow-hidden border border-[#D4AF37]/40"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="preview"
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-sm italic opacity-80">
                Momen Bahagia
              </p>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-red-500 transition"
              >
                &times;
              </button>
            </motion.div>
          </div>
        )}
        <div className="py-3">
          <button
            onClick={() => navigate(`/gallery`)} // ✅ pakai arrow function
            className="bg-[#D4AF37] text-white hover:bg-yellow-600 transition px-6 mb-6 py-2 rounded-lg font-semibold shadow-md"
          >
            Open Gallery
          </button>
        </div>
      </section>
    </main>
  );
}

export default Snapshot;
