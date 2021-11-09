import { Component, OnInit } from '@angular/core';
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
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  player: Player = new Player(
    -1,
    '',
    '',
    new Crew(-1, '', 0, 0, null, new Spaceship(0, '', 0, 0))
  );
  nameInput: string = '';
  roleInput: string = '';
  crewIDInput: string = '';
  crewNameInput: string = '';
  cent: Boolean = false;
  captain: Boolean = false;
  isLoaded: boolean = false;

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private starService: StarService,
    private _router: Router,
    private crewService: CrewService
  ) {}

  ngOnInit(): void {
    this.starService.getThePlayer().subscribe(
      (player) => {
        this.player = player;
        this.isLoaded = true;
        this.captain = false;
        this.IsCaptain();
      },
      (err) => {
        this._router.navigateByUrl('/login');
      }
    );
  }

  changerole() {
    this.cent = false;
    if (
      this.roleInput == 'ROLE_CAPTAIN' ||
      this.roleInput == 'ROLE_PILOT' ||
      this.roleInput == 'ROLE_MERCHANT'
    ) {
      if (this.roleInput == 'ROLE_CAPTAIN' && this.captain)
        alert('There is already a captain');
      else {
        this.playerService
          .modPlayerRole(this.player.id, this.roleInput)
          .subscribe(
            (cent) => {
              this.cent = cent;
              if (this.cent)
                alert('¡Changes have been made! ' + this.roleInput);
              else alert('Error 1');
              this.roleInput = '';
              window.location.reload();
            },
            (err) => {
              this._router.navigateByUrl('/err_modPlayerRole');
            }
          );
      }
    } else alert('Has entered an incorrect role ' + this.roleInput);
  }
  IsCaptain() {
    this.crewService.getIsCaptain(this.player.id).subscribe(
      (captain) => {
        this.captain = captain;
      },
      (err) => {
        this._router.navigateByUrl('/err_getIsCaptain');
      }
    );
  }
  changeByIDcrew() {
    if (this.player.player_role != 'ROLE_CAPTAIN')
      this.playerService
        .modIDCrew(this.player.id, Number(this.crewIDInput))
        .subscribe(
          (player) => {
            this.player = player;
            if (this.player.crewmembers.id == Number(this.crewIDInput))
              alert('¡Changes have been made! ' + this.crewIDInput);
            else alert('Has entered an incorrect crew id: ' + this.crewIDInput);
            this.crewIDInput = '';
            window.location.reload();
          },
          (err) => {
            this._router.navigateByUrl('/err_modIDCrew');
          }
        );
    else alert('First you must cahnge the captain role');
  }
  changeNamecrew() {
    if (this.player.player_role == 'ROLE_CAPTAIN') {
      this.cent = false;
      this.crewService
        .modNameCrew(this.player.crewmembers.id, this.crewNameInput)
        .subscribe(
          (cent) => {
            this.cent = cent;
          },
          (err) => {
            this._router.navigateByUrl('/err_modNameCrew');
          }
        );
      alert('¡Changes have been made! ' + this.crewNameInput);
    } else alert('¡You are not the captain! ' + this.player.player_role);

    this.crewNameInput = '';
    window.location.reload();
    return;
  }
  redirect() {
    this._router.navigateByUrl(`/crew?id=${this.player.crewmembers.id}`);
  }
}
