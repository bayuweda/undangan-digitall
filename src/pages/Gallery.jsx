import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";

// Semua gambar digabung
const images = [
  // "assets/Galery/bg depan.jpg",
    "assets/Galery/Foto 1.jpg",
    "assets/Galery/Foto 2.jpg",
    "assets/Galery/Foto 3.jpg",
    "assets/Galery/Foto 4.jpg",
    "assets/Galery/Foto 5.jpg",
    "assets/Galery/Foto 6.jpg",
    "assets/Galery/Foto 7.jpg",
    "assets/Galery/Foto 8.jpg",
  
];

// Fungsi acak
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Breakpoint Masonry
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 2,
};

// Komponen gallery
function MasonryGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-1 lg:gap-4 w-auto"
        columnClassName="masonry-column"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg group mb-4 cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={`/${src}`}
              alt="gallery"
              className="w-full h-auto object-cover rounded-md transform scale-105 group-hover:scale-100 transition duration-500 ease-in-out"
            />
          </div>
        ))}
      </Masonry>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] rounded-lg shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/${selectedImage}`}
              alt="Preview"
              className="object-contain w-full h-auto max-h-[90vh]"
            />
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-500 transition"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default function OurGallery() {
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    setShuffledImages(shuffleArray(images));
  }, []);

  return (
    <>
      <main className="w-full pb-10 ">
        <section className="drop-shadow-lg relative w-full lg:h-[500px] overflow-hidden">
          {/* Video background */}

          <img
            className="w-full h-full object-cover"
            src="/assets/Galery/profil.jpg"
            alt=""
            srcset=""
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          <img
            src="/assets/bunga.png"
            className="absolute bottom-0 left-0  w-28 opacity-40"
            alt=""
          />
          {/* Typography / Nama Pengantin */}
          <div className="absolute inset-0 flex   flex-col justify-center items-center text-center px-4">
            {/* Nama Pasangan */}

            <div className="flex flex-col leading-tight mb-9">
              <h3 className="font-qwitcher h-9 font-semibold text-[50px] md:text-4xl text-white drop-shadow-md m-0">
                Radita
              </h3>
              <h3 className="font-qwitcher h-9 font-semibold text-[50px] md:text-4xl text-white drop-shadow-md m-0">
                &
              </h3>
              <h3 className="font-qwitcher h-9 font-semibold text-[50px] md:text-4xl text-white drop-shadow-md m-0">
                Trivena
              </h3>
            </div>

            {/* Tanggal */}

            {/* Subtext */}
            <p className="mt-2 text-sm md:text-base text-gray-300/80">
              Welcome to our wedding gallery
            </p>
          </div>
        </section>

        <section className="w-[90%] mx-auto my-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6 border-b border-primary pb-2">
            Gallery
          </h2>
          <MasonryGallery images={shuffledImages} />
        </section>
      </main>
    </>
  );
}
