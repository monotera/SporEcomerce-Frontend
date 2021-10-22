import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Star } from '../model/star';
import { Player } from '../model/player';
import { Crew } from '../model/crew';
import { Spaceship } from '../model/spaceship';
import { StarService } from '../shared/star.service';
import { PlayerService } from '../shared/player.service';
import { CrewService } from '../shared/crew.service';

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
  message: String[] = []

  constructor(private starService: StarService,private route: ActivatedRoute, private playerService: PlayerService, private _router: Router, private crewService: CrewService) { }

  ngOnInit(): void {
    this.ngInit()
  }

  moveSpaceship(id:number){
    this.isLoaded = false;
    this.starService.moveShip(this.star.id, id, this.player.crewmembers.space_crew.id).subscribe(star => this.star = star)
    this.moveShip(this.star, this.player)
    this.ngOnInit()
  }

  ngInit(): void {

    this.starService.getThePlayer().subscribe(player => {
      this.player = player;
      this.starService.findStar(this.player.crewmembers.space_crew.id).subscribe(star =>
        {
          this.star = star;
          this.moveShip(this.star, this.player);

      }, err => {
        this._router.navigateByUrl('/star_not_found');})

    }, err => {
      this._router.navigateByUrl('/player_not_found');})

  }

  moveShip(star: Star, player: Player) {

    this.starService.findNearStar(this.star.id).subscribe(stars => {
      if (player.crewmembers.accTime > 80000) {
      alert("game time was exceeded!")
    }
      this.starList = stars;
      this.isLoaded = true;
    }, err => {
      this._router.navigateByUrl('/NearStar_not_found');})
  }

  terminate(){
    if(this.player.player_role == "CAPTAIN"){
      this.crewService.terminate(this.player.id).subscribe(stat => {
        alert(`Total time: ${this.player.crewmembers.accTime} Total Earned: ${this.player.crewmembers.credits}`)
        this._router.navigateByUrl('/')
      })

    }
    else
      alert("Only the captain can finish the game")

  }

}
