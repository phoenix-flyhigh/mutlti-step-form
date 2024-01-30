export interface AddOn {
    title: string;
    description: string;
    monthlyCost: string;
    yearlyCost: string;
}

export const AddOns: AddOn[] = [
    {
        title: "Online service",
        description:"Access to multiplayer games",
        monthlyCost: "$1/mo",
        yearlyCost: ""
    },
    {
        title: "Larger storage",
        description:"Extra 1TB of cloud save",
        monthlyCost: "$2/mo",
        yearlyCost: ""
    },
    {
        title: "Customizable Profile",
        description:"Custom theme on your profile",
        monthlyCost: "$2/mo",
        yearlyCost: ""
    }
]