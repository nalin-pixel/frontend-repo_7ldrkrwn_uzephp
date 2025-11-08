import { motion } from 'framer-motion';
import { Stethoscope, Bed, Activity, Salad, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Stethoscope,
      name: 'Assisted Living',
      desc: 'Help with daily activities like bathing, dressing, mobility, and medication reminders.'
    },
    {
      icon: Bed,
      name: 'Post-Operative Care',
      desc: 'Short-term recovery with physiotherapy support, vitals monitoring, and doctor coordination.'
    },
    {
      icon: Activity,
      name: 'Recreation & Wellness',
      desc: 'Yoga, music therapy, board games, gardening, and cultural events for an active life.'
    },
    {
      icon: Salad,
      name: 'Diet & Nutrition',
      desc: 'Freshly cooked meals tailored to personal preferences and medical needs.'
    },
    {
      icon: Sparkles,
      name: 'Housekeeping & Laundry',
      desc: 'Daily housekeeping, linen service, and spotless rooms for a hygienic environment.'
    }
  ];

  return (
    <section id="services" className="relative bg-rose-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Services</h2>
          <p className="mt-3 text-gray-600">Everything your loved ones need for a safe, joyful, and dignified life.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group rounded-2xl border border-rose-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <s.icon className="h-7 w-7 text-rose-600 transition group-hover:scale-110" />
              <div className="mt-3 text-lg font-semibold text-gray-900">{s.name}</div>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
