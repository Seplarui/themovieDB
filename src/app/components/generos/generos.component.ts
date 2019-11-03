import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  private generos: any;

  ngOnInit() {
    this.getGeneros();
  }

  getGeneros() {

    this.dataApi.getGenerosApi().subscribe((generos) => console.log(generos));
    // this.dataApi.getGenerosApi().subscribe((generos: []) => this.generos = generos);
    // this.dataApi.getGenerosApi().subscribe(data => this.generos = data[this.generos]);
    this.dataApi.getGenerosApi().subscribe((generos: any[]) => (this.generos = Array.of(generos)));
  }

}
