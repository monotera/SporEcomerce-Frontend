import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  crew: Crew = new Crew(-1,"",0,0,null,new Spaceship(0,"",0,0))

  constructor(private crewService: CrewService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const firstParam: string | null = this.route.snapshot.queryParamMap.get('id');
    if(firstParam != null)
      this.crewService.findCrew(Number(firstParam)).subscribe(crew => this.crew = crew)
  }

}
