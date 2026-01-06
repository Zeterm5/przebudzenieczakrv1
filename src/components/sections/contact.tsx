import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,65,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent font-mono mb-4">
              Skontaktuj się z nami
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Masz pytania? Jesteśmy tutaj, by Ci pomóc w Twojej duchowej podróży
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ScrollReveal delay={0.2}>
            <motion.div
              className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-green-500/30 backdrop-blur-sm text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Mail className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-300 mb-2 font-mono">Email</h3>
              <p className="text-gray-300">
                <a href="mailto:kontakt@example.com" className="hover:text-green-400 transition">
                  kontakt@example.com
                </a>
              </p>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <motion.div
              className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-blue-500/30 backdrop-blur-sm text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-300 mb-2 font-mono">Telefon</h3>
              <p className="text-gray-300">
                <a href="tel:+48123456789" className="hover:text-blue-400 transition">
                  +48 123 456 789
                </a>
              </p>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <motion.div
              className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-purple-500/30 backdrop-blur-sm text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-purple-300 mb-2 font-mono">Adres</h3>
              <p className="text-gray-300">
                Polska<br />
                Online
              </p>
            </motion.div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <motion.div
            className="max-w-2xl mx-auto p-12 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-green-500/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-green-300 font-mono font-semibold mb-2">
                  Imię
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-green-500/30 rounded-lg text-white font-mono focus:outline-none focus:border-green-400 transition"
                  placeholder="Twoje imię"
                />
              </div>

              <div>
                <label className="block text-green-300 font-mono font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-green-500/30 rounded-lg text-white font-mono focus:outline-none focus:border-green-400 transition"
                  placeholder="Twój email"
                />
              </div>

              <div>
                <label className="block text-green-300 font-mono font-semibold mb-2">
                  Wiadomość
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-green-500/30 rounded-lg text-white font-mono focus:outline-none focus:border-green-400 transition resize-none"
                  placeholder="Twoja wiadomość"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg font-semibold hover:from-green-500 hover:to-blue-500 transition-all duration-300 shadow-xl border border-green-400 font-mono"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Wyślij wiadomość
              </motion.button>
            </form>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
