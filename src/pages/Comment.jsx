import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Inisialisasi langsung di luar komponen
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function CommentSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isPresent, setIsPresent] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  // Ambil data dari Supabase
  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Gagal fetch:", error.message);
      } else {
        setComments(data || []);
      }
    };

    fetchComments();
  }, []);

  // Handle submit ke Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !message.trim() || isPresent === null) {
      alert("Semua kolom wajib diisi!");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from("comments")
      .insert([
        {
          name,
          message,
          is_present: isPresent, // Mapping ke kolom snake_case di DB
        },
      ])
      .select();

    if (error) {
      console.error("Error submit:", error.message);
      alert("Gagal kirim ucapan: " + error.message);
    } else if (data) {
      setComments([data[0], ...comments]);
      setName("");
      setMessage("");
      setIsPresent(null);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-lg font-semibold text-black mb-4">
        Ucapan & Kehadiran
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Nama Anda"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-black focus:outline-none"
        />

        <textarea
          placeholder="Tulis ucapan Anda..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-black focus:outline-none"
          rows="3"
        />

        <div className="flex gap-4 text-black">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={isPresent === true}
              onChange={() => setIsPresent(true)}
            />
            Hadir
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={isPresent === false}
              onChange={() => setIsPresent(false)}
            />
            Tidak Hadir
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#D4AF37] text-white py-2 rounded hover:brightness-90 disabled:opacity-50 transition-all"
        >
          {loading ? "Mengirim..." : "Kirim Ucapan"}
        </button>
      </form>

      <div className="mt-5 space-y-3 max-h-[400px] overflow-y-auto">
        {comments.length > 0 ? (
          comments.map((c) => (
            <div
              key={c.id}
              className="border border-gray-100 rounded p-3 bg-gray-50"
            >
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-black text-sm">{c.name}</h4>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded ${c.is_present ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                >
                  {c.is_present ? "Hadir" : "Absen"}
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                {c.message}
              </p>
              <span className="text-[9px] text-gray-400 block mt-2">
                {new Date(c.created_at).toLocaleDateString("id-ID", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center text-sm">Belum ada ucapan.</p>
        )}
      </div>
    </div>
  );
}

export default CommentSection;
