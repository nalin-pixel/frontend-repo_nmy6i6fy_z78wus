import { useEffect, useState } from "react";
import { Accessibility, Contrast, Minus, Plus, Underline, RefreshCw, Eye } from "lucide-react";

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(0); // steps: -2..+4
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [readableFont, setReadableFont] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const base = 16; // px
    root.style.fontSize = `${base * (1 + scale * 0.1)}px`;
  }, [scale]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("high-contrast", highContrast);
  }, [highContrast]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("grayscale", grayscale);
  }, [grayscale]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("link-underline", underlineLinks);
  }, [underlineLinks]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("readable-font", readableFont);
  }, [readableFont]);

  const resetAll = () => {
    setScale(0);
    setHighContrast(false);
    setGrayscale(false);
    setUnderlineLinks(false);
    setReadableFont(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50" dir="rtl">
      {/* Toggle Button */}
      <button
        aria-label="פתח תפריט נגישות"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full bg-black/80 text-white px-4 py-3 shadow-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <Accessibility className="w-5 h-5" />
        <span className="text-sm font-medium">נגישות</span>
      </button>

      {/* Panel */}
      {open && (
        <div className="mt-3 w-72 rounded-xl bg-white/95 backdrop-blur border border-gray-200 shadow-2xl p-4 text-gray-800">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base font-semibold">הגדרות נגישות</h3>
            <button onClick={() => setOpen(false)} className="text-sm text-gray-500 hover:text-gray-700">סגור</button>
          </div>

          {/* Text Size */}
          <div className="py-2">
            <div className="flex items-center gap-2 text-sm font-medium mb-2"><Eye className="w-4 h-4" /> גודל טקסט</div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setScale(s => clamp(s - 1, -2, 4))}
                className="p-2 rounded-md border border-gray-200 hover:bg-gray-50"
                aria-label="הקטנת טקסט"
              >
                <Minus className="w-4 h-4" />
              </button>
              <div className="flex-1 h-2 bg-gray-100 rounded-full relative">
                <div className="absolute left-0 top-0 h-2 bg-blue-500 rounded-full" style={{ width: `${clamp((scale + 2) / 6, 0, 1) * 100}%` }} />
              </div>
              <button
                onClick={() => setScale(s => clamp(s + 1, -2, 4))}
                className="p-2 rounded-md border border-gray-200 hover:bg-gray-50"
                aria-label="הגדלת טקסט"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="h-px bg-gray-100 my-3" />

          {/* Toggles */}
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-between">
              <span>ניגודיות גבוהה</span>
              <button
                onClick={() => setHighContrast(v => !v)}
                className={`px-3 py-1 rounded-full border ${highContrast ? "bg-black text-white border-black" : "bg-white text-gray-700 border-gray-300"}`}
              >
                <div className="flex items-center gap-1"><Contrast className="w-4 h-4" /> {highContrast ? "פעיל" : "כבוי"}</div>
              </button>
            </li>
            <li className="flex items-center justify-between">
              <span>גווני אפור</span>
              <button
                onClick={() => setGrayscale(v => !v)}
                className={`px-3 py-1 rounded-full border ${grayscale ? "bg-gray-800 text-white border-gray-800" : "bg-white text-gray-700 border-gray-300"}`}
              >
                {grayscale ? "פעיל" : "כבוי"}
              </button>
            </li>
            <li className="flex items-center justify-between">
              <span>קו תחתון לקישורים</span>
              <button
                onClick={() => setUnderlineLinks(v => !v)}
                className={`px-3 py-1 rounded-full border ${underlineLinks ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-300"}`}
              >
                <div className="flex items-center gap-1"><Underline className="w-4 h-4" /> {underlineLinks ? "פעיל" : "כבוי"}</div>
              </button>
            </li>
            <li className="flex items-center justify-between">
              <span>גופן קריא</span>
              <button
                onClick={() => setReadableFont(v => !v)}
                className={`px-3 py-1 rounded-full border ${readableFont ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-gray-700 border-gray-300"}`}
              >
                {readableFont ? "פעיל" : "כבוי"}
              </button>
            </li>
          </ul>

          <button
            onClick={resetAll}
            className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 font-medium"
          >
            <RefreshCw className="w-4 h-4" /> אפס הגדרות
          </button>
        </div>
      )}
    </div>
  );
}
