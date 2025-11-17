export default function Services() {
  const services = [
    { title: "דיני משפחה", desc: "גירושין, הסכמי ממון, משמורת ומזונות." },
    { title: "מקרקעין", desc: "עסקאות מכר, שכירות, רישום בטאבו וייצוג מול רשויות." },
    { title: "חוזים", desc: "ניסוח וייעוץ בחוזים מסחריים ופרטיים." },
    { title: "נזיקין", desc: "תביעות נזקי גוף ורכוש מול חברות הביטוח." },
  ];

  return (
    <section id="services" className="py-16 bg-white" dir="rtl">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">תחומי התמחות</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-5 rounded-xl border bg-white hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3 font-bold">{i+1}</div>
              <h3 className="font-semibold text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
