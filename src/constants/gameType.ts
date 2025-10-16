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
    Action = 1,
    Adventure,
    Arcade = 3,
    Card = 4,
    Casual = 5,
    Driving = 6,
    Fighting = 7,
    MMO = 8,
    Puzzle = 9,
    Racing = 10,
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
        id: GameTypeEnum.Action,
        name: "Action",
        icon: "heart",
        vnName: "Hành động"
    }
]

export const GameTypeMap = new Map<GameTypeEnum, GameTypeInstance>(data.map(item => [item.id, new GameTypeInstance(item)]));