import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  private showsToday: any;

  ngOnInit() {
    this.getShowsToday();
  }

  getShowsToday() {
    this.dataApi.getShowsTodayApi().subscribe((showsToday) => console.log(showsToday));
    this.dataApi.getShowsTodayApi().subscribe((showsToday: any) => (this.showsToday = showsToday));
  }

}
