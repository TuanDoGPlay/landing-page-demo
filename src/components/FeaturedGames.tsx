import {Card, CardContent} from "@/components/ui/card";
import {useTranslation} from "react-i18next";
import {Icon} from "@/lib/utils.ts";

interface Game {
    name: string
    description: string
    image: string
    type: string
    "type-icon": string
    link: string
}

const FeaturedGames = () => {
    const {t} = useTranslation();
    const games = t("home-page.game.list", {returnObjects: true}) as Game[]


  return (
    <section id="games" className="py-24 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight">
              {t("home-page.game.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("home-page.game.description")}
          </p>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {games.map((game, index) => {
            return (
              <Card
                  key={index}
                className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={game.image}
                      alt={game.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                      <div
                          className={`absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-30 transition-opacity duration-500`}/>

                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          {Icon(game["type-icon"],"h-4 w-4 text-primary")}
                          <span className="text-sm font-semibold">{game.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {game.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {game.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
