import { motion } from 'framer-motion';
import { Users, ShieldCheck, Utensils, Smile } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Users,
      title: 'Personalized Attention',
      desc: 'Small resident-to-caregiver ratio ensures every elder gets the time and warmth they deserve.'
    },
    {
      icon: ShieldCheck,
      title: 'Medical Supervision',
      desc: '24/7 nursing support, medication management, regular health check-ups, and emergency care protocols.'
    },
    {
      icon: Utensils,
      title: 'Wholesome Dining',
      desc: 'Nutritionist-designed meals with options for diabetic-friendly and low-sodium diets.'
    },
    {
      icon: Smile,
      title: 'Joyful Living',
      desc: 'Daily activities like yoga, music, art therapy, and community celebrations keep spirits high.'
    }
  ];

  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About AAJI CARE</h2>
            <p className="mt-4 text-gray-600">
              At AAJI CARE, we believe elder care is about dignity, purpose, and love. Our campus is designed to feel like home, with
              safe, accessible spaces, beautiful gardens, and warm community areas. Families trust us to provide compassionate, holistic care that
              balances independence with support.
            </p>
            <p className="mt-4 text-gray-600">
              We offer long-term stays, assisted living, respite care, and post-operative recovery with tailored care plans.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <div key={f.title} className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-rose-50 to-white p-5 shadow-sm transition hover:shadow-md">
                <f.icon className="h-6 w-6 text-rose-600 transition group-hover:scale-110" />
                <div className="mt-3 text-lg font-semibold text-gray-900">{f.title}</div>
                <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
