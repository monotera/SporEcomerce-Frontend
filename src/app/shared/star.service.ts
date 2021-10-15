import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
