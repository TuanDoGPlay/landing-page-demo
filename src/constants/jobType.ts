/**
 * Copyright (c) . GplayJSC (gplayjsc.com)

 * Author: TuanDD (tuandd.gplaystudio@gmail.com)

 * Created: ././.

 * File: .

 * Bank: 0001853507758 MB Bank

 * Note:
 */
import {currentLanguage} from "@/lib/utils.ts";

export enum JobTypeEnum {
    Remote = 1,
    Onboard = 2,
    FullTime = 3,
    PartTime = 4,
}

interface JobType {
    id: JobTypeEnum;
    name: string;
    icon: string;
    vnName: string;
}

class JobTypeInstance implements JobType {
    id: JobTypeEnum;
    name: string;
    icon: string;
    vnName: string;

    constructor({id, name, icon, vnName}: JobType) {
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

const data: JobType[] = [
    {
        id: JobTypeEnum.Remote,
        name: "Remote",
        icon: "home",
        vnName: "Làm việc từ xa"
    },
    {
        id: JobTypeEnum.Onboard,
        name: "Onboard",
        icon: "building",
        vnName: "Làm việc tại văn phòng"
    },
    {
        id: JobTypeEnum.FullTime,
        name: "FullTime",
        icon: "clock",
        vnName: "Toàn thời gian"
    },
    {
        id: JobTypeEnum.PartTime,
        name: "PartTime",
        icon: "hourglass-half",
        vnName: "Bán thời gian"
    }
];

export const JobTypeMap = new Map<JobTypeEnum, JobTypeInstance>(data.map(item => [item.id, new JobTypeInstance(item)]));
