import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Download} from "lucide-react";
import {useTranslation} from "react-i18next";
import {Icon, sortGamesByInstall} from "@/lib/utils.ts";
import games from "@/assets/data/games.json";
import {Game} from "@/common/types.ts";
import info from "@/assets/data/info.json";
import {IconBrandAppstore, IconBrandGooglePlay} from "@tabler/icons-react";
import {GameTypeMap} from "@/constants/gameType.ts";
import LocalizeText from "@/components/LocalizeText.tsx";

const Games = () => {
    const { t } = useTranslation();
    const allGames = sortGamesByInstall(games as Game[]);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
            <Navigation />

            <main className="pt-40 pb-20">
                {/* Title */}
                <section className="container px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="text-center space-y-4 animate-fade-up max-w-3xl mx-auto">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
                            {t("game-page.title")}
                        </h1>
                        <p className="text-xl text-gray-400">
                            {t("game-page.description")}
                        </p>
                    </div>
                </section>

                {/* Games Grid */}
                <section className="container px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {allGames.map((game, index) => (
                            <Card
                                key={index}
                                className="group overflow-hidden border border-gray-800 bg-[#121212] hover:border-yellow-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,204,0,0.2)] animate-scale-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <CardContent className="p-0">
                                    {/* Image */}
                                    <div className="relative overflow-hidden aspect-video">
                                        <img
                                            src={"/game-image/" + game.image}
                                            alt={game.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

                                        {/* Badge */}
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <Badge className="bg-black/70 backdrop-blur-sm text-gray-200 border border-gray-700">
                                                {Icon(GameTypeMap.get(game.type).icon, "h-4 w-4 text-yellow-400 mr-2")}
                                                {GameTypeMap.get(game.type).toString()}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                                                {game.name}
                                            </h3>
                                            <LocalizeText vn={game.desVn} en={game.desEn}
                                                          className="text-gray-400 text-sm line-clamp-2 h-10"/>
                                        </div>

                                        <div className="flex items-center gap-4 text-sm text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <Download className="h-4 w-4" />
                                                <span>{game.install} {t("label.download")}</span>
                                            </div>
                                        </div>

                                        <div className="flex gap-5">
                                            <Button
                                                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition-colors"
                                                variant="default"
                                                onClick={() => window.open(game.playstore)}
                                            >
                                                <IconBrandGooglePlay/>
                                                {t("button.play-on-android")}
                                            </Button>
                                            {game.appstore && <Button
                                                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition-colors"
                                                variant="default"
                                                onClick={() => window.open(game.appstore)}
                                            >
                                                <IconBrandAppstore/>
                                                {t("button.play-on-ios")}
                                            </Button>}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Store Section */}
                <section className="container px-4 sm:px-6 lg:px-8 mt-24">
                    <div className="bg-gradient-to-br from-yellow-500/20 via-yellow-600/10 to-yellow-400/10 rounded-3xl p-12 text-center space-y-6 max-w-4xl mx-auto border border-yellow-500/20">
                        <h2 className="text-4xl font-black text-white">
                            {t("game-page.view-on-store.title")}
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            {t("game-page.view-on-store.description")}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="text-lg px-8 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold"
                                onClick={() =>
                                    window.open(info.gameStore.android, "_blank")
                                }
                            >
                                <Download className="mr-2 h-5 w-5" />
                                {t("game-page.view-on-store.android.title")}
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg px-8 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 bg-transparent hover:text-black transition-all"
                                onClick={() =>
                                    window.open(info.gameStore.ios, "_blank")
                                }
                            >
                                <Download className="mr-2 h-5 w-5" />
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
