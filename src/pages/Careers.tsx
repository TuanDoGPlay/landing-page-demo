import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {useTranslation} from "react-i18next";
import {Icon} from "@/lib/utils.ts";
import jobs from "@/assets/data/jobs.json";
import info from "@/assets/data/info.json";
import {Job} from "@/common/types.ts";
import {JobTypeMap} from "@/constants/jobType.ts";
import LocalizeText from "@/components/LocalizeText.tsx";
import benefits from "@/assets/data/benefits.json";
import CompanyGallery from "@/components/CompanyGallery.tsx";

interface Benefit {
    name: string;
    icon: string;
    description: string;
}

const Careers = () => {
    const { t } = useTranslation();

    const jobOpenings = jobs as Job[];
    const benefitList = benefits as Benefit[];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
            <Navigation />

            <main className="pt-36 pb-20">
                {/* --- Header Section --- */}
                <section className="container px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="text-center space-y-6 animate-fade-up max-w-4xl mx-auto">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
                            {t("career-page.title")}
                        </h1>
                        <p className="text-xl text-gray-400">
                            {t("career-page.description")}
                        </p>
                    </div>
                </section>

                {/* --- Benefits Section --- */}
                <section className="container px-4 sm:px-6 lg:px-8 mb-24">
                    <div className="max-w-8xl mx-auto">
                        <h2 className="text-3xl font-black mb-8 text-white">
                            {t("career-page.benefit.title")}
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefitList.map((benefit, index) => (
                                <Card
                                    key={index}
                                    className="border border-gray-800 bg-[#121212] hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(255,204,0,0.25)] transition-all animate-scale-in"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <CardContent className="p-6 space-y-3">
                                        <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                                            {Icon(benefit.icon, "h-6 w-6 text-yellow-400")}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">
                                            {benefit.name}
                                        </h3>
                                        <p className="text-gray-400">{benefit.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                <CompanyGallery />
                {/* --- Job Openings Section --- */}
                <section className="container px-4 sm:px-6 lg:px-8 mb-24">
                    <div className="max-w-8xl mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-black text-white">
                                {t("career-page.job.title")}
                            </h2>
                            <Badge
                                variant="outline"
                                className="text-lg px-4 py-2 border border-yellow-400 text-yellow-400"
                            >
                                {jobOpenings.length} {t("career-page.job.count")}
                            </Badge>
                        </div>

                        <div className="space-y-4">
                            {jobOpenings.map((job, index) => (
                                <Card
                                    key={index}
                                    className="border border-gray-800 bg-[#121212] hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(255,204,0,0.25)] transition-all animate-fade-up"
                                    style={{ animationDelay: `${index * 80}ms` }}
                                >
                                    <CardContent className="p-6">
                                        <div
                                            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                                            <div className="space-y-3 flex-1">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white mb-2">
                                                        {job.name}
                                                    </h3>
                                                    <LocalizeText data={job} className="text-gray-400"/>
                                                </div>

                                                <div className="flex flex-wrap gap-3 text-sm">
                                                    {job.types.map((tag, i) => (
                                                        <Badge
                                                            key={i}
                                                            variant="outline"
                                                            className="gap-1 border border-gray-700 text-gray-300"
                                                        >
                                                            {Icon(JobTypeMap.get(tag).icon, "h-3 w-3")}
                                                            {JobTypeMap.get(tag).toString()}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>

                                            <Button
                                                size="lg"
                                                onClick={() => window.open(`/jd/${job.jd}`, "_blank")}
                                                className="lg:w-auto w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-foreground font-semibold transition-colors"
                                            >
                                                {t("button.view-jd")}
                                            </Button>
                                            <Button
                                                size="lg"
                                                className="lg:w-auto w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition-colors"
                                            >
                                                <a href={`mailto:${info.mailHr}`} target="_blank">
                                                    {t("button.apply-now")}
                                                </a>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- General Application Section --- */}
                <section className="container px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-yellow-500/20 via-yellow-600/10 to-yellow-400/10 rounded-3xl p-12 text-center space-y-6 max-w-4xl mx-auto border border-yellow-500/20">
                        <h2 className="text-4xl font-black text-white">
                            {t("career-page.job.general-application.title")}
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            {t("career-page.job.general-application.description")}
                        </p>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="text-lg px-8 border border-yellow-400 bg-yellow-400 text-black transition-colors"
                        >
                            <a href={`mailto:${info.mailHr}`} target="_blank">
                                {t("career-page.job.general-application.text-button")}
                            </a>
                        </Button>

                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Careers;
