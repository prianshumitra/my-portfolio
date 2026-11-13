import { useState } from 'react';
import { Send, CheckCircle2, Copy, ArrowUpRight } from 'lucide-react';
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
    <section id="contact" className="py-24 bg-[#15180F] border-t border-[rgba(245,240,229,0.08)]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <span className="text-[11px] font-mono tracking-[0.2em] text-[#D99A19] uppercase block mb-2 font-semibold">
            CONTACT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F0E5] mb-4">
            Get in touch
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#AAA595] leading-relaxed max-w-xl">
            I am always open to discussing new software products, engineering opportunities, research discussions, or creative collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#AAA595] block mb-1">
                  Email
                </span>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-[#F5F0E5]">
                    {PERSONAL_INFO.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 text-[#AAA595] hover:text-[#D99A19] transition-colors cursor-pointer bg-transparent border-0"
                    title="Copy email address"
                  >
                    {copiedEmail ? <CheckCircle2 size={14} className="text-[#69733D]" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#AAA595] block mb-1">
                  Location
                </span>
                <span className="text-sm font-sans text-[#F5F0E5]">
                  {PERSONAL_INFO.location}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#AAA595] block mb-1">
                  Availability
                </span>
                <span className="text-sm font-mono text-[#D99A19]">
                  Available for engineering roles & ventures
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-[rgba(245,240,229,0.08)] flex items-center gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-[#AAA595] hover:text-[#F5F0E5] transition-colors text-decoration-none"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-[#AAA595] hover:text-[#F5F0E5] transition-colors text-decoration-none"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-1.5 text-xs font-mono text-[#D99A19] hover:underline cursor-pointer bg-transparent border-0"
              >
                <span>Curriculum Vitae</span>
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-xl bg-[#1B1F14]/80 border border-[rgba(245,240,229,0.08)] space-y-4 text-left"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#AAA595] block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded bg-[#15180F] border border-[rgba(245,240,229,0.12)] text-xs font-sans text-[#F5F0E5] focus:outline-none focus:border-[#D99A19] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#AAA595] block mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-3.5 py-2.5 rounded bg-[#15180F] border border-[rgba(245,240,229,0.12)] text-xs font-sans text-[#F5F0E5] focus:outline-none focus:border-[#D99A19] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#AAA595] block mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Software engineering, collaboration, or general inquiry"
                  className="w-full px-3.5 py-2.5 rounded bg-[#15180F] border border-[rgba(245,240,229,0.12)] text-xs font-sans text-[#F5F0E5] focus:outline-none focus:border-[#D99A19] transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#AAA595] block mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can I help you?"
                  className="w-full px-3.5 py-2.5 rounded bg-[#15180F] border border-[rgba(245,240,229,0.12)] text-xs font-sans text-[#F5F0E5] focus:outline-none focus:border-[#D99A19] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  className="btn-ochre cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send size={13} />
                </button>

                {formSubmitted && (
                  <span className="text-xs font-mono text-[#69733D] flex items-center gap-1.5">
                    <CheckCircle2 size={14} />
                    <span>Message received. I will respond promptly.</span>
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Footer Editorial Sign-off */}
        <div className="mt-20 pt-8 border-t border-[rgba(245,240,229,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#AAA595]">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-sm text-[#F5F0E5]">PM</span>
            <span>· Prianshu Mitra © {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Kolkata & Haldia, West Bengal, India</span>
            <span>Built with React & Vite</span>
          </div>
        </div>
      </div>
    </section>
  );
};
