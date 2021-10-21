import { Product } from "./product";

export class Productxplanet {
    constructor(
        public id: number,
        public stock: number,
        public demand: number,
        public sales_price: number,
        public offer: number,
        public purchase_price: number,
        public product: Product,
        public sp_: boolean,
        public pp_:boolean        
    ){}    
}
