export class Mission {   
    description: string;
    id: number;
    name: string;

    constructor(id: number, description: string, name: string) {
        this.id = id;
        this.description = description;
        this.name = name;
    }
}