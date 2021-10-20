import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../model/player';
import { Productxplanet } from '../model/productxplanet';
import { Star } from '../model/star';

@Injectable({
  providedIn: 'root'
})
export class StarService {
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
constructor(private http: HttpClient) {
    
  }
  findCrew(id: number):Observable<Star> {
    return this.http.get<Star>("http://localhost:8080/star?id=" + id)
    
  }
  buyProduct(amount: number, pxp_id: number, crew_id: number){
    return this.http.put(`http://localhost:8080/pxp/buy?amountProducts=${amount}&pxp_id=${pxp_id}&crew_id=${crew_id}`,this.httpOptions);
  }

  sellProduct(amountProducts: number, pxp_id: number, pxc_id: number) {
    return this.http.put(`http://localhost:8080/pxp/sell?amountProducts=${amountProducts}&pxp_id=${pxp_id}&pxc_id=${pxc_id}`,this.httpOptions);
  }
  getThePlayer(): Observable<Player> {
    return this.http.get<Player>("http://localhost:8080/player/theplayer");
  }
}
