import { HiHome, HiUser } from "react-icons/hi";
import {
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiRectangleGroup,
  HiViewColumns,
} from "react-icons/hi2";

export const NavData: NavDataType[] = [
  { name: "Home", path: "/", icon: <HiHome /> },
  { name: "About", path: "/about", icon: <HiUser /> },
  { name: "Services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "Work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "Testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  { name: "Contact", path: "/contact", icon: <HiEnvelope /> },
];
