import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) {

  }
  findPlayer(id: number):Observable<Player> {
      return this.http.get<Player>("http://localhost:8080/player?player_id="+id)
  }
  /*
  modPlayer(id: number, newPlayer: Player):Observable<Player>{
    //return this.http.put<Player>("http://localhost:8080/player?player_id="+id+"&newPlayer="+newPlayer)
  }*/
}
