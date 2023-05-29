import Pro from "./icons/Pro";
import Advanced from "./icons/Advanced";
import Arcade from "./icons/Arcade";

export const plans = [
  {
    name: "Arcade",
    monthPrice: 9,
    icon: <Arcade />,
  },
  {
    name: "Advanced",
    monthPrice: 12,
    icon: <Advanced />,
  },
  {
    name: "Pro",
    monthPrice: 15,
    icon: <Pro />,
  },
];

export const addons = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    monthPrice: 1,
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthPrice: 2,
  },
  {
    name: "Customizable profile",
    description: "Custom theme on your profile",
    monthPrice: 2,
  },
];
