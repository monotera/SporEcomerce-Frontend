import { Planet } from "./planet";

export class Star {
    constructor(
        public id: number,
        public name: string,
        public planetList:Planet[]
    ){}
}
