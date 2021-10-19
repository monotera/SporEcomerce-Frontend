import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Crew } from '../model/crew';
import { Spaceship } from '../model/spaceship';
import { CrewService } from '../shared/crew.service';


@Component({
  selector: 'app-crewmembers',
  templateUrl: './crewmembers.component.html',
  styleUrls: ['./crewmembers.component.scss']
})
export class CrewmembersComponent implements OnInit {
  crew: Crew = new Crew(-1, "", 0, 0, null, new Spaceship(0, "", 0, 0))
  available_load: number = 0
  isLoaded: boolean = false

  constructor(private crewService: CrewService,private route: ActivatedRoute,private _router: Router) { }

  ngOnInit(): void {
    console.log(this.crew)
    const firstParam: string | null = this.route.snapshot.queryParamMap.get('id');
    this.crewService.findCrew(Number(firstParam)).subscribe(crew => {
        this.crew = crew
        this.isLoaded = true
        
    }, err => this._router.navigateByUrl('/crew_not_found'))
    this.crewService.getAvailableLoad(Number(firstParam)).subscribe(capacity => { this.available_load = capacity })
    
  }

}
