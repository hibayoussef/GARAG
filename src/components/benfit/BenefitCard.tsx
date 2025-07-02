import { motion } from "framer-motion";
import { ReactNode } from "react";

type Benefit = {
  icon: ReactNode;
  title: string;
  description: string;
  cta: string;
  colors: {
    light: string;
    dark: string;
  };
};

const BenefitCard = ({
  benefit,
  index,
}: {
  benefit: Benefit;
  index: number;
}) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`bg-gradient-to-br ${benefit.colors.light} ${benefit.colors.dark} 
        rounded-xl p-5 shadow-lg overflow-hidden relative group
        hover:shadow-xl transition-all duration-300`}
    >
      <div className="absolute -right-5 -top-5 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm"></div>
      <div className="absolute -left-5 -bottom-5 w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm"></div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
          {benefit.icon}
        </div>

        <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
        <p className="text-white/90 mb-5 text-sm flex-grow">
          {benefit.description}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium 
                    hover:bg-white/30 transition-all w-fit"
        >
          {benefit.cta}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default BenefitCard;
