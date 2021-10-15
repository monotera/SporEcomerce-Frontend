import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from '../model/planet';
import { Product } from '../model/product';
import { Productxplanet } from '../model/productxplanet';
import { Star } from '../model/star';
import { StarService } from '../shared/star.service';

@Component({
  selector: 'app-comerce',
  templateUrl: './comerce.component.html',
  styleUrls: ['./comerce.component.scss']
})
export class ComerceComponent implements OnInit {
  star:Star = new Star(0,"",[])
  isLoaded:boolean = false
  constructor(private starService: StarService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const firstParam: string | null = this.route.snapshot.queryParamMap.get('id');
    if (firstParam != null) {
      this.starService.findCrew(Number(firstParam)).subscribe(star => {
        this.star = star
        this.isLoaded = true
        console.log(this.star)
      })
      
    }
      
  }

}
