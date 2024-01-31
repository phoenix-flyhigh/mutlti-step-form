export interface SubscriptionPlan {
  title: string;
  monthlySubscription: number;
  iconUrl: string;
  yearlySubscription: number;
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    title: "Arcade",
    monthlySubscription: 9,
    iconUrl: "/images/icon-arcade.svg",
    yearlySubscription: 90,
  },
  {
    title: "Advanced",
    monthlySubscription: 12,
    iconUrl: "/images/icon-advanced.svg",
    yearlySubscription: 120,
  },
  {
    title: "Pro",
    monthlySubscription: 15,
    iconUrl: "/images/icon-pro.svg",
    yearlySubscription: 150,
  },
];
