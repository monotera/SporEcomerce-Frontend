import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Crew } from '../model/crew';
import { Player } from '../model/player';
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
    this.crewService.getThePlayer().subscribe(player => {
      this.crew = player.crewmembers
      console.log(this.crew.id);
      this.crewService.getAvailableLoad(Number(this.crew.id)).subscribe(capacity => {
        this.available_load = capacity
        this.isLoaded = true
      })
    })
   
    
  }

}
