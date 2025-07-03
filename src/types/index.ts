// أنواع بيانات المستخدم
export type User = {
  id: number;
  name: string;
  avatar: string;
  level: "Bronze" | "Silver" | "Gold" | "Platinum";
  xp: number;
  maxXp: number;
};

// أنواع بيانات العروض (Benefits)
export type Benefit = {
  id: number;
  title: string;
  icon: string;
  description: string;
  cta: "Claim" | "View" | "Redeem";
};

// أنواع بيانات النقاط (Rewards)
export type RewardPoints = {
  points: number;
  maxPoints: number;
  tier: string;
};
