import {
  Cpu,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Landmark,
  Megaphone,
  PenTool,
  Truck,
  Wallet,
  Wrench,
} from "lucide-react";
import type { CareerField } from "@/data/types";

export const CAREER_ICONS: Record<CareerField["icon"], typeof Cpu> = {
  cpu: Cpu,
  pen: PenTool,
  megaphone: Megaphone,
  coins: Wallet,
  wrench: Wrench,
  graduation: GraduationCap,
  heartPulse: HeartPulse,
  truck: Truck,
  building: Landmark,
  flask: FlaskConical,
};
