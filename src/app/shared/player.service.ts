import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  constructor(private http: HttpClient) {

  }
  findPlayer(id: number):Observable<Player> {
      return this.http.get<Player>("http://localhost:8080/player?player_id="+id, {
      withCredentials:true
    })
  }
  /*
  modPlayer(id: number, newPlayer: Player):Observable<Player>{
    //return this.http.put<Player>("http://localhost:8080/player?player_id="+id+"&newPlayer="+newPlayer)
  }*/
  modPLayerName(id:number, newName: string):Observable<Boolean>{
    return this.http.put<Boolean>(`http://localhost:8080/player/mod_name?player_id=${id}&newName=${newName}`, this.httpOptions,{
      withCredentials:true
    })
  }
  modPlayerRole(id:number, newRole: string):Observable<Boolean>{
    return this.http.put<Boolean>(`http://localhost:8080/player/mod_role?player_id=${id}&newRole=${newRole}`, this.httpOptions,{
      withCredentials:true
    })
  }
  modIDCrew(id: number, idCrew:number):Observable<Player>{
    return this.http.put<Player>(`http://localhost:8080/player/change_crew?player_id=${id}&crew_id=${idCrew}`,this.httpOptions,{
      withCredentials:true
    })
  }
  sellProduct(amountProducts: number, pxp_id: number, pxc_id: number) {
    return this.http.put(`http://localhost:8080/pxp/sell?amountProducts=${amountProducts}&pxp_id=${pxp_id}&pxc_id=${pxc_id}`,this.httpOptions,{
      withCredentials:true
    });
  }

}
