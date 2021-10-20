import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crew } from '../model/crew';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  constructor(private http: HttpClient) {
    
  }
  findCrew(id: number):Observable<Crew> {
      return this.http.get<Crew>("http://localhost:8080/crew?crew_id="+id)
  }
  getAvailableLoad(id: number):Observable<number> {
      return this.http.get<number>("http://localhost:8080/crew/load-capacity?crew_id="+id)
  }
  getThePlayer(): Observable<Player> {
    return this.http.get<Player>("http://localhost:8080/player/theplayer");
  }
}
