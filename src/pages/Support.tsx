import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Search } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@/lib/utils.ts";

interface Faq {
    category: string;
    questions: {
        q: string;
        a: string;
    }[];
}

interface SupportChannel {
    title: string;
    description: string;
    available: string;
    action: string;
    icon: string;
}

const Support = () => {
    const { t } = useTranslation();
    const supportChannels = t("support-page.channel", { returnObjects: true }) as SupportChannel[];
    const faqs = t("support-page.faq", { returnObjects: true }) as Faq[];
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
            <Navigation />

            <main className="pt-24 pb-16">
                {/* --- Header --- */}
                <section className="container px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="text-center space-y-6 animate-fade-up max-w-4xl mx-auto">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
                            {t("support-page.title")}
                        </h1>
                        <p className="text-xl text-gray-400">
                            {t("support-page.description")}
                        </p>

                        <div className="relative max-w-2xl mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                            <Input
                                type="text"
                                placeholder="Search for help..."
                                className="pl-12 h-14 text-lg bg-[#121212] border border-gray-700 text-gray-100 placeholder-gray-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </section>

                {/* --- Support Channels --- */}
                <section className="container px-4 sm:px-6 lg:px-8 mb-24">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-black mb-8 text-center text-white">
                            Contact Support
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {supportChannels.map((channel, index) => (
                                <Card
                                    key={channel.title}
                                    className="border border-gray-800 bg-[#121212] hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(255,204,0,0.25)] transition-all animate-scale-in"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <CardContent className="p-6 space-y-4 text-center">
                                        <div className="h-16 w-16 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto">
                                            {Icon(channel.icon, "h-8 w-8 text-yellow-400")}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                                            <p className="text-gray-400 mb-1">{channel.description}</p>
                                            <p className="text-sm text-gray-500">{channel.available}</p>
                                        </div>
                                        <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
                                            {channel.action}
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- FAQs --- */}
                <section className="container px-4 sm:px-6 lg:px-8 mb-24">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <HelpCircle className="h-8 w-8 text-yellow-400" />
                            <h2 className="text-3xl font-black text-white">Frequently Asked Questions</h2>
                        </div>

                        <div className="space-y-8">
                            {faqs.map((category, categoryIndex) => (
                                <div
                                    key={category.category}
                                    className="animate-fade-up"
                                    style={{ animationDelay: `${categoryIndex * 100}ms` }}
                                >
                                    <h3 className="text-2xl font-bold text-white mb-4">{category.category}</h3>
                                    <Accordion type="single" collapsible className="space-y-2">
                                        {category.questions.map((faq, index) => (
                                            <AccordionItem
                                                key={index}
                                                value={`${category.category}-${index}`}
                                                className="border border-gray-800 rounded-lg px-6 bg-[#121212] hover:border-yellow-400/50 transition-colors"
                                            >
                                                <AccordionTrigger className="text-left font-semibold hover:no-underline text-gray-200">
                                                    {faq.q}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-gray-400 pt-2">
                                                    {faq.a}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Submit a Request --- */}
                <section className="container px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <Card className="border border-gray-800 bg-[#121212]">
                            <CardContent className="p-8 space-y-6">
                                <div className="text-center space-y-2">
                                    <h2 className="text-3xl font-black text-white">Submit a Request</h2>
                                    <p className="text-gray-400">
                                        Can't find what you're looking for? Send us a message and we'll get back to you soon.
                                    </p>
                                </div>

                                <form className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-300">Name</label>
                                            <Input
                                                placeholder="Your name"
                                                className="bg-[#0f0f0f] border border-gray-700 text-gray-100 placeholder-gray-500"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-300">Email</label>
                                            <Input
                                                type="email"
                                                placeholder="your.email@example.com"
                                                className="bg-[#0f0f0f] border border-gray-700 text-gray-100 placeholder-gray-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-300">Subject</label>
                                        <Input
                                            placeholder="What's your issue about?"
                                            className="bg-[#0f0f0f] border border-gray-700 text-gray-100 placeholder-gray-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-300">Message</label>
                                        <Textarea
                                            placeholder="Describe your issue in detail..."
                                            className="min-h-[150px] bg-[#0f0f0f] border border-gray-700 text-gray-100 placeholder-gray-500"
                                        />
                                    </div>

                                    <Button
                                        size="lg"
                                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold"
                                    >
                                        Submit Request
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Support;
