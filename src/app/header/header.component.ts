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
  }

  // Instantiating variables used in this component
  db_data: any;
  old_length: number = 0
  new_length: number = 0
  pi1_data: dataPoint = {time: [], co2: [], humidity: [], temperature: []}


  collect_data_once() {
    let promise = this.db.getData().then(value => 
      {this.db_data = value
        this.new_length = Object.keys(this.db_data[0]).length
        console.log(this.db_data)
        this.orginize_data()
      })
    }
  /*
        The iteration variables in each of these loops are a string and by indexing
        that string it returns the key value. These key strings are times
        which is why the time array is just populated with the co2 key 
      */
  orginize_data() {
    let key_data = []
    if(this.new_length > this.old_length){
      for(let i = 0; i < this.new_length; i++){
        key_data.push((Object.keys(this.db_data[0])[i]))
      }
      key_data = key_data.sort()
      for(let data_key in key_data){
        this.pi1_data.time.push(this.db_data[0][key_data[data_key]].Time)
        this.pi1_data.co2.push(this.db_data[0][key_data[data_key]].CO2)
        this.pi1_data.humidity.push(this.db_data[1][key_data[data_key]].Humidity)
        this.pi1_data.temperature.push(this.db_data[2][key_data[data_key]].Temperature)
      }
      clearInterval(this.interval);
      console.log(this.pi1_data)
      this.old_length = this.new_length
    }
  }
  interval = setInterval(()=>this.collect_data_once(), 300)

  ngOnInit(): void {

  }

}
