import { FiAward } from "react-icons/fi";

const RewardHeader = () => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
        <FiAward className="w-5 h-5 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-[#465FFF] dark:text-white">
        Reward Points
      </h3>
    </div>

    <div className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary">
      Tier: Platinum
    </div>
  </div>
);

export default RewardHeader;
