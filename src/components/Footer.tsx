import {useTranslation} from "react-i18next";
import {Icon} from "@/lib/utils.ts";
import games from "@/assets/data/games.json";
import info from "@/assets/data/info.json"

interface Item {
    name: string,
    link: string,
}

const Footer = () => {
    const {t} = useTranslation();

    const topGames = games.slice(0, 4);

    const companySection = [
        {
            name: t("label.about"),
            link: "/about"
        },
        {
            name: t("label.career"),
            link: "/career"
        },
        {
            name: t("label.support"),
            link: "/support"
        }
  ];

    const socialNetworks = t("footer.social-network", {returnObjects: true}) as Item[];

  return (
    <footer className="bg-foreground text-background border-t border-background/10">
        <div className="container px-4 sm:px-6 lg:px-8 pt-16 pb-4">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <div className="col-span-2 space-y-6">
              <h3 className="text-4xl font-black tracking-tight">{t("footer.title")}</h3>
            <p className="text-background/70 text-lg max-w-md">
                {t("footer.description")}
            </p>
            <div className="flex gap-4">
                {socialNetworks.map((item: Item, index: number) => (
                <a
                    key={index}
                    href={item.link}
                    aria-label={item.name}
                  className="bg-background/10 hover:bg-primary p-3 rounded-full transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                >
                    {Icon(item.name.toLowerCase())}
                </a>
              ))}
            </div>
          </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-bold">{t("label.game")}</h4>
              <ul className="space-y-3">
                  {topGames.map((game) => (
                      <li key={game.name}>
                    <a
                        href={game.playstore}
                      className="text-background/70 hover:text-background transition-colors"
                    >
                        {game.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
                <div className="space-y-4">
                    <h4 className="text-lg font-bold">{t("label.company")}</h4>
                    <ul className="space-y-3">
                        {companySection.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.link}
                                    className="text-background/70 hover:text-background transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="space-y-3">
                        <li>
                            <a
                                href={`mailto:${info.mailHr}`}
                                className="text-background/70 hover:text-background transition-colors"
                            >
                                {t("label.contact")}
                            </a>
                        </li>
                    </ul>
                </div>
        </div>

            <div className="pt-4 border-t border-background/10 text-center text-background/60">
            <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
