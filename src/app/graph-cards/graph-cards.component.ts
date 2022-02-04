import { Component, OnInit, Input } from '@angular/core';
import { EChartsOption } from 'echarts';
import { dataPoint } from '../DataPoint';
import { Observable, of } from 'rxjs';
import { DataBaseService } from '../data-base.service';
import { DocumentData } from 'rxfire/firestore/interfaces';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-graph-cards',
  templateUrl: './graph-cards.component.html',
  styleUrls: ['./graph-cards.component.css']
})
export class GraphCardsComponent implements OnInit {

  // data_1: dataPoint = {time: "", co2: 0, humidity: 0, temperature: -273};
  mergeOptions_1 = {};
  mergeOptions_2 = {};

  // initial_data = [this.data_1.co2, this.data_1.humidity, this.data_1.temperature];
  // new_data: number[] = [];
  new_data: dataPoint = {time: [], co2: [], humidity: [], temperature: []}

  // item: AngularFirestoreCollection<dataPoint>

  ngOnInit(): void {
  }
  // db_data: any 
  // temp = this.db.getData().then(value => 
  //     {this.db_data = value
  //      console.log(this.db_data)
  //     }
  //   )

  @Input() card_title = "Graph ?";
  @Input("id") id = "?";

  chartOptions: EChartsOption = {
    xAxis: {
      type: 'category',
      name: "Time"
      // data: this.new_data.time,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: "Test_data",
        type: "line",
      }
    ]
  }



  constructor(public db: DataBaseService) {
    let db_data: any 
    let old_length: number = 0 
    let new_length: number
    setInterval(() => {
   
      let promise = this.db.getData().then(value => 
      {db_data = value
       new_length = db_data.length
      }     
    )
    if(new_length > old_length){
      for(let i = 0; i < new_length; i++){
        this.new_data.co2.push(db_data[i].co2)
        this.new_data.humidity.push(db_data[i].humidity)
        this.new_data.temperature.push(db_data[i].temp)
        this.new_data.time.push(db_data[i].time)
      }
      old_length = new_length
    }
    // console.log(this.new_data)
      this.mergeOptions_1 = {
        xAxis: [
          {
            data: this.new_data.time,
          }
        ],
        yAxis: [
          {
            name: "ppm"
          }
        ],
        series: [
          {
            name: "Test_data",
            data: this.new_data.co2,
            type: "line"
          }
        ]
      }
      this.mergeOptions_2 = {
        xAxis: [
          {
            data: this.new_data.time,
          }
        ],
        yAxis: [
          {
            name: "temp C"
          }
        ],
        series: [
          {
            name: "Test_data",
            data: this.new_data.temperature,
            type: "line"
          }
        ]
      }
    }, 3000)
  }
  
}
