import { motion } from "framer-motion";

const ProfileSkeleton = () => (
  <motion.div className="max-w-md w-full rounded-3xl p-8 shadow-lg bg-white/30 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700">
    <div className="flex items-center space-x-5 mb-8">
      <div className="h-24 w-24 rounded-2xl bg-gray-200/70 dark:bg-gray-700/70 animate-pulse" />
      <div className="flex-1 space-y-3">
        <div className="h-7 w-3/4 rounded-full bg-gray-200/70 dark:bg-gray-700/70 animate-pulse" />
        <div className="h-5 w-24 rounded-full bg-gray-200/70 dark:bg-gray-700/70 animate-pulse" />
      </div>
    </div>

    <div className="mb-6 space-y-2">
      <div className="flex justify-between">
        <div className="h-4 w-20 rounded-full bg-gray-200/70 dark:bg-gray-700/70 animate-pulse" />
        <div className="h-4 w-10 rounded-full bg-gray-200/70 dark:bg-gray-700/70 animate-pulse" />
      </div>
      <div className="w-full h-3 rounded-full bg-gray-200/70 dark:bg-gray-700/70 animate-pulse" />
      <div className="flex justify-between">
        <div className="h-3 w-16 rounded-full bg-gray-200/70 dark:bg-gray-700/70 animate-pulse" />
        <div className="h-3 w-20 rounded-full bg-gray-200/70 dark:bg-gray-700/70 animate-pulse" />
      </div>
    </div>

    <div className="w-full h-12 rounded-xl bg-gray-200/70 dark:bg-gray-700/70 animate-pulse" />
  </motion.div>
);

export default ProfileSkeleton;
