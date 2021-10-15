import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Star } from '../model/star';
import { StarService } from '../shared/star.service';
import { Router } from '@angular/router';
import { Crew } from '../model/crew';
import { Spaceship } from '../model/spaceship';
import { CrewService } from '../shared/crew.service';
@Component({
  selector: 'app-comerce',
  templateUrl: './comerce.component.html',
  styleUrls: ['./comerce.component.scss']
})
export class ComerceComponent implements OnInit {

  amounts: number[] = []
  products_index: number[] =[] 
  star: Star = new Star(0, "", [])
  credits:number = 0
  
  isLoaded: boolean = false

  constructor(private starService: StarService, private route: ActivatedRoute, private _router: Router,private crewService: CrewService) { }

  ngOnInit(): void {
    //TODO: camiar cuando ya se sepan identificar los usuarios
    //http://localhost:4200/comerce?star_id=11&crew_id=219
    const firstParam: string | null = this.route.snapshot.queryParamMap.get('star_id');
    const secondParam: string | null = this.route.snapshot.queryParamMap.get('crew_id');
    this.crewService.findCrew(Number(secondParam)).subscribe(crew => this.credits = crew.credits,err =>this._router.navigateByUrl('/crew_not_found'))
    this.starService.findCrew(Number(firstParam)).subscribe(star => {
      this.star = star
      this.star.planetList.forEach(planet => {
        planet.product_list.forEach(pxp => {
          this.amounts.push(1)
        })
      })
      this.isLoaded = true

    }, err => {
      this._router.navigateByUrl('/star_not_found'); 
    })
      
   
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }
  buy(input_index: number,pxp_id:number) {
    console.log(this.amounts[input_index])
    console.log(pxp_id)
  }
  sell(input_index: number, pxp_id: number) {
    console.log(this.amounts[input_index])
    console.log(pxp_id)
  }
}
