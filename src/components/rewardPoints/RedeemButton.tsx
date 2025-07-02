import { motion } from "framer-motion";
import { FiGift, FiChevronRight } from "react-icons/fi";

const RedeemButton = () => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="w-full mt-4 py-3 px-6 rounded-xl flex items-center justify-between bg-gradient-to-r from-[#5a67bf] to-[#465FFF] hover:from-primary hover:to-indigo-600 text-white font-medium shadow-lg transition-all"
  >
    <span className="flex items-center gap-2">
      <FiGift className="w-5 h-5" />
      Redeem Points
    </span>
    <FiChevronRight className="w-5 h-5" />
  </motion.button>
);

export default RedeemButton;
