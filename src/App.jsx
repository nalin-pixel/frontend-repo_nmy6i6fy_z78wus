import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import AccessibilityMenu from './components/AccessibilityMenu'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <AccessibilityMenu />
      <footer className="border-t py-8 text-center text-sm text-gray-600">© {new Date().getFullYear()} כל הזכויות שמורות. עו"ד ליאור כהן.</footer>
    </div>
  )
}

export default App
