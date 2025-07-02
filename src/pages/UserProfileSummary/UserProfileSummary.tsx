import { useEffect, useState } from "react";
import ProfileSkeleton from "@/components/profile/ProfileSkeleton";
import ProfileCard from "@/components/profile/ProfileCard";

const UserProfileSummary = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [xpProgress, setXpProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setXpProgress(65);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black p-4">
      {isLoading ? (
        <ProfileSkeleton />
      ) : (
        <ProfileCard xpProgress={xpProgress} />
      )}
    </div>
  );
};

export default UserProfileSummary;
