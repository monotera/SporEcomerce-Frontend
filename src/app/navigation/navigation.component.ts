import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Star } from '../model/star';
import { Player } from '../model/player';
import { Crew } from '../model/crew';
import { Spaceship } from '../model/spaceship';
import { StarService } from '../shared/star.service';
import { PlayerService } from '../shared/player.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

  star: Star = new Star(-1,-1,-1,-1,"",null,false,null, null)
  player: Player = new Player(-1,"","",new Crew(-1,"",0,0,null,new Spaceship(0,"",0,0)))
  starList: Star[] = [new Star(-1,-1,-1,-1,"Amarilla",null,false, null, null),
                      new Star(-1,-1,-1,-1,"Azul",null,false, null, null),
                      new Star(-1,-1,-1,-1,"Azul",null,false, null, null),
                      new Star(-1,-1,-1,-1,"Azul",null,false, null, null)]

  constructor(private starService: StarService,private route: ActivatedRoute, private playerService: PlayerService) { }

  ngOnInit(): void {
    const player_param: string | null = this.route.snapshot.queryParamMap.get('player_id');
    const star_param: string | null = this.route.snapshot.queryParamMap.get('star_id');
    if(player_param != null)
      this.playerService.findPlayer(Number(player_param)).subscribe(player => this.player = player)
    //findMyStar player_param
    if(star_param != null)
      this.starService.findStar(Number(star_param)).subscribe(star => this.star = star)
  }
  ngOnDestroy(): void{
    console.log(this.player);
  }
}
