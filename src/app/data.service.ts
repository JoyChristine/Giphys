import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  get: any;

  constructor(private http: HttpClient) { }


   myTrendingGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=50&rating=g`);
   
  }
  searchGifs(title: string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${title}&api_key=${environment.apiKey}&limit=50&offset=0&rating=g`);
  }
}
