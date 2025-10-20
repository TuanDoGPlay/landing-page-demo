/**
 * Copyright (c) . GplayJSC (gplayjsc.com)

 * Author: TuanDD (tuandd.gplaystudio@gmail.com)

 * Created: ././.

 * File: .

 * Bank: 0001853507758 MB Bank

 * Note:
 */
import {useTranslation} from "react-i18next";

const LocalizeText = ({vn, en, className}: { vn?: string, en?: string, className?: string }) => {
    const {i18n} = useTranslation();
    const currentLang = i18n.language;

    const currentDes = currentLang === "vn" ? vn || en : en || vn;
    return (<p className={className}>{currentDes}</p>)
}
export default LocalizeText;
