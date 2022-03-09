import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { dataPoint } from '../DataPoint';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  db_data: any
  db_length: any

  // get_db_data() {
  //   let promise = this.db.getData().then(value => 
  //     {this.db_data = value
  //      this.db_length = this.db_data.length
  //     }  
  //   ).finally(this.get_db_data)
  // }

  constructor(public db: DataBaseService) { 
    // this.get_db_data()
  }

  ngOnInit(): void {
    // this.data1 = SAMPLE_1;
  }

}
