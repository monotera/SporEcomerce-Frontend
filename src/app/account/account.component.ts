import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Player } from '../model/player';
import { Crew } from '../model/crew';
import { PlayerService } from '../shared/player.service';
import { Spaceship } from '../model/spaceship';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  player: Player = new Player(-1,"","",new Crew(-1,"",0,0,null,new Spaceship(0,"",0,0)))

  constructor(private playerService: PlayerService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const firstParam: string | null = this.route.snapshot.queryParamMap.get('id');
    if(firstParam != null)
      this.playerService.findPlayer(Number(firstParam)).subscribe(player => this.player = player)
  }


}
