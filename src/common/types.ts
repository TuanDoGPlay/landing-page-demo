/**
 * Copyright (c) . GplayJSC (gplayjsc.com)

 * Author: TuanDD (tuandd.gplaystudio@gmail.com)

 * Created: ././.

 * File: .

 * Bank: 0001853507758 MB Bank

 * Note:
 */
import {GameTypeEnum} from "@/constants/gameType.ts";
import {JobTypeEnum} from "@/constants/jobType.ts";

export interface Game {
    name: string
    playstore: string
    appstore?: string
    install: string
    desEn: string
    desVn?: string
    type: GameTypeEnum
    image: string
    rating: number
}

interface ILocalize {
    vn: string[],
    en: string[]
}

export interface Job {
    name: string
    desVn: string
    desEn: string
    types: JobTypeEnum[]
    jd: {
        description: ILocalize,
        requirement: ILocalize,
        benefit: ILocalize,
        contact: ILocalize,
    }
}