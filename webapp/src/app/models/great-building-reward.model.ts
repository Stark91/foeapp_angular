import { Age } from "./age.model";

export class GreatBuildingReward {
    id!: number;
    age!: number;
    level!: number;
    total!: number;
    p1!: number;
    p2!: number;
    p3!: number;
    p4!: number;
    p5!: number;

    constructor(id: number, age: number, level: number, total: number, p1: number, p2: number, p3: number, p4: number, p5: number) {
        this.id = id;
        this.age = age;
        this.level = level;
        this.total = total;
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.p4 = p4;
        this.p5 = p5;
    }
}
