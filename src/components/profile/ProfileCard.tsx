import { motion } from "framer-motion";
import { FiAward, FiGift, FiStar, FiUser, FiZap } from "react-icons/fi";

const ProfileCard = ({ xpProgress }: { xpProgress: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="max-w-md w-full rounded-3xl p-8 shadow-xl bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-md dark:from-gray-800/70 dark:to-gray-900/80 border border-white/20 dark:border-gray-700 text-gray-800 dark:text-white"
  >
    {/* Avatar & Info */}
    <div className="flex items-center space-x-5 mb-8">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative h-24 w-24 rounded-2xl flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 shadow-inner border-2 border-white/40 dark:border-gray-600"
      >
        <FiUser className="h-10 w-10 text-gray-600 dark:text-gray-300" />
        <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#5a67bf] to-[#465FFF] rounded-full p-2 shadow-md border-2 border-white dark:border-gray-800">
          <FiStar className="h-4 w-4 text-white" />
        </div>
      </motion.div>

      <div className="flex-1">
        <motion.h2
          whileHover={{ x: 2 }}
          className="text-2xl font-extrabold text-[#465FFF] dark:text-white"
        >
          Hiba Yousef
        </motion.h2>
        <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-amber-100/80 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm font-medium">
          <FiAward className="mr-2" />
          <span>Level: Senior</span>
        </div>
      </div>
    </div>

    {/* Progress */}
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300">
          <FiZap className="mr-2 text-amber-400" />
          Progress Points
        </div>
        <span className="text-sm font-semibold text-indigo-500 dark:text-indigo-400">
          {xpProgress}%
        </span>
      </div>

      <div className="relative w-full h-3 rounded-full bg-gray-200/80 dark:bg-gray-700/80 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${xpProgress}%` }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
          className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#5a67bf] to-[#465FFF] shadow-inner"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 dark:to-black/10" />
      </div>

      <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
        <span>650 Points</span>
        <span>Target: 1000 Points</span>
      </div>
    </div>

    {/* Button */}
    <motion.button
      whileHover={{
        scale: 1.03,
        boxShadow: "0 6px 20px rgba(251, 191, 36, 0.3)",
      }}
      whileTap={{ scale: 0.96 }}
      className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#5a67bf] to-[#465FFF] text-white font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
    >
      <FiGift className="h-5 w-5" />
      <span>اكتشف المكافآت</span>
    </motion.button>
  </motion.div>
);

export default ProfileCard;
