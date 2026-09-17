import { motion } from "framer-motion";
import Foto from "./Foto";
import Countdown from "../components/Countdown";
import CommentSection from "./Comment";
import Snapshot from "./Snapshot";
import Amplop from "../components/Amplop";

// Variants Animasi
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

export default function Invitation() {
  return (
    <div className="w-full  bg-center bg-fixed bg-cover text-gray-800">
      {/* ================= Opening Section ================= */}
      <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center text-white overflow-hidden">
        {/* Fixed Background Image */}
        <img
          src="/assets/Galery/profil.jpg"
          alt="Background"
          className="fixed inset-0 w-full h-full object-cover -z-10"
        />

        {/* Blur Layer */}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>
        <motion.img
          src="/assets/bunga.png"
          alt="ornament"
          className="absolute bottom-0 left-0 w-28 md:w-32 z-30"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
        {/* Content */}
        <div className="relative space-y-20 z-20 text-center px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
          >
            <img
              src="/assets/icon-1.png"
              alt="Wedding Icon"
              className="w-16 mx-auto mb-4 drop-shadow-lg"
            />
            <p className="uppercase tracking-[0.4em] text-sm md:text-base text-[#FAE29F] font-playfair">
              The Wedding of
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            className="mb-12"
          >
            <img
              src="/assets/Nama Pengantin.png"
              alt="Nama Pasangan"
              className="mx-auto w-[350px] md:w-[420px] mb-6"
            />
            <div className="flex items-center justify-center space-x-3 text-sm md:text-lg tracking-[0.2em]">
              <span className="w-12 border-t-2 border-[#FAE29F]"></span>
              <p className="uppercase text-[#FAE29F] font-semibold">
                01 Oktober 2026
              </p>
              <span className="w-12 border-t-2 border-[#FAE29F]"></span>
            </div>
          </motion.div>

          {/* <motion.p
            className="max-w-2xl mx-auto text-[14px] font-light leading-relaxed italic text-gray-100 mt-20 px-4 py-4"
            initial="hidden"
            animate="visible"
            custom={0.6}
            variants={fadeUp}
          >
            Semerbak rindu kuasai udara panas ini, senja pun ikut berdebar
            menanti berita mu tentang perang dan cinta. Dan kita berteduh di
            bawah mimpi besar, jika cinta itu ada untuk semua manusia. Bersama
            cahaya semesta dan senandung surya, lahirlah kamu; penguasa hari
            yang hangat dan penuh cinta.
            <motion.span className="block pt-3" variants={fadeUp} custom={0.8}>
              Seraya-rayaku tentang arti kita Genggaman kita mengerat Hancurkan
              gelombang Dan menang Bersama kita menang
            </motion.span>
          </motion.p> */}
        </div>
      </section>

      {/* ================= Sambutan ================= */}
      <section className="bg-gradient-to-b from-white to-[#FFFDF5] text-center py-16 px-6 relative">
        <img
          src="/assets/B-utama.png"
          className="absolute top-0 right-0 w-28 opacity-40"
          alt=""
        />
        <img
          src="/assets/B-utama 1.png"
          className="absolute top-0 left-0  w-28 opacity-40"
          alt=""
        />
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#D4AF37] rounded-full"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.img
          className="w-28 sm:w-36 mx-auto mb-4"
          src="/assets/icon/Om Swastyastu.png"
          alt="Om Swastyastu"
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={scaleFade}
        />
        <motion.h2
          className="font-qwitcher text-[#D4AF37] text-5xl sm:text-6xl font-bold mb-5 drop-shadow-sm"
          initial="hidden"
          animate="visible"
          custom={0.4}
          variants={scaleFade}
        >
          Om Swastyastu
        </motion.h2>
        <motion.p
          className="text-[16px] sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto font-light"
          initial="hidden"
          animate="visible"
          custom={0.6}
          variants={fadeUp}
        >
          Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang
          Maha Esa, kami bermaksud mengundang Bapak/Ibu/Saudara/i pada Upacara
          Manusa Yadnya Pawiwahan (Pernikahan) dan Mepandes putra-putri kami.
        </motion.p>
      </section>

      {/* ================= Foto Section ================= */}
      <section className="bg-black/50">
        <Foto />
      </section>

      {/* ================= Ayat Section ================= */}
      <section className="bg-gradient-to-r from-white to-[#FFFDF5] py-14 text-center px-6 relative">
        <img
          src="/assets/kamboja.png"
          className="absolute top-0 right-0  w-96 opacity-40"
          alt=""
        />
        <p className="text-[16px] sm:text-xl italic text-gray-800 leading-relaxed max-w-2xl mx-auto">
          “Wahai pasangan suami-istri, semoga kalian tetap bersatu dan tidak
          pernah terpisahkan. Semoga kalian mencapai hidup penuh kebahagiaan,
          tinggal di rumah yang penuh kegembiraan bersama seluruh keturunanmu.”
        </p>
        <div className="border-t-2 border-b-2 border-[#D4AF37] w-48 mx-auto mt-6 py-3">
          <h1 className="font-semibold text-gray-700">RG VEDA X.85.42</h1>
        </div>
      </section>

      {/* ================= Profil Mempelai ================= */}
      <section className="px-6 py-16 bg-gradient-to-b from-[#fffdf7] to-[#fdf6e3] text-center relative">
        <div className="mb-12">
          <motion.h2
            className="text-2xl md:text-3xl font-playfair text-gray-700 tracking-wide"
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
          >
            Dengan Rahmat Tuhan Yang Maha Esa
          </motion.h2>
          <motion.p
            className="mt-2 text-gray-500 italic"
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
          >
            Kami persembahkan kedua mempelai
          </motion.p>
          <motion.div
            className="w-24 h-[2px] bg-[#D4AF37] mx-auto mt-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12  max-w-5xl mx-auto">
          {/* Mempelai Pria */}
          <motion.div
            className="p-6 rounded-3xl overflow-hidden shadow-lg bg-white/90 border border-[#D4AF37]/40 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            variants={fadeUp}
          >
            <img
              src="/assets/right-corner.png"
              className="absolute top-0 right-0 w-28 opacity-40"
              alt=""
            />
            <img
              src="/assets/left-corner.png"
              className="absolute top-0 left-0  w-28 opacity-40"
              alt=""
            />
            <img
              src="/assets/bunga.png"
              className="absolute bottom-0 left-0  w-36 opacity-40"
              alt=""
            />
            <div className="relative inline-block mb-6">
              <img
                src="/assets/frame1.png"
                alt="Frame"
                className="relative w-[240px] h-[380px] z-20"
              />
              <div className="absolute inset-[20px] rounded-[160px] overflow-hidden z-10">
                <img
                  src="/assets/Galery/Profil Cowok.jpg"
                  alt="Foto Pria"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-qwitcher text-[#D4AF37] text-6xl leading-none drop-shadow-sm">
              Radita
            </h3>
            <p className="text-lg md:text-xl font-playfair font-semibold text-gray-800 mt-1">
              Wayan Radita Pramana
            </p>
            <p className="text-xs tracking-wide uppercase text-gray-500 mt-3">
              Putra dari pasangan
            </p>
            <div className="mt-3 space-y-1 font-playfair text-base md:text-lg leading-relaxed">
              <h4 className="font-semibold text-gray-800">
                I Made Separsa
              </h4>
              &<h4 className="text-gray-600"></h4>
              <h4 className="font-semibold text-gray-800">
                Ni Wayan Juliari
              </h4>
            </div>
            <p className="mt-4 text-sm text-gray-600 italic">
              Link.Kelod Kauh, Abianbase, Gianyar
            </p>
          </motion.div>

          {/* Mempelai Wanita */}
          <motion.div
            className="p-6 rounded-3xl overflow-hidden shadow-lg bg-white/90 border border-[#D4AF37]/40 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            variants={fadeUp}
          >
            <img
              src="/assets/right-corner.png"
              className="absolute top-0 right-0 w-28 opacity-40"
              alt=""
            />
            <img
              src="/assets/left-corner.png"
              className="absolute top-0 left-0  w-28 opacity-40"
              alt=""
            />
            <img
              src="/assets/bunga.png"
              className="absolute bottom-0 left-0  w-36 opacity-40"
              alt=""
            />
            <div className="relative inline-block mb-6">
              <img
                src="/assets/frame1.png"
                alt="Frame"
                className="relative w-[240px] h-[380px] z-20"
              />
              <div className="absolute inset-[20px] rounded-[160px] overflow-hidden z-10">
                <img
                  src="/assets/Galery/Profil Cewek.jpg"
                  alt="Foto Wanita"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-qwitcher text-[#D4AF37] text-6xl leading-none drop-shadow-sm">
              Trivena
            </h3>
            <p className="text-lg md:text-xl font-playfair font-semibold text-gray-800 mt-1">
              Ni Komang Trivena Lujan
            </p>
            <p className="text-xs tracking-wide uppercase text-gray-500 mt-3">
              Putri dari pasangan
            </p>
            <div className="mt-3 space-y-1 font-playfair text-base md:text-lg leading-relaxed">
              <h4 className="font-semibold text-gray-800">
                I Wayan Angker
              </h4>
              <h4 className="text-gray-600">&</h4>
              <h4 className="font-semibold text-gray-800">
                Ni Wayan Kanti
              </h4>
            </div>
            <p className="mt-4 text-sm text-gray-600 italic">
              Br.Lebih Duur Kaja
            </p>
          </motion.div>
        </div>
      </section>
      {/* <section className="px-6 py-16 bg-gradient-to-b from-[#fdf6e3] to-[#fffdf7] text-center relative"> */}
        {/* <motion.h2
          className="text-2xl md:text-3xl font-playfair text-gray-700 tracking-wide"
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
        >
          Mepandes
        </motion.h2> */}

        {/* <motion.p
          className="mt-2 text-gray-500 italic"
          initial="hidden"
          animate="visible"
          custom={0.4}
          variants={fadeUp}
        >
          Dengan penuh hormat kami sertakan nama-nama yang mengikuti upacara
          Mepandes
        </motion.p>

        <motion.div
          className="w-24 h-[2px] bg-[#D4AF37] mx-auto mt-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        /> */}

        {/* Card daftar nama */}
        {/* <motion.div
          className="mt-10 px-20 max-w-3xl mx-auto p-8 rounded-3xl shadow-lg bg-white/90 border border-[#D4AF37]/40 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.6}
          variants={fadeUp}
        > */}
          {/* Dekorasi pojok biar mirip section mempelai */}
          {/* <img
            src="/assets/right-corner.png"
            className="absolute top-0 right-0 w-24 opacity-40"
            alt=""
          />
          <img
            src="/assets/left-corner.png"
            className="absolute top-0 left-0 w-24 opacity-40"
            alt=""
          />
          <img
            src="/assets/bunga.png"
            className="absolute bottom-0 left-0 w-28 opacity-40"
            alt=""
          />

          <div className="relative z-10  space-y-4 text-center">
            <p className="font-qwitcher text-[#D4AF37] text-4xl leading-none drop-shadow-sm">
              Ida Ayu Widiasih
            </p>
            <p className="font-qwitcher text-[#D4AF37] text-4xl leading-none drop-shadow-sm">
              Ida Bagus Widyadana
            </p>
            <p className="font-qwitcher text-[#D4AF37] text-4xl leading-none drop-shadow-sm">
              Ida Ayu Alika Naila Putri
            </p>
          </div>
        </motion.div> */}
      {/* </section> */}

      {/* ================= Event Section ================= */}
      <section className="bg-gradient-to-b from-black/70 to-black/90 text-white text-center px-6 py-24 relative">
        {/* Divider emas atas */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-[#D4AF37] rounded-full"></div>

        {/* Judul Section */}
        <h2 className="font-playfair font-bold text-5xl md:text-6xl mb-6 tracking-wider text-[#FAE29F] drop-shadow-lg">
          Event
        </h2>

        {/* Subjudul / intro */}
        <p className="mb-16 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          Dengan penuh sukacita, kami mengundang Bapak/Ibu/Saudara/i untuk hadir
          dan merayakan momen bahagia kami pada hari istimewa ini.
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Pawiwahan Card */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-3xl shadow-xl p-10 border border-[#D4AF37]/40 flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            variants={fadeUp}
          >
            <div className="flex flex-col leading-tight mb-7">
              <h3 className="font-playfair text-3xl md:text-4xl text-[#FAE29F] drop-shadow-md m-0">
                Pawiwahan
              </h3>
              {/* <h3 className="font-playfair text-3xl md:text-4xl text-[#FAE29F] drop-shadow-md m-0">
                &
              </h3>
              <h3 className="font-playfair text-3xl md:text-4xl text-[#FAE29F] drop-shadow-md m-0">
                Mepandes
              </h3> */}
            </div>

            <div className="text-lg md:text-xl font-semibold mb-2">
              Kamis, 01 Oktober 2026
            </div>
            <div className="text-lg md:text-xl font-medium mb-4">
              13:00 (WITA) – SELESAI
            </div>
            <div className="text-sm italic text-gray-300 mb-6">
              Link. Kelod Kauh, Abianbase, Gianyar
            </div>
            <Countdown targetDate="2026-10-01T10:00:00" />
          </motion.div>

          {/* Resepsi Card */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-3xl shadow-xl p-10 border border-[#D4AF37]/40 flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            variants={fadeUp}
          >
            <h3 className="font-playfair text-3xl md:text-4xl text-[#FAE29F] mb-4 drop-shadow-md">
              Resepsi
            </h3>
            <div className="text-lg md:text-xl font-semibold mb-2">
              Kamis, 01 Oktober 2026
            </div>
            <div className="text-lg md:text-xl font-medium mb-4">
              13:00 (WITA) – Selesai
            </div>
            <div className="text-sm italic text-gray-300 mb-6">
              Link. Kelod Kauh, Abianbase, Gianyar
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=-8.605650940075284,115.1871287228311
"
            >
              <button className="bg-[#D4AF37] text-black hover:bg-yellow-600 transition px-6 py-3 rounded-lg font-semibold shadow-md">
                Open Map
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================= Gallery ================= */}
      <section className="py-16 pb-0 text-center bg-gradient-to-b from-[#fffdf7] to-[#fdf6e3]">
        <motion.h2
          className="font-qwitcher font-bold text-6xl text-gray-800 mb-10 relative inline-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          variants={fadeUp}
        >
          Momen Bahagia
          <span className="block w-20 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full"></span>
        </motion.h2>
        <Snapshot />
      </section>

      <section className="">
        <Amplop />
      </section>

      {/* ================= Comment Section ================= */}
      <section className="bg-black/50 text-white px-6 py-14 ">
        <CommentSection />
      </section>
    </div>
  );
}
