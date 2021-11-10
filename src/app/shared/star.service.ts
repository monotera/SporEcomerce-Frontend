import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../model/player';
import { Productxplanet } from '../model/productxplanet';
import { Star } from '../model/star';

@Injectable({
  providedIn: 'root',
})
export class StarService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };
  constructor(private http: HttpClient) {}
  findStar(id: number): Observable<Star> {
    return this.http.get<Star>('http://localhost:8080/spaceship/ship-star?ship_id=' + id, {
      withCredentials:true
    });
  }
  findNearStar(id: number): Observable<Star[]> {
    return this.http.get<Star[]>(
      'http://localhost:8080/star/near-stars?id=' + id, {
        withCredentials:true
      }
    );
  }
  findCrew(id: number): Observable<Star> {
    return this.http.get<Star>('http://localhost:8080/star?id=' + id, {
      withCredentials:true
    });
  }
  buyProduct(amount: number, pxp_id: number, crew_id: number) {
    return this.http.put(
      `http://localhost:8080/pxp/buy?amountProducts=${amount}&pxp_id=${pxp_id}&crew_id=${crew_id}`,
      this.httpOptions,{
      withCredentials:true
    }
    );
  }
  sellProduct(amountProducts: number, pxp_id: number, pxc_id: number) {
    return this.http.put(
      `http://localhost:8080/pxp/sell?amountProducts=${amountProducts}&pxp_id=${pxp_id}&pxc_id=${pxc_id}`,
      this.httpOptions,{
      withCredentials:true
    }
    );
  }
  getThePlayer(): Observable<Player> {
    return this.http.get<Player>('http://localhost:8080/player/theplayer', {
      withCredentials:true
    });
  }

  moveShip(starOriginID: number, starDesID: number, shipID: number): Observable<Star>{
    return this.http.put<Star>(`http://localhost:8080/spaceship/move-ship?star_origin_id=${starOriginID}&star_des_id=${starDesID}&ship_id=${shipID}`,
      this.httpOptions, {
      withCredentials:true
    }
    );
  }

}
