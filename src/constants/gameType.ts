/**
 * Copyright (c) . GplayJSC (gplayjsc.com)

 * Author: TuanDD (tuandd.gplaystudio@gmail.com)

 * Created: ././.

 * File: .

 * Bank: 0001853507758 MB Bank

 * Note:
 */
import {currentLanguage} from "@/lib/utils.ts";


export enum GameTypeEnum {
    Casual = 1,
    Puzzle = 2,
    Racing = 3
}

interface GameType {
    id: GameTypeEnum;
    name: string;
    icon: string;
    vnName: string;
}

class GameTypeInstance implements GameType {
    id: GameTypeEnum;
    name: string;
    icon: string;
    vnName: string;

    constructor({id, name, icon, vnName}: GameType) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.vnName = vnName;
    }

    toString(): string {
        if (currentLanguage() == "vn") return this.vnName;
        return this.name;
    }
}

const data: GameType[] = [
    {
        id: GameTypeEnum.Casual,
        name: "Casual",
        icon: "heart",
        vnName: "Casual"
    },
    {
        id: GameTypeEnum.Puzzle,
        name: "Puzzle",
        icon: "puzzle",
        vnName: "Puzzle",
    },
    {
        id: GameTypeEnum.Racing,
        name: "Racing",
        icon: "zap",
        vnName: "Racing",
    },


]

export const GameTypeMap = new Map<GameTypeEnum, GameTypeInstance>(data.map(item => [item.id, new GameTypeInstance(item)]));