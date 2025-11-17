import { motion } from 'framer-motion'
import ThreeShowcase from './ThreeShowcase'

export default function Hero() {
  return (
    <section className="relative overflow-hidden" dir="rtl">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-20 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900"
            >
              ייצוג משפטי מקצועי,
              <br className="hidden sm:block" />
              יחס אישי ותוצאות.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-gray-700 text-lg leading-relaxed"
            >
              משרדנו מתמחה בדיני משפחה, מקרקעין, חוזים ונזיקין. אנו מלווים לקוחות פרטיים ועסקיים במקצועיות, שקיפות ושירותיות בלתי מתפשרת.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow">ייעוץ ראשוני ללא התחייבות</a>
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-900 hover:bg-black text-white font-semibold">לתחומי ההתמחות</a>
            </motion.div>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } }
              }}
              className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-600"
            >
              {['זמינות מלאה','דיסקרטיות מלאה','ניסיון מוכח','שירות בכל הארץ'].map((t, i) => (
                <motion.li
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                  className="flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> {t}
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <ThreeShowcase />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow p-4 text-sm text-gray-700">
              <div className="font-semibold">ליווי צמוד מהפגישה הראשונה</div>
              <div className="text-gray-500">שקיפות מלאה לאורך כל התהליך</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
