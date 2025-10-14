import {ChevronDown, Globe, Menu, X} from "lucide-react";
import {useState} from "react";
import {useTranslation} from "react-i18next";

const Navigation = () => {
    const {t, i18n} = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [language, setLanguage] = useState(localStorage.getItem("lang") || "vi");

    const navItems = [
        {label: t("navbar.game"), href: "/games"},
        {label: t("navbar.career"), href: "/careers"},
        {label: t("navbar.support"), href: "/support"},
        {label: t("navbar.about"), href: "/about"},
    ];

    const languages = [
        {code: "vi", name: "VI", label: "Tiếng Việt"},
        {code: "en", name: "EN", label: "English"},
        {code: "jp", name: "JP", label: "Nico nico ni"},
    ];

    const handleLangChange = (code: string) => {
        const lang = code.toLowerCase()
        i18n.changeLanguage(lang).then(() => {
            localStorage.setItem("lang", lang);
            setLanguage(code);
            setLangOpen(false);
        })
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a
                            href="/"
                            className="text-background text-3xl font-black tracking-tight hover:opacity-80 transition-opacity mr-5"
                        >
                            <img src="/logo.svg" alt="Logo" className="h-7 mr-2" style={{fill: "white"}}/>
                        </a>
                        <div className="hidden md:flex items-center gap-8 relative">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-background/80 hover:text-background font-medium transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}

                        </div>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 relative">
                        {/* Language Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setLangOpen(!langOpen)}
                                className="flex items-center gap-1 text-background/80 hover:text-background font-medium transition-colors rounded-md px-2 py-1 hover:bg-background/10"
                            >
                                <Globe size={18}/>
                                <span>{languages.find(l => l.code == language).name}</span>
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-200 ${
                                        langOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {/* Dropdown Menu */}
                            {langOpen && (
                                <div
                                    className="absolute right-0 mt-4 w-32 bg-foreground border border-border rounded-lg shadow-xl overflow-hidden backdrop-blur-md transition-all duration-150">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => handleLangChange(lang.code)}
                                            className={`w-full text-left px-4 py-2 text-background/80 hover:text-background hover:bg-background/10 transition-colors ${
                                                language === lang.code
                                                    ? "bg-background/10 text-background font-semibold"
                                                    : ""
                                            }`}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-background p-2 hover:bg-background/10 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-background/10">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-background/80 hover:text-background font-medium py-3 transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* Language Dropdown for Mobile */}
                        <div className="relative mt-3">
                            <button
                                onClick={() => setLangOpen(!langOpen)}
                                className="flex items-center justify-between w-full text-background/80 hover:text-background font-medium px-2 py-2 rounded-md hover:bg-background/10 transition-colors"
                            >
                                <div className="flex items-center gap-2">
                                    <Globe size={18}/>
                                    <span>
                    {languages.find((l) => l.code === language)?.label}
                  </span>
                                </div>
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-200 ${
                                        langOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {langOpen && (
                                <div
                                    className="mt-1 bg-foreground border border-border rounded-lg overflow-hidden transition-all duration-150">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => handleLangChange(lang.code)}
                                            className={`w-full text-left px-4 py-2 text-background/80 hover:text-background hover:bg-background/10 transition-colors ${
                                                language === lang.code
                                                    ? "bg-background/10 text-background font-semibold"
                                                    : ""
                                            }`}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
