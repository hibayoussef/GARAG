import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RewardChart from "@/components/rewardPoints/RewardChart";
import RewardHeader from "@/components/rewardPoints/RewardHeader";
import RewardLinearProgress from "@/components/rewardPoints/RewardLinearProgress";
import RewardBenefits from "@/components/rewardPoints/RewardBenefits";
import RedeemButton from "@/components/rewardPoints/RedeemButton";
import RewardPointsSkeleton from "@/components/rewardPoints/RewardPointsSkeleton";

const RewardPointsProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProgress(75);
      setIsLoading(false);
    }, 1200);
  }, []);

  if (isLoading) return <RewardPointsSkeleton />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl p-6 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/80 dark:to-gray-800/80 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <RewardChart progress={progress} />
        <div className="flex-1 w-full space-y-6">
          <RewardHeader />
          <RewardLinearProgress progress={progress} />
          <RewardBenefits />
          <RedeemButton />
        </div>
      </div>
    </motion.div>
  );
};

export default RewardPointsProgress;
