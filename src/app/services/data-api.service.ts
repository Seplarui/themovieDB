import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  getShowsTodayApi() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const date = new Date();

    const dateNow = this.datePipe.transform(date, 'yyyy-MM-dd');

    console.log('date-->' + date);
    console.log('dateNow-->' + dateNow);
    // const urlApi = 'https://api.themoviedb.org/3/genre/movie/list?api_key=d1c58472015c64a45032584cd1373753&language=es-ES';
    const urlApi = `http://api.tvmaze.com/schedule?country=US&date=${dateNow}`;
    return this.http.get(urlApi);
  }
}
