import { Crew } from "./crew";

export class Player {
    constructor(
        public id: number,
        public player_name: string,
        public player_role: string,
        public crewmembers: Crew
    ) {
        
    }
}
