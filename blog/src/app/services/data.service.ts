import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url +  '/api/posts');
  }

  getById(id: string) {
    return this.http.get(this.url + '/api/posts/' + id);
  }

  addPost(data: any){
    return this.http.post(this.url + '/api/posts', data);
  }

  createOrUpdatePost(credentials: any) {
    console.log(credentials)
    return this.http.post(this.url + '/post/create', credentials);
  }

}
