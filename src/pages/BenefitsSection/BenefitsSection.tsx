// components/BenefitsSection.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiTag,
  FiShoppingBag,
  FiCreditCard,
  FiCoffee,
  FiPercent,
  FiStar,
  FiGift,
} from "react-icons/fi";
import BenefitsSkeleton from "@/components/benfit/BenefitsSkeleton";
import BenefitCard from "@/components/benfit/BenefitCard";

const BenefitsSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    {
      icon: <FiTag className="w-6 h-6" />,
      title: "Exclusive Discount",
      description: "Get 20% off on all products for a limited time",
      cta: "View",
      colors: {
        light: "from-blue-400 to-blue-600",
        dark: "dark:from-blue-500 dark:to-blue-700",
      },
    },
    {
      icon: <FiShoppingBag className="w-6 h-6" />,
      title: "Free Shipping",
      description: "Free shipping for orders over 200 SAR",
      cta: "View",
      colors: {
        light: "from-green-400 to-green-600",
        dark: "dark:from-green-500 dark:to-green-700",
      },
    },
    {
      icon: <FiCreditCard className="w-6 h-6" />,
      title: "Secure Payment",
      description: "Get extra 5% off when paying by credit card",
      cta: "View",
      colors: {
        light: "from-purple-400 to-purple-600",
        dark: "dark:from-purple-500 dark:to-purple-700",
      },
    },
    {
      icon: <FiCoffee className="w-6 h-6" />,
      title: "Free Surprise",
      description: "Receive a free gift with every order",
      cta: "View",
      colors: {
        light: "from-amber-400 to-amber-600",
        dark: "dark:from-amber-500 dark:to-amber-700",
      },
    },
    {
      icon: <FiPercent className="w-6 h-6" />,
      title: "Delivery Discounts",
      description: "50% off delivery fee on your first order",
      cta: "View",
      colors: {
        light: "from-pink-400 to-pink-600",
        dark: "dark:from-pink-500 dark:to-pink-700",
      },
    },
    {
      icon: <FiStar className="w-6 h-6" />,
      title: "Premium Membership",
      description: "Early access to special member offers",
      cta: "View",
      colors: {
        light: "from-indigo-400 to-indigo-600",
        dark: "dark:from-indigo-500 dark:to-indigo-700",
      },
    },
  ];

  if (isLoading) return <BenefitsSkeleton />;

  return (
    <div className="mt-10 px-4">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center"
      >
        <FiGift className="mr-2 text-[#f59e0b]" />
        Your Membership Benefits
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} benefit={benefit} index={index} />
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
