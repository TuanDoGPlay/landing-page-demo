/**
 * Copyright (c) . GplayJSC (gplayjsc.com)

 * Author: TuanDD (tuandd.gplaystudio@gmail.com)

 * Created: ././.

 * File: .

 * Bank: 0001853507758 MB Bank

 * Note:
 */
import i18n from "i18next";
import {initReactI18next} from "react-i18next";

// import file JSON ngôn ngữ thủ công
import en from "./en.json";
import vi from "./vi.json";
import jp from "./jp.json";

const savedLang = localStorage.getItem("lang") || "vi";

i18n
    .use(initReactI18next) // kết nối với React
    .init({
        resources: {
            en: {translation: en},
            vi: {translation: vi},
            jp: {translation: jp},
        },
        lng: savedLang, // ngôn ngữ mặc định
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // React đã xử lý XSS
        },
    }).then();

export default i18n;
