import { Component, OnInit, Input } from '@angular/core';
import { EChartsOption } from 'echarts';
import { dataPoint } from '../DataPoint';
import { Observable, of } from 'rxjs';
import { DataBaseService } from '../data-base.service';
import { DocumentData } from 'rxfire/firestore/interfaces';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-graph-cards',
  templateUrl: './graph-cards.component.html',
  styleUrls: ['./graph-cards.component.css']
})
export class GraphCardsComponent implements OnInit {

  // data_1: dataPoint = {time: "", co2: 0, humidity: 0, temperature: -273};
  mergeOptions_1_false = {};
  mergeOptions_1_true = {};
  mergeOptions_2_false = {};
  mergeOptions_2_true = {};
  mergeOptions_3_false = {};
  mergeOptions_3_true = {};
  isLoading = false;

  // initial_data = [this.data_1.co2, this.data_1.humidity, this.data_1.temperature];
  // pi1_data: number[] = [];
  // pi1_data: dataPoint = {time: [], co2: [], humidity: [], temperature: []}

  // item: AngularFirestoreCollection<dataPoint>

  ngOnInit(): void {
  }
  show_options: boolean = false
  // change_show_options() {
  //   this.show_options = !this.show_options

  // }
  Readings_1 = new FormControl();
  Readings_2 = new FormControl();
  options_list: string[] = ["CO2", "Humidity", "Temperature", "Time"]
  // db_data: any 
  // temp = this.db.getData().then(value => 
  //     {this.db_data = value
  //      console.log(this.db_data)
  //     }
  //   )

  @Input() pi1_data: any;
  @Input("id") id = "?";
  @Input("graph") graph = "?"

  chartOptions: EChartsOption = {
    xAxis: {
      type: 'category',
      name: "Time",
      boundaryGap: false
      // data: this.pi1_data.time,
    },
    tooltip: {},
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
  // db_data: any
  old_length: number = 0 
  @Input() new_length: any
  int_time: number = 3000
 
  data_update() {
    this.old_length = this.new_length
  }
  merge_options() {
    this.mergeOptions_1_true = {
      xAxis: [
        {
          data: this.pi1_data.time.slice(this.new_length - 48, this.new_length),
        }
      ],
      yAxis: [
        {
          name: "PPM of CO2"
        }
      ],
      series: [
        {
          name: "CO2 vs. Time",
          data: this.pi1_data.co2.slice(this.new_length - 48, this.new_length),
          type: "line",
        }
      ]
    }
    this.mergeOptions_1_false = {
      xAxis: [
        {
          data: this.pi1_data.time,
        }
      ],
      yAxis: [
        {
          name: "PPM of CO2"
        }
      ],
      series: [
        {
          name: "CO2 vs. Time",
          data: this.pi1_data.co2,
          type: "line",
        }
      ]
    }
    this.mergeOptions_2_true = {
      xAxis: [
        {
          data: this.pi1_data.time.slice(this.new_length - 48, this.new_length),
        }
      ],
      yAxis: [
        {
          name: "Temperature of Degrees C"
        }
      ],
      series: [
        {
          name: "Temperature vs. Time",
          data: this.pi1_data.temperature.slice(this.new_length - 48, this.new_length),
          type: "line"
        }
      ]
    }
    this.mergeOptions_2_false = {
      xAxis: [
        {
          data: this.pi1_data.time,
        }
      ],
      yAxis: [
        {
          name: "Temperature of Degrees C"
        }
      ],
      series: [
        {
          name: "Temperature vs. Time",
          data: this.pi1_data.temperature,
          type: "line"
        }
      ]
    }
    this.mergeOptions_3_true = {
      xAxis: [
        {
          data: this.pi1_data.time.slice(this.new_length - 48, this.new_length),
        }
      ],
      yAxis: [
        {
          name: "Percent Humidity"
        }
      ],
      series: [
        {
          name: "Humidity vs. Time",
          data: this.pi1_data.humidity.slice(this.new_length - 48, this.new_length),
          type: "line"
        }
      ]
    }
    this.mergeOptions_3_false = {
      xAxis: [
        {
          data: this.pi1_data.time,
        }
      ],
      yAxis: [
        {
          name: "Percent Humidity"
        }
      ],
      series: [
        {
          name: "Humidity vs. Time",
          data: this.pi1_data.humidity,
          type: "line"
        }
      ]
    }
  }
  
  constructor(public db: DataBaseService) {
    let debug_interval = setInterval(() => {
    console.log(this.new_length)
    this.data_update()
    this.merge_options()
    if(this.new_length > 0){
      clearInterval(debug_interval)
    }
    }, 3000)
    let iter:number = 0
    setInterval(() => {
      console.log(iter)
      iter++
      this.data_update()
      this.merge_options()

    }, 1800000)               //1000 = 1 second, 1,800 seconds = 30 minutes
  }
  
}
