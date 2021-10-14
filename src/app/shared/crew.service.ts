import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crew } from '../model/crew';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  constructor(private http: HttpClient) {
    
  }
  findCrew(id: number):Observable<Crew> {
      return this.http.get<Crew>("http://localhost:8080/crew?crew_id="+id)
  }
}
