import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-rose-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact & Visit</h2>
          <p className="mt-3 text-gray-600">We’d love to show you around. Reach out to plan a visit.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <form className="grid gap-4">
              <div>
                <label className="text-sm text-gray-600">Your Name</label>
                <input type="text" className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:border-rose-400" placeholder="Full name" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-gray-600">Phone</label>
                  <input type="tel" className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:border-rose-400" placeholder="Contact number" />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Email</label>
                  <input type="email" className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:border-rose-400" placeholder="Email address" />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-600">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:border-rose-400" placeholder="Tell us how we can help" />
              </div>
              <button type="button" className="mt-2 inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-3 font-medium text-white shadow-lg shadow-rose-200 transition hover:bg-rose-700">
                Send Inquiry
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid content-start gap-6">
            <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-rose-600" />
                <div>
                  <div className="font-semibold text-gray-900">AAJI CARE Campus</div>
                  <p className="text-sm text-gray-600">Sunrise Avenue, Near City Park, Pune, Maharashtra 411001</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-rose-600" />
                <div>
                  <div className="font-semibold text-gray-900">Admissions & Assistance</div>
                  <p className="text-sm text-gray-600">+91 98765 43210</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-rose-600" />
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <p className="text-sm text-gray-600">hello@aajicare.org</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
