import './index.css'
import { Toaster } from 'sonner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import MedicalViewerProject from './components/MedicalViewerProject'
import Education from './components/Education'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Toaster position="top-right" theme="dark" richColors />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <MedicalViewerProject />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
