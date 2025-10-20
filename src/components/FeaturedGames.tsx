import {useState} from "react";
import {Card, CardContent} from "@/components/ui/card";
import {useTranslation} from "react-i18next";
import {Icon, sortGamesByInstall} from "@/lib/utils.ts";
import {Game} from "@/common/types.ts";
import games from "@/assets/data/games.json";
import {GameTypeMap} from "@/constants/gameType.ts";
import LocalizeText from "@/components/LocalizeText.tsx";
import {Button} from "@/components/ui/button";
import {IconBrandAppstore, IconBrandGooglePlay} from "@tabler/icons-react";

const FeaturedGames = () => {
    const {t} = useTranslation();
    const gameList = sortGamesByInstall(games as Game[]).slice(0, 3);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleCardClick = (index: number, game: Game) => {
        if (game.appstore) {
            // ✅ Nếu có App Store link → hiện overlay
            setActiveIndex(activeIndex === index ? null : index);
        } else {
            // ⚡ Nếu không có → mở Google Play luôn
            window.open(game.playstore, "_blank");
        }
    };

    return (
        <section id="games" className="py-40 bg-[#0a0a0a] text-gray-100">
            <div className="container px-4 sm:px-6 lg:px-8">
                {/* --- Title --- */}
                <div className="text-center mb-16 space-y-4 animate-fade-up">
                    <h2 className="text-5xl sm:text-6xl font-black tracking-tight text-white">
                        {t("home-page.game.title")}
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        {t("home-page.game.description")}
                    </p>
                </div>

                {/* --- Game Cards --- */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl mx-auto">
                    {gameList.map((game, index) => (
                        <Card
                            key={index}
                            className="group overflow-hidden border border-gray-800 bg-[#121212] hover:border-yellow-400/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,204,0,0.25)] animate-scale-in cursor-pointer"
                            style={{animationDelay: `${index * 150}ms`}}
                            onClick={() => handleCardClick(index, game)}
                        >
                            <CardContent className="p-0 relative">
                                {/* --- Game image --- */}
                                <div className="relative overflow-hidden aspect-video">
                                    <img
                                        src={"/game-image/" + game.image}
                                        alt={game.name}
                                        className={`w-full h-full object-cover transition-transform duration-700 ${
                                            activeIndex === index ? "scale-105 brightness-50" : "group-hover:scale-110"
                                        }`}
                                    />
                                    {/* Overlay gradient */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"/>

                                    {/* Badge top-left */}
                                    <div className="absolute top-4 left-4">
                                        <div
                                            className="flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-700">
                                            {Icon(GameTypeMap.get(game.type).icon, "h-4 w-4 text-yellow-400")}
                                            <span className="text-sm font-semibold text-gray-200">
                        {GameTypeMap.get(game.type).toString()}
                      </span>
                                        </div>
                                    </div>

                                    {/* --- Button Overlay --- */}
                                    {activeIndex === index && game.appstore && (
                                        <div
                                            className="absolute inset-0 flex items-center justify-center gap-4 z-20 animate-fade-in">
                                            <Button
                                                className="bg-primary text-black font-semibold px-6"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    window.open(game.playstore, "_blank");
                                                }}
                                            >
                                                <IconBrandGooglePlay className=" mr-2"/>
                                                Google Play
                                            </Button>

                                            <Button
                                                className="bg-transparent border border-primary text-primary hover:text-foreground font-semibold px-6"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    window.open(game.appstore, "_blank");
                                                }}
                                            >
                                                <IconBrandAppstore className="mr-2"/>
                                                App Store
                                            </Button>
                                        </div>
                                    )}
                                </div>

                                {/* --- Text content --- */}
                                <div className="p-6 space-y-3">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                                        {game.name}
                                    </h3>
                                    <LocalizeText vn={game.desVn} en={game.desEn}
                                                  className="text-gray-400 line-clamp-2"/>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedGames;
