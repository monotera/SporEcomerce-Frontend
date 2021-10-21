import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Star } from '../model/star';
import { StarService } from '../shared/star.service';
import { Router } from '@angular/router';
import { Crew } from '../model/crew';
import { Spaceship } from '../model/spaceship';
import { CrewService } from '../shared/crew.service';
import { Productxplanet } from '../model/productxplanet';
@Component({
  selector: 'app-comerce',
  templateUrl: './comerce.component.html',
  styleUrls: ['./comerce.component.scss']
})
export class ComerceComponent implements OnInit {

  amounts: number[] = []
  products_index: number[] = []
  star: Star = new Star(0, "", [])
  credits: number = 0
  crew_id: number = 0
  star_id: string | null = null
  isLoaded: boolean = false
  crew_products: any[] = []
  available_load:number = 0

  constructor(private starService: StarService, private route: ActivatedRoute, private _router: Router, private crewService: CrewService) { }

  ngOnInit(): void {
    this.star_id = this.route.snapshot.queryParamMap.get('star_id');
    this.getCrewData()

    //fill inputs with 1
    this.starService.findCrew(Number(this.star_id)).subscribe(star => {
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

  getCrewData = async() => {
    await this.crewService.getThePlayer().subscribe(player => {
      this.crew_id = player.crewmembers.id
      this.credits = player.crewmembers.credits
      this.crew_products = player.crewmembers.products
      this.crewService.getAvailableLoad(Number(this.crew_id)).subscribe(capacity => { this.available_load = capacity })
    })

  }


  trackByIndex(index: number, obj: any): any {
    return index;
  }
  buy(input_index: number, pxp: Productxplanet) {
    if (this.amounts[input_index] < 1 || this.amounts[input_index] > pxp.stock) {
      alert("Error! illegal action!")
      return
    }
    if (this.available_load < pxp.product.load_capacity * this.amounts[input_index]) {
      alert("You dont have enogh space to buy this many items!!")
      return
    }
    this.starService.buyProduct(this.amounts[input_index], pxp.id, Number(this.crew_id)).subscribe(res => {
      alert("Your transaction was successful!")
      window.location.reload()
    }, err => {
      alert("Error!!")
    })
  }
  sell(input_index: number, pxp: Productxplanet) {
    let found = this.crew_products.find(product => pxp.product.id == product.product.id)
    if (found) {
      if (found.stock >= this.amounts[input_index]) {
        if (found) {
          this.starService.sellProduct(this.amounts[input_index], pxp.id, found.id).subscribe(res => {
            alert("Your transaction was successful!")
            window.location.reload()
          }, err => {
            alert("Error you reach your max !!")
          })
        }
        else {
          alert("Your load capacity is at max!")
        }

      }
      else {
        alert("Your crew doesn't have the amount items required!")
      }
    } else {
      alert("Your crew doesn't have this item!")
    }
  }
  redirect() {
    this._router.navigateByUrl(`/crew?id=${this.crew_id}`);
  }
}
