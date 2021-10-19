import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Star } from '../model/star';

@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(private http: HttpClient) {

  }
  findStar(id: number):Observable<Star> {
    return this.http.get<Star>("http://localhost:8080/star?id="+id)
  }
  addSpaceShip(star_id: number, spaceShip_id:number){
    return this.http.get<Star>("http://localhost:8080/star/spaceship?star_id="+star_id+"&spaceship_id="+spaceShip_id)
  }
  removeSpaceShip(star_id: number, spaceShip_id:number){
    return this.http.get<Star>("http://localhost:8080/star/remove_spaceship?star_id="+star_id+"&spaceship_id="+spaceShip_id)
  }
}
