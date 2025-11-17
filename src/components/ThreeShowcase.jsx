import { useState } from 'react'
import Spline from '@splinetool/react-spline'

export default function ThreeShowcase() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative w-full h-[360px] sm:h-[420px] md:h-[520px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-white shadow-2xl">
      {!loaded && (
        <div className="absolute inset-0 grid place-items-center">
          <div className="animate-pulse text-center">
            <div className="mx-auto mb-3 h-10 w-10 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
            <p className="text-sm text-gray-600">טוען סצנה תלת־ממדית…</p>
          </div>
        </div>
      )}
      <Spline
        className="absolute inset-0"
        scene="https://prod.spline.design/pb3ubQ3Kz0v6s1kL/scene.splinecode"
        onLoad={() => setLoaded(true)}
      />
      {/* Hint bubble */}
      <div className="absolute bottom-3 left-3 md:left-auto md:right-3 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-xs text-gray-700 shadow">
        גרור עם העכבר כדי לסובב | גלילה להתקרבות
      </div>
    </div>
  )
}
