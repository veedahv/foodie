import { Component, OnInit } from '@angular/core';
import { CuisinesService } from 'src/app/services/cuisines.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  constructor(private cuisine: CuisinesService) { }

  ngOnInit() {
    this.getCuisines();
  }

  cuisines: any = []
  cuisinesCurrentPage: any = []

  getCuisines() {
    this.cuisine.get().subscribe(data => {
      this.cuisines = data;
      this.cuisinesCurrentPage = this.cuisines.meals.slice(0, 4);
    })
  }

}



