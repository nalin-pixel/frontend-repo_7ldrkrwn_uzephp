import { motion } from 'framer-motion';
import { Heart, Home, Phone, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-rose-50">
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <motion.div
          className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-rose-200 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-200 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/60 px-4 py-2 text-rose-700 backdrop-blur"
          >
            <Heart className="h-4 w-4" />
            Compassionate Senior Living
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl"
          >
            AAJI CARE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 max-w-2xl text-lg text-gray-600"
          >
            A warm, dignified, and vibrant community where every elder is cared for like family.
            Personalized support, round-the-clock assistance, and joyful living under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-white shadow-lg shadow-rose-200 transition hover:bg-rose-700"
            >
              <Phone className="h-5 w-5" /> Book a Visit
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-gray-800 transition hover:border-gray-400"
            >
              <Home className="h-5 w-5" /> Learn More
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: '24/7 Nursing', value: 'On-site' },
            { label: 'Personalized Care Plans', value: 'Tailored' },
            { label: 'Daily Activities', value: 'Engaging' },
            { label: 'Nutritious Meals', value: 'In-house' },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl border border-rose-100 bg-white/70 p-4 text-center shadow-sm backdrop-blur"
            >
              <div className="text-sm text-gray-500">{item.label}</div>
              <div className="text-lg font-semibold text-gray-900">{item.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
