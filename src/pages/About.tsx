import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Target} from "lucide-react";
import {useTranslation} from "react-i18next";
import {Icon} from "@/lib/utils.ts";

interface Stat {
    name: string,
    count: string,
    icon: string,
}

interface Value {
    name: string,
    description: string,
    icon: string,
}
interface Milestone {
    title: string,
    description: string,
    year: string,
}

const About = () => {
    const {t} = useTranslation();

    const stats = t("about-page.stat", {returnObjects: true}) as Stat[];
    const values = t("about-page.value.list", {returnObjects: true}) as Value[];
    const milestones = t("about-page.milestone", {returnObjects: true}) as Milestone[];


  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <section className="container px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center space-y-6 animate-fade-up max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
                {t("about-page.title")}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
                {t("about-page.join.description")}
            </p>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => {
              return (
                <Card
                    key={index}
                  className="border-2 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center space-y-3">
                      {Icon(stat.icon, "h-10 w-10 text-primary mx-auto")}
                      <div className="text-4xl font-black text-primary">{stat.count}</div>
                      <div className="text-sm font-medium text-muted-foreground">{stat.name}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <Target className="h-8 w-8 text-primary" />
                  <h2 className="text-4xl font-black">{t("about-page.mission.title")}</h2>
              </div>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    {t("about-page.mission.description")}
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 text-center space-y-4">
                <h3 className="text-3xl font-black">{t("about-page.vision.title")}</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  {t("about-page.vision.description")}
              </p>
            </div>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-black mb-12 text-center">{t("about-page.value.title")}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                return (
                  <Card
                      key={index}
                    className="border-2 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8 space-y-4">
                      <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                          {Icon(value.icon, "h-7 w-7 text-primary")}
                      </div>
                      <h3 className="text-2xl font-bold">{value.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-12 text-center">Our Journey</h2>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex gap-6 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <Badge className="text-lg px-4 py-2 bg-primary text-primary-foreground">
                      {milestone.year}
                    </Badge>
                  </div>
                  <Card className="flex-1 border-2 hover:border-primary/50 transition-all">
                    <CardContent className="p-6 space-y-2">
                      <h3 className="text-xl font-bold">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 text-center space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl font-black">{t("about-page.join.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("about-page.join.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="/careers">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.7)] transition-all">
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
