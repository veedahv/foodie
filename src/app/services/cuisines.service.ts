import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuisinesService {

  // constructor(private http: import { Injectable } from '@angular/core';
  
  // @Injectable({providedIn: 'root'})
  // export class ServiceNameService {
    constructor(private http: HttpClient) { }

    url: string = "https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert";

    get() {
      return this.http.get(this.url);
    }

    create () {}

    update () {}

    remove () {}
    
  // }) { }
}
