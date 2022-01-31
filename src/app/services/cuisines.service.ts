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
    postUrl: string = "https://jsonplaceholder.typicode.com/posts";

    get() {
      return this.http.get(this.url);
    }

    create (body: any) {
      // body: JSON.stringify({
      //   title: 'foo',
      //   body: 'bar',
      //   userId: 1,
      // }),
      return this.http.post(this.postUrl, {
        body: body,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }});
    }

    update () {}

    remove () {}
    
  // }) { }
}
