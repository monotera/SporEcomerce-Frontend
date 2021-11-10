import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crew } from '../model/crew';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class CrewService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  constructor(private http: HttpClient) {

  }
  findCrew(id: number):Observable<Crew> {
    return this.http.get<Crew>("http://localhost:8080/crew?crew_id=" + id, {
        withCredentials: true
      })
  }
  getAvailableLoad(id: number):Observable<number> {
    return this.http.get<number>("http://localhost:8080/crew/load-capacity?crew_id=" + id, {
        withCredentials:true
      })
  }
  getThePlayer(): Observable<Player> {
    return this.http.get<Player>("http://localhost:8080/player/theplayer", {
      withCredentials:true
    });
  }
  getIsCaptain(idPlayer: number): Observable<Boolean>{
    return this.http.get<Boolean>(`http://localhost:8080/crew/captain?player_id=${idPlayer}`, {
      withCredentials:true
    });
  }
  modNameCrew(crew_id: number, newName: string){
    return this.http.put<Boolean>(`http://localhost:8080/crew/change_crewName?crew_id=${crew_id}&newName=${newName}`, this.httpOptions, {
      withCredentials: true
    });
  }
  terminate(player_id: number): Observable<Boolean>{
    return this.http.put<Boolean>(`http://localhost:8080/crew/game-over?player_id=${player_id}`,
      this.httpOptions, {
      withCredentials:true
    }
    );
  }
}
