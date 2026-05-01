import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
    <div className="pb-32">
      {/* Premium Contact Section with Background */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/uploads/gallery/image_36.png"
            alt="Contact Background"
            className="w-full h-full object-cover brightness-110"
          />
          {/* Gradient Overlay - Stronger on left, lighter on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/30 to-white/10" />
          {/* Additional blur effect */}
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid gap-12 lg:gap-16 lg:grid-cols-[60%_40%] items-start"
          >
            {/* Left Section - Content */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="space-y-6 max-w-2xl"
              >
                {/* Label */}
                <span className="inline-block uppercase tracking-widest text-xs font-bold text-gray-700 letter-spacing-2">
                  Contact the Department
                </span>

                {/* Heading */}
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
                  We are ready to assist you.{' '}
                  <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                    Get in touch with us today.
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                  Have questions about admissions, programs, or research collaborations? Send us a message and our department team will respond shortly.
                </p>
              </motion.div>

              {/* Contact Info Blocks */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
              >
                {/* Visit Us */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-yellow-200/10 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />
                  <div className="relative rounded-2xl border-2 border-yellow-500/60 bg-white/80 backdrop-blur-sm p-8 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl border-2 border-yellow-500 bg-yellow-50 mb-6 group-hover:bg-yellow-100 transition-colors">
                      <MapPin className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Visit Us</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      FACULTY OF COMPUTING AND IT, GMU Campus<br />
                      1st Floor, Room No: W120
                    </p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-yellow-200/10 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />
                  <div className="relative rounded-2xl border-2 border-yellow-500/60 bg-white/80 backdrop-blur-sm p-8 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl border-2 border-yellow-500 bg-yellow-50 mb-6 group-hover:bg-yellow-100 transition-colors">
                      <Mail className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Email</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      dean.fcit@gmu.ac.in
                    </p>
                  </div>
                </motion.div>

                {/* Call Us */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-yellow-200/10 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />
                  <div className="relative rounded-2xl border-2 border-yellow-500/60 bg-white/80 backdrop-blur-sm p-8 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl border-2 border-yellow-500 bg-yellow-50 mb-6 group-hover:bg-yellow-100 transition-colors">
                      <Phone className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Call Us</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      +91 9141158736
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Globe Element */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative w-32 h-32 mt-8"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200/20 to-yellow-100/10 backdrop-blur-sm border border-yellow-300/30 shadow-2xl shadow-yellow-400/10" />
              </motion.div>
            </div>

            {/* Right Section - Glassmorphism Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/30 to-yellow-200/20 blur-2xl opacity-40" />

              {/* Form Card */}
              <div className="relative rounded-3xl backdrop-blur-xl bg-white/15 border border-white/30 p-10 shadow-2xl">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-full backdrop-blur-sm bg-white/40 border border-white/50 px-6 py-3.5 text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:bg-white/60 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-full backdrop-blur-sm bg-white/40 border border-white/50 px-6 py-3.5 text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:bg-white/60 transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What would you like to ask?"
                      rows={5}
                      className="w-full rounded-2xl backdrop-blur-sm bg-white/40 border border-white/50 px-6 py-3.5 text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:bg-white/60 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(200, 164, 93, 0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 px-6 py-4 text-base font-bold text-white shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
                  >
                    Submit Message
                  </motion.button>
                </form>

                {/* Sparkle Icon */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute bottom-6 right-6 text-yellow-400/60"
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
