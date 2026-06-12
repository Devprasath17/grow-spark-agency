import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site-data";

export function WhatsAppButton() {
  const href = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3.5 shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)]"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle className="relative h-6 w-6 text-white" fill="white" stroke="#25D366" />
      <span className="relative hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-white transition-all duration-300 group-hover:max-w-[140px] sm:inline">
        Chat with us
      </span>
    </motion.a>
  );
}
