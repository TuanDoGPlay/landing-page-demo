import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion";
import {HelpCircle, Search} from "lucide-react";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {Icon} from "@/lib/utils.ts";

interface Faq {
    category: string,
    questions: {
        q: string,
        a: string,
    }[]
}

interface SupportChannel {
    title: string,
    description: string,
    available: string,
    action: string,
    icon: string,
}


const Support = () => {
    const {t} = useTranslation();

    const supportChannels = t("support-page.channel", {returnObjects: true}) as SupportChannel[];

    const faqs = t("support-page.faq", {returnObjects: true}) as Faq[];
    const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <section className="container px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center space-y-6 animate-fade-up max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
                {t("support-page.title")}
            </h1>
            <p className="text-xl text-muted-foreground">
                {t("support-page.description")}
            </p>
            
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for help..."
                className="pl-12 h-14 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black mb-8 text-center">Contact Support</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {supportChannels.map((channel, index) => {
                return (
                  <Card
                    key={channel.title}
                    className="border-2 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 space-y-4 text-center">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                          {Icon(channel.icon, "h-8 w-8 text-primary")}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{channel.title}</h3>
                        <p className="text-muted-foreground mb-1">{channel.description}</p>
                        <p className="text-sm text-muted-foreground">{channel.available}</p>
                      </div>
                      <Button className="w-full">{channel.action}</Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-black">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-8">
              {faqs.map((category, categoryIndex) => (
                <div key={category.category} className="animate-fade-up" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
                  <h3 className="text-2xl font-bold mb-4">{category.category}</h3>
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.category}-${index}`}
                        className="border-2 rounded-lg px-6 hover:border-primary/50 transition-colors"
                      >
                        <AccordionTrigger className="text-left font-semibold hover:no-underline">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pt-2">
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

        <section className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-black">Submit a Request</h2>
                  <p className="text-muted-foreground">
                    Can't find what you're looking for? Send us a message and we'll get back to you soon.
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Name</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Email</label>
                      <Input type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Subject</label>
                    <Input placeholder="What's your issue about?" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Message</label>
                    <Textarea
                      placeholder="Describe your issue in detail..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <Button size="lg" className="w-full">
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
