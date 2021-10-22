import { Planet } from "./planet";
export class Star{
  constructor(
    public id: number,
    public x: number,
    public y: number,
    public z: number,
    public name: string,
    public nearStars: any,
    public isInHabited: boolean,
    public spaceLobby: any,
    public planetList: Planet[],
  ){}
}
