import { motion } from "framer-motion";
import RewardChart from "@/components/rewardPoints/RewardChart";
import RewardHeader from "@/components/rewardPoints/RewardHeader";
import RewardLinearProgress from "@/components/rewardPoints/RewardLinearProgress";
import RewardBenefits from "@/components/rewardPoints/RewardBenefits";
import RedeemButton from "@/components/rewardPoints/RedeemButton";
import RewardPointsSkeleton from "@/components/rewardPoints/RewardPointsSkeleton";
import { useRewards } from "@/hooks/useRewards.ts";

const RewardPointsProgress = () => {
  const { data: rewards, isLoading, isError } = useRewards();

  if (isLoading) return <RewardPointsSkeleton />;
  if (isError) return <div>Error loading rewards</div>;

  const progress =
    rewards && Math.round((rewards.currentPoints / rewards.maxPoints) * 100);

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
          {rewards && (
            <>
              <RewardLinearProgress
                progress={progress}
                currentPoints={rewards.currentPoints}
                maxPoints={rewards.maxPoints}
              />
            </>
          )}

          <RewardBenefits />
          <RedeemButton />
        </div>
      </div>
    </motion.div>
  );
};

export default RewardPointsProgress;
