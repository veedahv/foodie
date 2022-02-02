import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  postUrl: string = "https://jsonplaceholder.typicode.com/posts";

  get() {
    return this.http.get(this.postUrl);
  }

  create(body: any) {
    return this.http.post(this.postUrl, {
      body: body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
  }

  update(body: any) {
    return this.http.put(this.postUrl, {
      body: body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
  }

  remove(id: number) {
    return this.http.delete(`${this.postUrl}/${id}`)
  }

}
