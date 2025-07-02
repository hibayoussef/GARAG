import { motion } from "framer-motion";

const RewardLinearProgress = ({ progress }: { progress: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-gray-600 dark:text-gray-300">750 Points</span>
      <span className="font-medium text-primary dark:text-primary">
        {progress}% Complete
      </span>
    </div>

    <div className="relative h-3 w-full rounded-full overflow-hidden">
      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 h-full bg-gradient-to-r from-[#5a67bf] to-[#465FFF] dark:to-indigo-400 rounded-full"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent via-white/20 dark:via-black/10" />
    </div>

    <div className="text-xs text-gray-500 dark:text-gray-400">
      You need 250 more points to reach your goal (1000 points)
    </div>
  </div>
);

export default RewardLinearProgress;
