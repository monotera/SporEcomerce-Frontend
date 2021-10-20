import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
export class NavigationComponent implements OnInit {

  star: Star = new Star(-1,-1,-1,-1,"",null,false,null, null)
  player: Player = new Player(-1,"","",new Crew(-1,"",0,0,null,new Spaceship(0,"",0,0)))
  starList: Star[] = [new Star(197,-1,-1,-1,"Amarilla",null,false, null, null),
                      new Star(11,-1,-1,-1,"Azul",null,false, null, null),
                      new Star(201,-1,-1,-1,"Azul",null,false, null, null),
                      new Star(-1,-1,-1,-1,"Azul",null,false, null, null)]
  idStarN: number[] = []
  isLoaded: boolean = false
  pos: String = ""

  constructor(private starService: StarService,private route: ActivatedRoute, private playerService: PlayerService, private _router: Router) { }

  ngOnInit(): void {
    this.ngInit()
  }

  moveSpaceship(id:number){
    this._router.navigateByUrl(`/navigation?star_id=${id}`)
    this.ngInit()
  }

  ngInit(): void {
    this.playerService.getThePLayer().subscribe(player => this.player = player, err => {
      this._router.navigateByUrl('/not_found');})

    const star_param: string | null = this.route.snapshot.queryParamMap.get('star_id');

    if(star_param != null)
      this.starService.findStar(Number(star_param)).subscribe(star => this.star = star)
    else{
      this.playerService.findPos(this.player.id).subscribe(pos => this.pos = pos)
      this.starService.findStar(Number(this.pos)).subscribe(star => this.star = star)
    }

  }
}
