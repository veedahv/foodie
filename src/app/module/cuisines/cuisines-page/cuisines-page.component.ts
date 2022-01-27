import { Component, OnInit } from '@angular/core';
import { CuisinesService } from 'src/app/services/cuisines.service';

@Component({
  selector: 'app-cuisines-page',
  templateUrl: './cuisines-page.component.html',
  styleUrls: ['./cuisines-page.component.scss']
})
export class CuisinesPageComponent implements OnInit {

  constructor(private cuisine: CuisinesService) { }

  cuisines: any = []
  cuisinesCurrentPage: any = []
  currentPage: number = 0;
  totalPages: number = 0;

  ngOnInit() {
    this.getCuisines();
  }

  getCuisines() {
    this.cuisine.get().subscribe(data => {
      this.cuisines = data;
      this.totalPages = Math.ceil(this.cuisines.meals.length / 24);
      this.cuisinesCurrentPage = this.cuisines.meals.slice(this.currentPage * 24, ((this.currentPage * 24) + 24));
    })
  }

  prevPage() {
    this.currentPage--;
    this.cuisinesCurrentPage = this.cuisines.meals.slice(this.currentPage * 24, ((this.currentPage * 24) + 24));

  }

  nextPage() {
    this.currentPage++;
    this.cuisinesCurrentPage = this.cuisines.meals.slice(this.currentPage * 24, ((this.currentPage * 24) + 24));

  }


}
