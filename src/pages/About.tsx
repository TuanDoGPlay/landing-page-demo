import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Target} from "lucide-react";
import {useTranslation} from "react-i18next";
import {Icon} from "@/lib/utils.ts";
import info from "@/assets/data/info.json";
import CompanyGallery from "@/components/CompanyGallery.tsx";

interface Stat {
    name: string;
    count: string;
    icon: string;
}

interface Value {
    name: string;
    description: string;
    icon: string;
}

interface Milestone {
    title: string;
    description: string;
    year: string;
}

const About = () => {
    const { t } = useTranslation();

    const values = t("about-page.value.list", { returnObjects: true }) as Value[];
    const milestones = t("about-page.milestone", { returnObjects: true }) as Milestone[];

    const stats: Stat[] = [
        {
            icon: "gamepad",
            name: t("label.game"),
            count: info.homeStats.gameCount,
        },
        {
            icon: "download",
            name: t("label.download"),
            count: info.homeStats.totalDownloads,
        },
        {
            icon: "globe",
            name: t("label.country"),
            count: info.homeStats.countryCount,
        },
        {
            icon: "rocket",
            name: t("label.year"),
            count: info.homeStats.yearCount,
        },
    ]
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
            <Navigation />

            <main className="pt-32 pb-16">
                {/* --- Intro --- */}
                <section className="container px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="text-center space-y-6 animate-fade-up max-w-4xl mx-auto">
                        <h1 className="text-5xl sm:text-8xl md:text-7xl font-black tracking-tight text-white">
                            {t("about-page.title")}
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            {t("about-page.join.description")}
                        </p>
                    </div>
                </section>

                {/* --- Stats --- */}
                <section className="container px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="grid md:grid-cols-4 gap-6 max-w-8xl mx-auto">
                        {stats.map((stat, index) => (
                            <Card
                                key={index}
                                className="border border-gray-800 bg-[#121212] hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(255,204,0,0.25)] transition-all animate-scale-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <CardContent className="p-6 text-center space-y-3">
                                    {Icon(stat.icon, "h-10 w-10 text-yellow-400 mx-auto")}
                                    <div className="text-4xl font-black text-yellow-400">
                                        {stat.count}
                                    </div>
                                    <div className="text-sm font-medium text-gray-400">{stat.name}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
                <CompanyGallery/>
                {/* --- Mission & Vision --- */}
                <section className="container px-4 sm:px-6 lg:px-8 mb-40">
                    <div className="max-w-8xl mx-auto">
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <Target className="h-8 w-8 text-yellow-400" />
                                <h2 className="text-4xl font-black text-white">
                                    {t("about-page.mission.title")}
                                </h2>
                            </div>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                                {t("about-page.mission.description")}
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-500/15 via-yellow-600/10 to-yellow-400/10 rounded-3xl p-12 text-center space-y-4 border border-yellow-400/20">
                            <h3 className="text-3xl font-black text-white">
                                {t("about-page.vision.title")}
                            </h3>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                {t("about-page.vision.description")}
                            </p>
                        </div>
                    </div>
                </section>

                {/* --- Core Values --- */}
                <section className="container px-4 sm:px-6 lg:px-8 mb-40">
                    <div className="max-w-8xl mx-auto">
                        <h2 className="text-4xl font-black mb-12 text-center text-white">
                            {t("about-page.value.title")}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {values.map((value, index) => (
                                <Card
                                    key={index}
                                    className="border border-gray-800 bg-[#121212] hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(255,204,0,0.25)] transition-all animate-scale-in"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <CardContent className="p-8 space-y-4">
                                        <div className="h-14 w-14 rounded-full bg-yellow-500/10 flex items-center justify-center">
                                            {Icon(value.icon, "h-7 w-7 text-yellow-400")}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">{value.name}</h3>
                                        <p className="text-gray-400 leading-relaxed">{value.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Milestones --- */}
                <section className="container px-4 sm:px-6 lg:px-8 mb-24">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-black mb-12 text-center text-white">
                            Our Journey
                        </h2>
                        <div className="space-y-6">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={milestone.year}
                                    className="flex gap-6 animate-fade-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex-shrink-0">
                                        <Badge className="text-lg px-4 py-2 bg-yellow-500 text-black font-semibold">
                                            {milestone.year}
                                        </Badge>
                                    </div>
                                    <Card className="flex-1 border border-gray-800 bg-[#121212] hover:border-yellow-400/60 transition-all">
                                        <CardContent className="p-6 space-y-2">
                                            <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                                            <p className="text-gray-400">{milestone.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Join Section --- */}
                <section className="container px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-yellow-500/20 via-yellow-600/10 to-yellow-400/10 rounded-3xl p-12 text-center space-y-6 max-w-4xl mx-auto border border-yellow-400/20">
                        <h2 className="text-4xl font-black text-white">
                            {t("about-page.join.title")}
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            {t("about-page.join.description")}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <a href="/careers">
                                <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-lg px-8 py-4 rounded-full shadow-[0_0_30px_rgba(255,204,0,0.4)] hover:shadow-[0_0_50px_rgba(255,204,0,0.6)] transition-all">
                                    {t("about-page.join.button-text")}
                                </button>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
