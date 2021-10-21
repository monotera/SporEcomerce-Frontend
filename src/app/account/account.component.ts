import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Player } from '../model/player';
import { Crew } from '../model/crew';
import { PlayerService } from '../shared/player.service';
import { StarService } from '../shared/star.service';
import { Spaceship } from '../model/spaceship';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  player: Player = new Player(-1,"","",new Crew(-1,"",0,0,null,new Spaceship(0,"",0,0)))
  crewInput: string = ""

  constructor(private playerService: PlayerService,private route: ActivatedRoute, private starService: StarService) { }

  ngOnInit(): void {

    this.starService.getThePlayer().subscribe(player => this.player = player)

  }

  changename(){
    alert("¡Changes have been made!")
      return
  }
  changerole(){
    //Verficar que sea uno de los roles
    //else
    alert("¡Changes have been made!")
      return
  }
  changecrew(){
    //Primero traer todos los id de crews y verificar que exista
    //else para decir que el id no existe
    //Solo puede existir un Capitan por crew Primero debes cambiar tu rol
    alert("¡Changes have been made! "+this.crewInput)
    this.crewInput = ''
      return
  }
  //Cambiar nombre del crew

}
