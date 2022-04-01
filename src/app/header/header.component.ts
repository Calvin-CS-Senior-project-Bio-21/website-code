import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataBaseService } from '../data-base.service';
import { dataPoint } from '../DataPoint';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, public db: DataBaseService) { 
    // this.grab_data()
  }

  db_data: any;
  old_length: number = 0
  new_length: number = 0
  pi1_data: dataPoint = {time: [], co2: [], humidity: [], temperature: []}
  collect_data_once() {
    // let db_data: any
    let promise = this.db.getData().then(value => 
      {this.db_data = value
        this.new_length = this.db_data.length
      }  
    )
    if(this.new_length > this.old_length){
      for(let i = this.old_length; i < this.new_length; i++){
        this.pi1_data.co2.push(this.db_data[i].co2)
        this.pi1_data.humidity.push(this.db_data[i].humidity)
        this.pi1_data.temperature.push(this.db_data[i].temp)
        this.pi1_data.time.push(this.db_data[i].time)

        clearInterval(this.interval)
      }

      this.old_length = this.new_length
      }
    }
  interval = setInterval(()=>this.collect_data_once(), 300)

  ngOnInit(): void {

  }

}
