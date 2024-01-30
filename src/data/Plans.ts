export interface SubscriptionPlan {
    title: string;
    monthlySubscription: string;
    iconUrl: string;
    yearlySubscription: string;
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    title: "Arcade",
    monthlySubscription: "$9/mo",
    iconUrl: "/images/icon-arcade.svg",
    yearlySubscription: "$90/yr",
  },
  {
    title: "Advanced",
    monthlySubscription: "$12/mo",
    iconUrl: "/images/icon-advanced.svg",
    yearlySubscription: "$120/yr",
  },
  {
    title: "Pro",
    monthlySubscription: "$15/mo",
    iconUrl: "/images/icon-pro.svg",
    yearlySubscription: "$150/yr",
  },
];
