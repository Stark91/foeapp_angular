import { Age } from "./age.model";
import { GreatBuildingBoost } from "./great-building-boost.model";

export class GreatBuilding {
    id!: number;
    name!: string;
    age!: number;
    image!: string;
    x!: number;
    y!: number;
    boost1!: number;
    boost2!: number;

    constructor(id: number, name: string, age: number, image: string, x: number, y : number, boost1: number, boost2: number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.image = image;
        this.x = x;
        this.y = y;
        this.boost1 = boost1;
        this.boost2 = boost2;
    }
}
