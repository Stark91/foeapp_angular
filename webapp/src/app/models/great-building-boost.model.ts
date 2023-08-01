import { Age } from "./age.model";

export class GreatBuildingBoost {
    id!: number;
    name!: string;
    description!: string;
    image!: string;

    constructor(id: number, name: string, description: string, image: string) {
        this.id = id;
        this.name = name;
        this.description= description;
        this.image = image;
    }
}
