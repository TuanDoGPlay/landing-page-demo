import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Download, Star, Users} from "lucide-react";
import {useTranslation} from "react-i18next";
import {Icon} from "@/lib/utils.ts";

interface Game {
    name: string
    description: string
    image: string
    type: string
    "type-icon": string
    link: string
    "player-count": string
    rating: string
    "install-count": string
}


const Games = () => {
    const {t} = useTranslation();
    const allGames = t("game-page.list", {returnObjects: true}) as Game[]
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-16">
        <section className="container px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center space-y-4 animate-fade-up max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
                {t("game-page.title")}
            </h1>
            <p className="text-xl text-muted-foreground">
                {t("game-page.description")}
            </p>
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {allGames.map((game, index) => {
              return (
                <Card
                    key={index}
                    className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={game.image}
                        alt={game.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                        <div
                            className="absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-30 transition-opacity duration-500"/>

                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-background/90 backdrop-blur-sm text-foreground border-0">
                            {Icon(game["type-icon"], "h-4 w-4 text-primary mr-2")}
                            {game.type}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                            {game.name}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                            {game.description}
                        </p>
                      </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                              <span>{game["player-count"]}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span>{game.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Download className="h-4 w-4" />
                              <span>{game["install-count"]}</span>
                          </div>
                        </div>

                        <Button
                        className="w-full"
                        variant="default"
                      >
                            {t("button.play-now")}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="container px-4 sm:px-6 lg:px-8 mt-24">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 text-center space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl font-black">{t("game-page.view-on-store.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("game-page.view-on-store.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                  <Download className="mr-2 h-5 w-5"
                            onClick={() => window.open(t("game-page.view-on-store.android.link"), "_blank")}/>
                  {t("game-page.view-on-store.android.title")}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                  <Download className="mr-2 h-5 w-5"
                            onClick={() => window.open(t("game-page.view-on-store.ios.link"), "_blank")}/>
                  {t("game-page.view-on-store.ios.title")}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Games;
