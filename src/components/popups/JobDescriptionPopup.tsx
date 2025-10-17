import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {useTranslation} from "react-i18next";
import {Job} from "@/common/types.ts";
import LocalizeText from "@/components/LocalizeText.tsx";
import info from "@/assets/data/info.json";

interface JobDescriptionModalProps {
    open: boolean;
    onClose: () => void;
    job: Job;
}

const JobDescriptionPopup = ({open, onClose, job}: JobDescriptionModalProps) => {
    const {t} = useTranslation();
    if (!job) return null;
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent
                className="max-w-7xl bg-[#121212] border border-gray-800 text-gray-100 p-0 rounded-2xl flex flex-col max-h-[90vh] overflow-hidden"
            >
                {/* --- Header --- */}
                <div className="p-8 pb-4 border-b border-gray-800 bg-[#121212]/80 backdrop-blur-sm sticky top-0 z-10">
                    <DialogHeader>
                        <DialogTitle className="text-3xl font-bold text-yellow-400">
                            {job.name}
                        </DialogTitle>
                        <DialogDescription>
                            <LocalizeText
                                vn={job.desVn}
                                en={job.desEn}
                                className="text-gray-400 text-base mt-2"
                            />
                        </DialogDescription>
                    </DialogHeader>
                </div>

                {/* --- Scrollable content --- */}
                <div className="flex-1 overflow-y-auto p-8 space-y-8">
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* --- Left column --- */}
                        <div className="flex flex-col gap-8">
                            {/* Mô tả công việc */}
                            <section>
                                <h3 className="text-xl font-semibold mb-3 text-white">
                                    {t("career-page.job.detail.description") || "Mô tả công việc"}
                                </h3>
                                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                                    {job.jd.description.vn.map((_, i) => (
                                        <li key={i}>
                                            <LocalizeText
                                                vn={job.jd.description.vn[i]}
                                                en={job.jd.description.en[i]}
                                                className=""
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Yêu cầu */}
                            <section>
                                <h3 className="text-xl font-semibold mb-3 text-white">
                                    {t("career-page.job.detail.requirement")}
                                </h3>
                                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                                    {job.jd.requirement.vn.map((_, i) => (
                                        <li key={i}>
                                            <LocalizeText
                                                vn={job.jd.requirement.vn[i]}
                                                en={job.jd.requirement.en[i]}
                                                className=""
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Thông tin khác */}
                            <section>
                                <h3 className="text-xl font-semibold mb-3 text-white">
                                    {t("career-page.job.detail.contact")}
                                </h3>
                                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                                    {job.jd.contact.vn.map((_, i) => (
                                        <li key={i}>
                                            <LocalizeText
                                                vn={job.jd.contact.vn[i]}
                                                en={job.jd.contact.en[i]}
                                                className=""
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        {/* --- Right column (Quyền lợi) --- */}
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-white">
                                {t("career-page.job.detail.benefit")}
                            </h3>
                            <ul className="list-disc pl-5 text-gray-400 space-y-2">
                                {job.jd.benefit.vn.map((_, i) => (
                                    <li key={i}>
                                        <LocalizeText
                                            vn={job.jd.benefit.vn[i]}
                                            en={job.jd.benefit.en[i]}
                                            className=""
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* --- Footer --- */}
                <div
                    className="border-t border-gray-800 bg-[#121212]/90 backdrop-blur-sm p-6 sticky bottom-0 flex justify-end">
                    <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
                        <a href={`mailto:${info.mailHr}`} target="_blank">
                            {t("button.apply-now")}
                        </a>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default JobDescriptionPopup;
