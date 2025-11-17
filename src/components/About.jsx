export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50" dir="rtl">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">אודות המשרד</h2>
          <p className="text-gray-700 leading-8">
            למעלה מ-15 שנות ניסיון בייצוג לקוחות פרטיים ועסקיים במגוון תחומים משפטיים. המשרד שם דגש על שירות אישי, זמינות גבוהה והובלת לקוחות לתוצאות מיטביות.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> יחס אישי, מקצועיות ושקיפות מלאה</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> פתרונות יצירתיים ומותאמים אישית</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> גישה נחושה להשגת זכויות הלקוח</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl border bg-white shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-3">למה לבחור בנו</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-gray-50">מענה מהיר בכל ערוצי התקשורת</div>
            <div className="p-4 rounded-xl bg-gray-50">התאמת אסטרטגיה משפטית אישית</div>
            <div className="p-4 rounded-xl bg-gray-50">ליווי צמוד לאורך כל הדרך</div>
            <div className="p-4 rounded-xl bg-gray-50">תמחור הוגן ושקוף</div>
          </div>
        </div>
      </div>
    </section>
  );
}
