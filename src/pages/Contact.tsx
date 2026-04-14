import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pb-32 pt-32">
      <section className="relative overflow-hidden py-24 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.15),_transparent_30%)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-xl rounded-[60px] p-12 shadow-2xl border border-slate-200"
          >
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
              <div className="space-y-8">
                <div className="space-y-4 max-w-xl">
                  <span className="inline-flex items-center gap-2 uppercase tracking-[0.45em] text-sm font-bold text-brand-accent">
                    Contact the Department
                  </span>
                  <h1 className="text-5xl font-display font-bold tracking-tight text-slate-950">
                    Get in touch with FCIT Department
                  </h1>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Have questions about admissions, programs, or research collaborations? Send us a message and our department team will respond shortly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="rounded-3xl bg-slate-950/95 p-8 text-white shadow-lg">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-accent mb-6">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Visit Us</h2>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      FCIT Department, GMU Campus<br />123 University Avenue, Tech City
                    </p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/95 p-8 text-white shadow-lg">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-accent mb-6">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Email Us</h2>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      admissions@fcit.edu<br />info@fcit.edu
                    </p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/95 p-8 text-white shadow-lg">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-accent mb-6">
                      <Phone className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Call Us</h2>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      +91 98765 43210<br />+91 91234 56789
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[40px] bg-slate-950 p-10 shadow-2xl">
                <h2 className="text-3xl font-display font-bold text-white mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <label className="block">
                    <span className="text-sm font-semibold text-slate-200">Name</span>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-5 py-4 text-white placeholder:text-slate-500 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-slate-200">Email</span>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-5 py-4 text-white placeholder:text-slate-500 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-slate-200">Message</span>
                    <textarea
                      placeholder="What would you like to ask?"
                      rows={6}
                      className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-5 py-4 text-white placeholder:text-slate-500 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                    />
                  </label>
                  <button
                    type="submit"
                    className="w-full rounded-3xl bg-brand-accent px-6 py-4 text-base font-bold text-white shadow-xl transition hover:bg-brand-primary"
                  >
                    Submit Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
