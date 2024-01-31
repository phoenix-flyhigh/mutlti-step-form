export interface AddOn {
  title: string;
  description: string;
  monthlyCost: number;
  yearlyCost: number;
}

export const AddOns: AddOn[] = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    monthlyCost: 1,
    yearlyCost: 10,
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyCost: 2,
    yearlyCost: 20,
  },
  {
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    monthlyCost: 2,
    yearlyCost: 20,
  },
];
