import { useState, useEffect } from "react";
import { FiShare2, FiTrash2, FiPlus, FiX } from "react-icons/fi";
import { createClient } from "@supabase/supabase-js";

// Inisialisasi Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function GuestGenerator() {
  const [guestName, setGuestName] = useState("");
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchGuests();
  }, []);

  // 1. Ambil daftar tamu
  const fetchGuests = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("guests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setError("Gagal memuat daftar tamu.");
      console.error(error);
    } else {
      setGuests(data || []);
    }
    setLoading(false);
  };

  // 2. Tambah tamu
  const addGuest = async () => {
    if (!guestName.trim()) {
      setError("Nama tamu tidak boleh kosong.");
      return;
    }
    setLoading(true);
    const { data, error } = await supabase
      .from("guests")
      .insert([{ name: guestName.trim() }])
      .select();

    if (error) {
      setError("Gagal menambah tamu.");
      console.error(error);
    } else {
      setGuests([data[0], ...guests]);
      setGuestName("");
      setError("");
    }
    setLoading(false);
  };

  // 3. Hapus tamu
  const deleteGuest = async (id) => {
    if (!confirm("Yakin ingin hapus tamu ini?")) return;
    setLoading(true);
    const { error } = await supabase.from("guests").delete().eq("id", id);

    if (error) {
      setError("Gagal menghapus tamu.");
      console.error(error);
    } else {
      setGuests((prev) => prev.filter((g) => g.id !== id));
    }
    setLoading(false);
  };

  // Share link (logika tetap sama)
  const shareGuest = async (guest) => {
    const url = `${window.location.origin}/?guest=${encodeURIComponent(guest.name)}`;
    const message = `Tanpa mengurangi rasa hormat.
Kami sangat mengharapkan kehadiran Bapak/Ibu/Saudara/i untuk memberikan doa restu dalam acara kami, 
dalam Upacara Manusa Yadnya Menek Kelih.
Hari/tgl  : Minggu, 12 April 2026
Waktu   : 16:00 Wita - Selesai
Tempat : Griya rurung alit, Br. Griya, Ds. Tampaksiring, Kab. Gianyar

Undangan dapat diakses melalui link berikut:

${url}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa & restu.

Terima Kasih 🙏
Om Shanti Shanti Shanti Om`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Undangan Pernikahan",
          text: message,
        });
      } else {
        // Fallback jika browser PC (Copy link)
        await navigator.clipboard.writeText(message);
        alert("Pesan undangan berhasil disalin ke clipboard!");
      }
    } catch (err) {
      console.error("Gagal share:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-center mb-4 text-4xl font-semibold font-qwitcher text-amber-400 ">
        ByO.Digital
      </h1>
      <h2 className="text-lg text-black font-semibold mb-3">nama tamu:</h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-3 flex justify-between items-center">
          <span>{error}</span>
          <button onClick={() => setError("")}>
            <FiX />
          </button>
        </div>
      )}

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          placeholder="Nama Teman/Saudara/Keluarga"
          className="flex-1 text-black border border-gray-300 rounded px-3 py-2 focus:outline-none"
        />
        <button
          onClick={addGuest}
          disabled={loading}
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600 disabled:opacity-50"
        >
          <FiPlus size={20} />
        </button>
      </div>

      <p className="mb-2 text-sm text-gray-600">
        {guests.length} nama tamu ditemukan
      </p>

      <div className="space-y-2">
        {guests.map((guest) => (
          <div
            key={guest.id}
            className="flex items-center justify-between bg-white shadow px-3 py-2 rounded"
          >
            <span className="text-gray-800">{guest.name}</span>
            <div className="flex gap-2">
              <button
                onClick={() => deleteGuest(guest.id)}
                disabled={loading}
                className="bg-gray-200 p-2 rounded hover:bg-gray-300 disabled:opacity-50"
              >
                <FiTrash2 size={18} className="text-red-600" />
              </button>
              <button
                onClick={() => shareGuest(guest)}
                className="bg-green-600 p-2 rounded hover:bg-green-700"
              >
                <FiShare2 size={18} className="text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestGenerator;
