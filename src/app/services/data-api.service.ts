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
    const urlApi = 'https://api.themoviedb.org/3/genre/movie/list?api_key=d1c58472015c64a45032584cd1373753&language=es-ES';
    return this.http.get(urlApi);
  }
}
