import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Briefcase, Coffee, Heart, Rocket, Trophy, Users} from "lucide-react";
import {useTranslation} from "react-i18next";
import {Icon} from "@/lib/utils.ts";

interface Job {
    name: string
    description: string
    link: string
    tag: Array<{
        name: string
        icon: string
    }>
}

interface Benefit {
    name: string
    icon: string
    description: string
}


const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive healthcare for you and your family",
  },
  {
    icon: Coffee,
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours",
  },
  {
    icon: Rocket,
    title: "Growth",
    description: "Professional development and learning budget",
  },
  {
    icon: Users,
    title: "Team Events",
    description: "Regular team building and social activities",
  },
  {
    icon: Trophy,
    title: "Performance Bonus",
    description: "Competitive salary with performance bonuses",
  },
  {
    icon: Briefcase,
    title: "Equipment",
    description: "Top-tier hardware and software tools",
  },
];

const Careers = () => {
    const {t} = useTranslation();

    const jobOpenings = t("career-page.job.list", {returnObjects: true}) as Job[]
    const benefits = t("career-page.benefit.list", {returnObjects: true}) as Benefit[]
    return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-16">
        <section className="container px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center space-y-6 animate-fade-up max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
                {t("career-page.title")}
            </h1>
            <p className="text-xl text-muted-foreground">
                {t("career-page.description")}
            </p>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-black mb-8">{t("career-page.benefit.title")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                return (
                  <Card
                      key={index}
                    className="border-2 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 space-y-3">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          {Icon(benefit.icon, "h-6 w-6 text-primary")}
                      </div>
                        <h3 className="text-xl font-bold">{benefit.name}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black">{t("career-page.job.title")}</h2>
              <Badge variant="outline" className="text-lg px-4 py-2">
                  {jobOpenings.length} {t("career-page.job.count")}
              </Badge>
            </div>

            <div className="space-y-4">
              {jobOpenings.map((job, index) => (
                <Card
                    key={index}
                  className="border-2 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-fade-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="space-y-3 flex-1">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">{job.name}</h3>
                          <p className="text-muted-foreground">{job.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-3 text-sm">
                            {job.tag.map((tag, index) => (

                          <Badge variant="outline" className="gap-1">
                              {Icon(tag.icon, "h-3 w-3")}
                              {tag.name}
                          </Badge>
                            ))}
                        </div>
                      </div>

                        <Button size="lg" className="lg:w-auto w-full">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 text-center space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl font-black">{t("career-page.job.general-application.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("career-page.job.general-application.description")}            </p>
            <Button size="lg" variant="outline" className="text-lg px-8">
                {t("career-page.job.general-application.text-button")}            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
