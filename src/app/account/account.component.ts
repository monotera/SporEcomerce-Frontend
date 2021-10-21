import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Player } from '../model/player';
import { Crew } from '../model/crew';
import { PlayerService } from '../shared/player.service';
import { StarService } from '../shared/star.service';
import { CrewService } from '../shared/crew.service';
import { Spaceship } from '../model/spaceship';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  player: Player = new Player(-1,"","",new Crew(-1,"",0,0,null,new Spaceship(0,"",0,0)))
  nameInput: string = ""
  roleInput: string = ""
  crewIDInput: string = ""
  crewNameInput: string = ""
  cent: any = false
  isLoaded: boolean = false


  constructor(private playerService: PlayerService,private route: ActivatedRoute, private starService: StarService, private _router: Router, private crewService: CrewService) { }

  ngOnInit(): void {

    this.starService.getThePlayer().subscribe(player => {this.player = player;
      this.isLoaded = true
    }, err => {
      this._router.navigateByUrl('/star_not_found');
    })

  }

  changename(){
    this.cent = false
    this.playerService.modPLayerName(this.player.id, this.nameInput).subscribe(cent => this.cent = cent)
    alert(this.cent+"¡Changes have been made!" + this.nameInput)
    this.nameInput = ''
    window.location.reload()
      return
  }
  changerole(){
    if(this.roleInput == "CAPTAIN" || this.roleInput == "PILOT" || this.roleInput == "MERCHANT"){
      this.playerService.modPlayerRole(this.player.id, this.roleInput)
      alert("¡Changes have been made!" + this.roleInput)
    }
    else
      alert("Has entered an incorrect role" + this.roleInput)
    this.nameInput = ''
    window.location.reload()
      return
  }
  changeByIDcrew(){
    //Primero traer todos los id de crews y verificar que exista
    //else para decir que el id no existe
    //Solo puede existir un Capitan por crew Primero debes cambiar tu rol
    alert("¡Changes have been made! "+this.crewIDInput)
    this.crewIDInput = ''
    window.location.reload()
      return
  }
  changeNamecrew(){
    if(this.player.player_role == "CAPTAIN"){

      alert("¡Changes have been made! "+this.crewNameInput)
    }
    else
      alert("¡You are not the captain! "+this.player.player_role)

    this.crewNameInput = ''
    window.location.reload()
      return
  }
  redirect() {
    this._router.navigateByUrl(`/crew?id=${this.player.crewmembers.id}`);
  }

}
