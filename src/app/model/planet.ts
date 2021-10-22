import { Productxplanet } from "./productxplanet";

export class Planet {
    constructor(
        public id: number,
        public planet_name: string,
        public product_list:Productxplanet[]
    ){}
}
