import { Spaceship } from "./spaceship";

export class Crew {
    constructor(
        public id: number,
        public crew_name: string,
        public accTime: number,
        public credits: number,
        public products:any,
        public space_crew: Spaceship,
    ){}
}
