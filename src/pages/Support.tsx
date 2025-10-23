import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useTranslation} from "react-i18next";
import info from "@/assets/data/info.json";
import {Facebook, Mail, Phone} from "lucide-react";

const Support = () => {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
            <Navigation />

            <main className="pt-32 pb-16">
                {/* --- Support Channels --- */}
                <section className="container px-4 sm:px-6 lg:px-8">
                    <div className="max-w-8xl mx-auto">
                        <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-center text-white mb-12">
                            {t("support-page.title")}
                        </h1>

                        <div className="grid md:grid-cols-3 gap-6">
                            <Card
                                className="border border-gray-800 bg-[#121212] hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(255,204,0,0.25)] transition-all animate-scale-in"
                                style={{animationDelay: `100ms`}}
                            >
                                <CardContent className="p-6 space-y-4 text-center flex flex-col h-full">
                                    <div
                                        className="h-16 w-16 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto">
                                        <Phone className="h-8 w-8 text-yellow-400"/>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">{t("support-page.phone.title")}</h3>
                                        <p className="text-gray-400 mb-1">{t("support-page.phone.description")}</p>
                                        <p className="text-sm text-gray-500 truncate">{info.phone}</p>
                                    </div>
                                    <Button
                                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
                                        {t("support-page.phone.action")}
                                    </Button>
                                </CardContent>
                            </Card>
                            <Card
                                className="border border-gray-800 bg-[#121212] hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(255,204,0,0.25)] transition-all animate-scale-in"
                                style={{animationDelay: `100ms`}}
                            >
                                <CardContent className="p-6 space-y-4 text-center flex flex-col h-full">
                                    <div
                                        className="h-16 w-16 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto">
                                        <Facebook className="h-8 w-8 text-yellow-400"/>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">{t("support-page.facebook.title")}</h3>
                                        <p className="text-gray-400 mb-1">{t("support-page.facebook.description")}</p>
                                        <p className="text-sm text-gray-500 truncate">{info.pageFB}</p>
                                    </div>
                                    <Button
                                        asChild
                                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
                                        <a href={info.pageFB} target="_blank"> {t("support-page.facebook.action")}</a>
                                    </Button>
                                </CardContent>
                            </Card>
                            <Card
                                className="border border-gray-800 bg-[#121212] hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(255,204,0,0.25)] transition-all animate-scale-in"
                                style={{animationDelay: `100ms`}}
                            >
                                <CardContent className="p-6 space-y-4 text-center flex flex-col h-full">
                                    <div
                                        className="h-16 w-16 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto">
                                        <Mail className="h-8 w-8 text-yellow-400"/>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">{t("support-page.mail.title")}</h3>
                                        <p className="text-gray-400 mb-1">{t("support-page.mail.description")}</p>
                                        <p className="text-sm text-gray-500 truncate">{info.supportMail}</p>
                                    </div>
                                    <Button
                                        asChild
                                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
                                        <a href={`mailto:${info.supportMail}`}>{t("support-page.mail.action")}</a>

                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Support;
