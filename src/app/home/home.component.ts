import { Component, OnInit, Input } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { dataPoint } from '../DataPoint';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Data to be passed on to graph-cards
  @Input() pi1_data: any
  @Input() new_length: any

  constructor(public db: DataBaseService) { 
  }

  ngOnInit(): void {
  }

}
