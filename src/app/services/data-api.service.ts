import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }

  getGenerosApi() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const date = Date.now();
    console.log(date);
    // const urlApi = 'https://api.themoviedb.org/3/genre/movie/list?api_key=d1c58472015c64a45032584cd1373753&language=es-ES';
    const urlApi = `http://api.tvmaze.com/schedule?country=US&date=2019-11-03`;
    return this.http.get(urlApi);
  }
}
