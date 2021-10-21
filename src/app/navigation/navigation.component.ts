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

  star: Star = new Star(-1,-1,-1,-1,"",null,false,null, [])
  player: Player = new Player(-1,"","",new Crew(-1,"",0,0,null,new Spaceship(0,"",0,0)))
  starList: Star[] = []
  idStarN: number[] = []
  isLoaded: boolean = false
  pos: number = 0

  constructor(private starService: StarService,private route: ActivatedRoute, private playerService: PlayerService, private _router: Router) { }

  ngOnInit(): void {
    this.ngInit()
  }

  moveSpaceship(id:number){

    this._router.navigateByUrl(`/navigation?star_id=${id}`)
    this.ngInit()
  }

  openComerce(id: number){
    this._router.navigateByUrl(`/comerce?star_id=${id}`)

  }

  ngInit(): void {

    this.playerService.getThePLayer().subscribe(player => this.player = player, err => {
      this._router.navigateByUrl('/not_found player');})

    //this.playerService.findPos(this.player.id).subscribe(pos => this.pos = pos)
    //this.starService.findNearStar(this.pos).subscribe(stars => this.starList = stars, err => {
      //this._router.navigateByUrl('/not_found');}))
    this.starService.findNearStar(501).subscribe(stars => this.starList = stars, err => {
      this._router.navigateByUrl('/not_found starList');})

    this.starService.findStar(501).subscribe(star => this.star = star)


  }
}
