import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { Heart } from 'lucide-react';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-rose-100">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2 font-extrabold text-rose-700">
          <Heart className="h-5 w-5" /> AAJI CARE
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
          <a href="#about" className="hover:text-rose-700">About</a>
          <a href="#services" className="hover:text-rose-700">Services</a>
          <a href="#contact" className="hover:text-rose-700">Contact</a>
        </nav>
        <a href="#contact" className="hidden sm:inline-flex rounded-full bg-rose-600 px-4 py-2 text-white text-sm hover:bg-rose-700">Book a Visit</a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-rose-100">
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-6 sm:grid-cols-3">
        <div>
          <div className="font-extrabold text-rose-700">AAJI CARE</div>
          <p className="mt-2 text-sm text-gray-600">A home that cares, a community that cherishes. We’re here for every step of the journey.</p>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Quick Links</div>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li><a href="#about" className="hover:text-rose-700">About</a></li>
            <li><a href="#services" className="hover:text-rose-700">Services</a></li>
            <li><a href="#contact" className="hover:text-rose-700">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Admissions</div>
          <p className="mt-2 text-sm text-gray-600">Call +91 98765 43210 or email hello@aajicare.org to start the conversation.</p>
        </div>
      </div>
      <div className="border-t border-rose-100 py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} AAJI CARE. All rights reserved.</div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
