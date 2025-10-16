/**
 * Copyright (c) . GplayJSC (gplayjsc.com)

 * Author: TuanDD (tuandd.gplaystudio@gmail.com)

 * Created: ././.

 * File: .

 * Bank: 0001853507758 MB Bank

 * Note:
 */
import {Game, Job} from "@/common/types.ts";
import {useTranslation} from "react-i18next";

const LocalizeText = ({data,className}: { data: Game | Job,className:string }) => {
    const {i18n} = useTranslation();
    const currentLang = i18n.language;

    const currentDes =
        currentLang === "vn" ? data.desVn || data.desEn : data.desEn;
    return (<p className={className}>{currentDes}</p>)
}
export default LocalizeText;
