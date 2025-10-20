import {Card, CardContent} from "@/components/ui/card";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

const CompanyGallery = () => {
    const {t} = useTranslation();
    const [validImages, setValidImages] = useState([]);

    useEffect(() => {
        const imagePromises = Array.from({length: 100}, (_, i) => i + 1).map(num => {
            return new Promise(resolve => {
                const img = new Image();
                img.src = `/company-image/${num}.jpg`;
                img.onload = () => resolve(num); // ảnh tồn tại
                img.onerror = () => resolve(null); // ảnh lỗi → bỏ qua
            });
        });

        Promise.all(imagePromises).then(results => {
            setValidImages(results.filter(Boolean)); // chỉ giữ ảnh hợp lệ
        });
    }, []);

    return (
        <section id="gallery" className="bg-[#0a0a0a] text-gray-100 pb-40">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="max-w-8xl mx-auto">
                    {/* --- Title --- */}
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-5xl sm:text-6xl font-black tracking-tight text-white">
                            {t("home-page.gallery.title")}
                        </h2>
                        <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                            {t("home-page.gallery.description")}
                        </p>
                    </div>

                    {/* --- Carousel --- */}
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="">
                            {validImages.map((image, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <Card
                                        className="group overflow-hidden border border-gray-800 bg-[#121212] hover:border-yellow-400/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,204,0,0.25)] animate-scale-in"
                                        style={{animationDelay: `${index * 150}ms`}}
                                    >
                                        <CardContent className="p-0">
                                            <div className="relative overflow-hidden aspect-video">
                                                <img
                                                    src={`/company-image/${image}.jpg`}
                                                    alt={image.toString()}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div
                                                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"/>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* --- Controls --- */}
                        <CarouselPrevious className="left-2 bg-black/40 hover:bg-yellow-400  text-white"/>
                        <CarouselNext className="right-2 bg-black/40 hover:bg-yellow-400  text-white"/>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default CompanyGallery;
