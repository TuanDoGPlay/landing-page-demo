import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import {
    BookOpen,
    Briefcase,
    Building,
    Clock,
    Coffee,
    Download,
    Facebook,
    Gamepad2,
    Globe,
    Heart,
    Hourglass,
    House,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    PuzzleIcon,
    Rocket,
    Star,
    Target,
    Trophy,
    Twitter,
    Users,
    Youtube,
    Zap
} from "lucide-react";
import {IconBrandAppstore, IconBrandGooglePlay, IconBrandTiktok} from "@tabler/icons-react";
import * as React from "react";
import {Game} from "@/common/types.ts";

const iconMap = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    youtube: Youtube,
    linkedin: Linkedin,
    coffee: Coffee,
    map: MapPin,
    rocket: Rocket,
    trophy: Trophy,
    users: Users,
    briefcase: Briefcase,
    clock: Clock,
    heart: Heart,
    target: Target,
    zap: Zap,
    globe: Globe,
    star: Star,
    mail: Mail,
    message: MessageCircle,
    book: BookOpen,
    gamepad: Gamepad2,
    tiktok: IconBrandTiktok,
    appstore: IconBrandAppstore,
    googleplay: IconBrandGooglePlay,
    house: House,
    building: Building,
    hourglass: Hourglass,
    phone: Phone,
    download: Download,
    puzzle: PuzzleIcon,
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Icon = (name: string, className?: string) => {
    const IconComponent = iconMap[name];
    return IconComponent ? React.createElement(IconComponent, {className: className ?? ""}) : null;
};

export function currentLanguage(): string {
    return localStorage.getItem("lang") || "vn";
}

export function sortGamesByInstall(
    games: Game[],
    order: "asc" | "desc" = "desc"
): Game[] {
    const parseAbbrev = (value: string): number => {
        const num = parseFloat(value);
        const upper = value.toUpperCase();

        if (upper.includes("B")) return num * 1_000_000_000;
        if (upper.includes("M")) return num * 1_000_000;
        if (upper.includes("K")) return num * 1_000;
        return num;
    };
    return [...games].sort((a, b) => {
        const diff = parseAbbrev(a.install) - parseAbbrev(b.install);
        return order === "asc" ? diff : -diff;
    });
}