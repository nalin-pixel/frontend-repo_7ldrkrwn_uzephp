import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const quotes = [
  {
    name: 'Meera K.',
    relation: 'Daughter of Resident',
    text: 'AAJI CARE embraced my mother like family. The staff is gentle, respectful, and always attentive.'
  },
  {
    name: 'Rahul P.',
    relation: 'Grandson of Resident',
    text: 'The activities and celebrations brought joy back to my grandfather’s life. Truly grateful.'
  },
  {
    name: 'Dr. N. Shah',
    relation: 'Family Physician',
    text: 'Professional medical oversight with a compassionate touch. I trust referring my patients here.'
  }
];

export default function Testimonials() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Families Say</h2>
          <p className="mt-3 text-gray-600">Real stories from the hearts we care for.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q, idx) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="rounded-2xl border border-gray-100 bg-gradient-to-b from-rose-50 to-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-1 text-rose-600">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-rose-500 text-rose-500" />
                ))}
              </div>
              <p className="mt-3 text-gray-700">“{q.text}”</p>
              <div className="mt-4 text-sm font-semibold text-gray-900">{q.name}</div>
              <div className="text-xs text-gray-500">{q.relation}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
