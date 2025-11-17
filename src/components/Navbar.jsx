import { Menu, Phone, MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-40" dir="rtl">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">ל</div>
          <div>
            <div className="text-lg font-semibold">עו"ד ליאור כהן</div>
            <div className="text-xs text-gray-500">משרד עורכי דין ונוטריונים</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#about" className="hover:text-blue-600">אודות</a>
          <a href="#services" className="hover:text-blue-600">תחומי התמחות</a>
          <a href="#contact" className="hover:text-blue-600">צור קשר</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer" aria-label="ווטסאפ" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-2 text-sm font-medium shadow">
            <MessageCircle className="w-4 h-4" /> וואטסאפ
          </a>
          <a href="tel:03-5555555" className="hidden sm:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 text-sm font-medium shadow">
            <Phone className="w-4 h-4" /> התקשר
          </a>
          <button className="md:hidden p-2 rounded-lg border text-gray-700">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
