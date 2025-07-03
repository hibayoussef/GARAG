import ProfileSkeleton from "@/components/profile/ProfileSkeleton";
import ProfileCard from "@/components/profile/ProfileCard";
import { useUserProfile } from "@/hooks/useUserProfile";

const UserProfileSummary = () => {
  const { data: userProfile, isLoading, isError } = useUserProfile();

  if (isLoading) return <ProfileSkeleton />;
  if (isError) return <div>Error loading profile</div>;

  const xpProgress =
    userProfile &&
    Math.round((userProfile.xp / userProfile.xpToNextLevel) * 100);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black p-4">
      {userProfile && (
        <>
          <ProfileCard xpProgress={xpProgress} userProfile={userProfile} />
        </>
      )}
    </div>
  );
};

export default UserProfileSummary;
