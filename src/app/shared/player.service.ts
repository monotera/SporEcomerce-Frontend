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
  findPos(id: number):Observable<String> {
    return this.http.get<String>("http://localhost:8080/star?id="+id)
  }
  getThePLayer():Observable<Player> {
    return this.http.get<Player>("http://localhost:8080/player/theplayer")
  }
}
