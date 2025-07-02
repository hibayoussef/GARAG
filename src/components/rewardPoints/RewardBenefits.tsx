import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";

const RewardBenefits = () => {
  const benefits = [
    "Free Shipping",
    "Exclusive Discounts",
    "Free Gifts",
    "Early Access",
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {benefits.map((benefit, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -2 }}
          className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700/80 transition-colors"
        >
          <div className="p-1 rounded-full bg-primary/10 dark:bg-primary/20">
            <FiZap className="w-4 h-4 text-primary" />
          </div>
          <span className="text-sm text-gray-700 dark:text-gray-200">
            {benefit}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default RewardBenefits;
