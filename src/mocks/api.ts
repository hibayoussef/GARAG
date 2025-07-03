import { mockUserProfile, mockBenefits, mockRewards } from "./data";

export const fetchUserProfile = async (): Promise<typeof mockUserProfile> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockUserProfile), 500);
  });
};

export const fetchBenefits = async (): Promise<typeof mockBenefits> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockBenefits), 700);
  });
};

export const fetchRewards = async (): Promise<typeof mockRewards> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockRewards), 300);
  });
};

export const claimBenefit = async (benefitId: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 400);
  });
};
