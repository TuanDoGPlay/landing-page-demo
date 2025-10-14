import {useTranslation} from "react-i18next";
import {Icon} from "@/lib/utils.ts";

interface Item {
    name: string;
    link: string;
}

const Footer = () => {
    const {t} = useTranslation();



  const footerSections = [
    {
        title: t("label.game"),
        links: t("footer.game", {returnObjects: true}) as Item[],
    },
    {
        title: t("label.company"),
        links: t("footer.company", {returnObjects: true}) as Item[],
    },
    {
        title: t("label.support"),
        links: t("footer.support", {returnObjects: true}) as Item[],
    },
  ];

    const socialNetworks = t("footer.social-network", {returnObjects: true}) as Item[];

  return (
    <footer className="bg-foreground text-background border-t border-background/10">
      <div className="container px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2 space-y-6">
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

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-lg font-bold">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
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
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-background/10 text-center text-background/60">
            <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
