import { Component, OnInit } from '@angular/core';
import { dataPoint } from '../DataPoint';
import { SAMPLE_1 } from '../sample_db';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data1: dataPoint[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.data1 = SAMPLE_1;
  }

}
