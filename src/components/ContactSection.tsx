import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0c0e0b]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#D99A35]/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="portfolio-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171914] border border-[#D99A35]/30 text-xs font-mono text-[#F5B94F] mb-4">
            <Mail size={13} />
            <span>LET&apos;S CONNECT & COLLABORATE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F0E8D8] tracking-wide mb-4">
            Start a Conversation
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#b8b09f] leading-relaxed">
            Whether you want to discuss full-stack engineering, collaborate on products, talk distributed systems, or explore music production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#D99A35]/20 shadow-2xl space-y-6">
              <h3 className="font-display text-2xl font-bold text-[#F0E8D8]">
                Direct Contacts
              </h3>
              <p className="text-xs text-[#b8b09f] leading-relaxed">
                Feel free to email me directly or connect through my developer and professional profiles.
              </p>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-[#171914] border border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-[#D99A35]/15 flex items-center justify-center text-[#F5B94F] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-[#787266] uppercase block">Email Address</span>
                    <span className="text-xs font-mono text-[#F0E8D8] truncate block">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white/5 hover:bg-[#D99A35]/20 text-[#b8b09f] hover:text-[#F5B94F] transition-all shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[#171914] border border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#526B39]/20 flex items-center justify-center text-[#526B39] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#787266] uppercase block">Current Base</span>
                  <span className="text-xs font-medium text-[#F0E8D8]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-white/10 space-y-3">
                <span className="text-xs font-mono text-[#b8b09f] uppercase tracking-wider block">
                  Find Me Online:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#171914] border border-white/5 hover:border-[#D99A35]/40 text-xs font-mono text-[#F0E8D8] hover:text-[#F5B94F] transition-all"
                  >
                    <GithubIcon size={15} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#171914] border border-white/5 hover:border-[#D99A35]/40 text-xs font-mono text-[#F0E8D8] hover:text-[#F5B94F] transition-all"
                  >
                    <LinkedinIcon size={15} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Resume CTA */}
              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#D99A35] to-[#b3781f] text-[#090A08] font-bold text-xs uppercase tracking-wider hover:from-[#F5B94F] hover:to-[#D99A35] transition-all shadow-md cursor-pointer"
                >
                  <FileText size={15} />
                  <span>View & Download Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#D99A35]/20 shadow-2xl relative">
              <h3 className="font-display text-2xl font-bold text-[#F0E8D8] mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#b8b09f] mb-6">
                Have an inquiry or project proposal? Fill out the details below.
              </p>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-3 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="font-display text-xl font-bold text-[#F0E8D8]">
                    Message Dispatched!
                  </h4>
                  <p className="text-xs text-[#b8b09f] max-w-sm mx-auto">
                    Thank you for reaching out. I will review your message and reply back promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-[#b8b09f] uppercase mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#171914] border border-white/10 text-xs font-sans text-[#F0E8D8] placeholder-[#787266] focus:outline-none focus:border-[#D99A35] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[#b8b09f] uppercase mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#171914] border border-white/10 text-xs font-sans text-[#F0E8D8] placeholder-[#787266] focus:outline-none focus:border-[#D99A35] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#b8b09f] uppercase mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Collaboration on new project / Engineering role"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#171914] border border-white/10 text-xs font-sans text-[#F0E8D8] placeholder-[#787266] focus:outline-none focus:border-[#D99A35] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#b8b09f] uppercase mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your thoughts, project ideas, or question..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#171914] border border-white/10 text-xs font-sans text-[#F0E8D8] placeholder-[#787266] focus:outline-none focus:border-[#D99A35] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center py-3"
                  >
                    <span>Transmit Message</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Cinematic Footer */}
        <div className="mt-24 pt-8 border-t border-[#D99A35]/15 text-center text-xs text-[#787266] space-y-3 font-mono">
          <div className="flex items-center justify-center gap-2 text-[#b8b09f]">
            <span>Crafted with passion in Kolkata</span>
            <span>•</span>
            <span>Prianshu Mitra</span>
          </div>
          <p className="text-[11px] text-[#787266]">
            Atmospheric workspace artwork recreated with layered frontend elements.
            © {new Date().getFullYear()} Prianshu Mitra. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
