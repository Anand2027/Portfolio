import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const Landing06 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jd62xwr', 'template_9inw8fc', form.current, {
        publicKey: 'QWgEUL_3eDIK0kqAD',
      })
      .then(
        () => {
          toast.success('Thanks for contacting!', { position: "top-center" });
          form.current.reset(); 
        },
        (error) => {
          toast.error('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="py-16 bg-transparent" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* Header Module */}
      <div className="max-w-[760px] mx-auto px-4 mb-10 text-center">
        <span
          style={{
            display: "inline-block",
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "3px",
            textTransform: "uppercase",
            padding: "5px 18px",
            borderRadius: "50px",
            background: "#E0E7FF",
            color: "#4F46E5",
            border: "1px solid #C7D2FE",
            marginBottom: "1rem",
          }}
        >
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Contact{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #4F46E5, #7C3AED, #DB2777)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Me
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-500 font-semibold mt-2 max-w-[480px] mx-auto leading-relaxed">
          "Open to new challenges and exciting projects. Reach out anytime."
        </p>
      </div>

      {/* Lower Form Wrapper */}
      <div className="w-[90%] max-w-[700px] mx-auto px-1">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-6 sm:p-10 rounded-2xl border border-indigo-100 shadow-[0_30px_80px_rgba(79,70,229,0.25)] hover:shadow-[0_30px_100px_rgba(124,58,237,0.35)] transition-all duration-300 w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Input Element: Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 pl-0.5">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full px-4 py-2.5 bg-indigo-50/30 text-slate-800 placeholder-slate-400 border border-indigo-400/70 rounded-xl text-sm font-medium transition-all duration-200 outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                name="from_name"
                required
              />
            </div>

            {/* Input Element: Email */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 pl-0.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2.5 bg-indigo-50/30 text-slate-800 placeholder-slate-400 border border-indigo-400/70 rounded-xl text-sm font-medium transition-all duration-200 outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                name="from_email"
                required
              />
            </div>

            {/* Input Element: Phone */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 pl-0.5">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full px-4 py-2.5 bg-indigo-50/30 text-slate-800 placeholder-slate-400 border border-indigo-400/70 rounded-xl text-sm font-medium transition-all duration-200 outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                name="from_contact"
                required
              />
            </div>

            {/* Input Element: Dropdown Select Topic */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 pl-0.5">
                Choose a topic
              </label>
              <div className="relative">
                <select
                  className="w-full px-4 py-2.5 bg-indigo-50/30 text-slate-800 border border-indigo-400/70 rounded-xl text-sm font-medium transition-all duration-200 outline-none appearance-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  name="Topic_name"
                  defaultValue=""
                  required
                >
                  <option value="" disabled hidden>Select one...</option>
                  <option value="html">HTML</option>
                  <option value="css">CSS</option>
                  <option value="javascript">JavaScript</option>
                  <option value="react">React / Frontend Ecosystem</option>
                  <option value="fullstack">Full Stack Work / Freelance</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Input Element: Message Area */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 pl-0.5">
                Message
              </label>
              <textarea
                placeholder="Type your message details here..."
                rows="4"
                className="w-full px-4 py-2.5 bg-indigo-50/30 text-slate-800 placeholder-slate-400 border border-indigo-400/70 rounded-xl text-sm font-medium transition-all duration-200 outline-none resize-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                name="message"
                required
              ></textarea>
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start mt-5 pl-0.5">
            <div className="flex items-center h-5">
              <input 
                type="checkbox" 
                id="terms" 
                className="w-4 h-4 text-indigo-600 border-indigo-400 rounded focus:ring-indigo-500/20" 
                required
              />
            </div>
            <label htmlFor="terms" className="ml-2.5 text-xs font-semibold text-slate-500 select-none cursor-pointer pt-0.5">
              I accept the terms and agree to project connection terms
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-6 w-full sm:w-auto font-extrabold text-xs tracking-wider uppercase py-3 px-8 text-white rounded-xl shadow-md shadow-indigo-600/10 hover:shadow-lg hover:shadow-indigo-600/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none"
            style={{
              background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)"
            }}
          >
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Landing06Motion = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
  >
    <Landing06/>
  </motion.div>
);

export default Landing06Motion;