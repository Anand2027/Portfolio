import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiCopy, FiCheck, FiNavigation } from 'react-icons/fi';

const Address = () => {
  const [copied, setCopied] = useState(false);
  const fullAddress = "Lakda Boys Hostel, Near Ryan International School, Hapur Bypass, Ghaziabad, Uttar Pradesh";

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-16 bg-transparent" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* Uniform Theme Header Section */}
      <div className="max-w-[1100px] mx-auto px-4 mb-12 text-center">
        <span
          style={{
            display: "inline-block",
            fontSize: "10px",
            fontWeight: 800,
            letterSpacing: "3px",
            textTransform: "uppercase",
            padding: "5px 16px",
            borderRadius: "50px",
            background: "#E0E7FF",
            color: "#4F46E5",
            border: "1px solid #C7D2FE",
            marginBottom: "1rem",
          }}
        >
          Hub Location
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Where To{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #4F46E5, #7C3AED, #DB2777)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Find Me
          </span>
        </h2>
        <p className="text-sm text-slate-500 font-semibold mt-1">
          Drop by or find the digital and physical coordinates instantly
        </p>
      </div>

      {/* Main Managed Split Dashboard Grid Module */}
      <div className="w-[92%] max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* LEFT COLUMN: Premium Meta-Information Card Block (5 Columns wide) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl relative overflow-hidden group"
          style={{
            background: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)",
            border: "2px solid #E2E8F0",
            boxShadow: "0 12px 30px -10px rgba(79, 70, 229, 0.05)"
          }}
        >
          {/* Subtle design node lines */}
          <div className="absolute right-[-20px] bottom-[-20px] w-24 h-24 bg-indigo-500/5 rounded-full pointer-events-none" />
          
          <div>
            {/* Live Location Pulse Badge Indicator */}
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-black text-slate-500">Current Station</span>
            </div>

            {/* Icon Group Descriptor */}
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-200 mb-5">
              <FiMapPin size={20} />
            </div>

            <h3 className="text-xl font-black text-slate-800 tracking-tight mb-2">Lakda Boys Hostel</h3>
            <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-4">Ghaziabad Hub</p>
            
            <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed tracking-tight mb-6">
              Near Ryan International School, Hapur Bypass, Ghaziabad, Uttar Pradesh, 201001
            </p>
          </div>

          {/* Action Interactive Callout Modules */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            
            {/* Action Item 1: Clipboard System Utility */}
            <button 
              onClick={handleCopy}
              className="flex-1 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200"
              style={{
                background: copied ? "#DCFCE7" : "#FFFFFF",
                color: copied ? "#15803D" : "#334155",
                border: copied ? "1.5px solid #BBF7D0" : "1.5px solid #E2E8F0",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.span key="check" initial={{ scale: 0.6 }} animate={{ scale: 1 }} className="flex items-center gap-1.5">
                    <FiCheck size={14} /> Copied!
                  </motion.span>
                ) : (
                  <motion.span key="copy" initial={{ scale: 0.6 }} animate={{ scale: 1 }} className="flex items-center gap-1.5">
                    <FiCopy size={13} /> Copy Address
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Action Item 2: Intent Outbound Forward Navigation */}
            <a 
              href="https://maps.app.goo.gl/wYw93Q9L5k9X4CgPA" 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 shadow-md shadow-indigo-100"
            >
              <FiNavigation size={13} /> Navigate
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Glass Map Frame Display Embed Container (7 Columns wide) */}
        <div className="lg:col-span-7 rounded-2xl p-2 bg-white relative overflow-hidden shadow-xl"
          style={{
            border: "2px solid #E2E8F0",
          }}
        >
          <div className="rounded-xl overflow-hidden h-[320px] sm:h-[380px] lg:h-full relative border border-slate-200 shadow-inner">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3406195092102!2d77.49749147533736!3d28.67945577563918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf24412771981%3A0x64678b7f0626c47!2sMahagun%20boys%20hostel!5e0!3m2!1sen!2sin!4v1746413139921!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[15%] hover:grayscale-0 transition-all duration-700 block border-none"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

// Structural layout wrap with global uniform delay entry configurations
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const AddressMotion = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.12 }}
  >
    <Address/>
  </motion.div>
);

export default AddressMotion;