export default function Contact() {
  return (
    <section id="contact" className="py-16" dir="rtl">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">צור קשר</h2>
            <p className="text-gray-700 mb-6">נשמח לשוחח ולתאם פגישת ייעוץ ללא התחייבות.</p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>טלפון:</strong> 03-5555555</li>
              <li><strong>נייד:</strong> 050-1234567</li>
              <li><strong>דוא"ל:</strong> office@example.com</li>
              <li><strong>כתובת:</strong> רח' דוגמה 10, תל אביב</li>
            </ul>
          </div>
          <form className="p-6 rounded-2xl border bg-white shadow-sm space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">שם מלא</label>
              <input type="text" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="הקלד/י שם" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">נייד</label>
                <input type="tel" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="050-0000000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">דוא"ל</label>
                <input type="email" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">הודעה</label>
              <textarea rows="4" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="כאן ניתן לכתוב פנייה או שאלה"></textarea>
            </div>
            <button type="button" className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2">שליחה</button>
          </form>
        </div>
      </div>
    </section>
  );
}
