import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import heroImage from "@/assets/hero-characters.jpg";
import {useTranslation} from "react-i18next";
import info from "@/assets/data/info.json"

interface Stat {
    name: string,
    count: string,
}

const Hero = () => {
    const {t} = useTranslation();

    const stats: Stat[] = [
        {
            name: "label.game",
            count: info.homeStats.gameCount,
        },
        {
            name: "label.player",
            count: info.homeStats.playerCount,
        },
        {
            name: "label.country",
            count: info.homeStats.countryCount,
        },
        {
            name: "label.year",
            count: info.homeStats.yearCount,
        },

    ]

  return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          <div
              className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/40"
              style={{
                  backgroundImage: `
      linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.4)),
      url(${heroImage})
    `,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
              }}
          />
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-up">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent ">
                {t("home-page.title")}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white max-w-2xl mx-auto leading-relaxed">
              {t("home-page.slogan")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black shadow-[0_0_30px_rgba(59,130,246,0.5)]  transition-all text-lg px-8 py-6 rounded-full"
                  onClick={() => window.open(t("home-page.button.introduce.link"), "_self")}
            >
                  <ArrowRight className="mr-2 h-5 w-5"/>
                  {t("home-page.button.introduce.name")}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary bg-transparent hover:border-primary hover:bg-primary text-primary text-lg px-8 py-6 rounded-full transition-all duration-300"
              onClick={() => window.open(t("home-page.button.explore.link"), "_self")}
            >
                {t("home-page.button.explore.name")}
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
                <div
                    key={index}
              className="text-center p-6 rounded-2xl backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:scale-105 animate-scale-in cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-black text-primary mb-2">
                  {stat.count}
              </div>
              <div className="text-sm text-white font-medium">
                  {t(stat.name)}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
};

export default Hero;
