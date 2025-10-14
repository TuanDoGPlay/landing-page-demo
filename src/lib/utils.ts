import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import {
    Briefcase,
    Clock,
    Coffee,
    Facebook,
    Globe,
    Heart,
    Instagram,
    Linkedin,
    MapPin,
    Rocket,
    Star,
    Target,
    Trophy,
    Twitter,
    Users,
    Youtube,
    Zap,
    MessageCircle,
    Mail,
    BookOpen,
    Gamepad2
} from "lucide-react";
import * as React from "react";

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
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Icon = (name: string, className?: string) => {
    const IconComponent = iconMap[name];
    return IconComponent ? React.createElement(IconComponent, {className: className ?? ""}) : null;
};