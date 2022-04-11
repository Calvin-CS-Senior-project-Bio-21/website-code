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

  // mergeOptions for ngx-echarts had to be instantiated here to be used later
  mergeOptions_1_false = {};
  mergeOptions_1_true = {};
  mergeOptions_2_false = {};
  mergeOptions_2_true = {};
  mergeOptions_3_false = {};
  mergeOptions_3_true = {};

  // Some variable declarations
  old_length: number = 0 
  int_time: number = 3000
 
  ngOnInit(): void {
  }

  // Boolean for showing 24 hour data
  show_options: boolean = false

  // Data Obtained from home.component
  @Input() pi1_data: any;
  @Input() new_length: any
  @Input("id") id = "?";
  @Input("graph") graph = "?"

  // Initiallizes the graphs based on html information
  chartOptions: EChartsOption = {
    xAxis: {
      type: 'category',
      name: "Time",
      boundaryGap: false
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
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

  // The function call to add new data to the graphs
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
    // Interval to wait for the database to hookup and for this.pi1_data to 
    // come down the pipeline
    let debug_interval = setInterval(() => {
    this.old_length = this.new_length
    this.merge_options()
    if(this.new_length > 0){
      clearInterval(debug_interval)
    }
    }, 3000)

    // This Interval checks every 30 minutes for new data and merges it into the current graphs
    setInterval(() => {
      this.old_length = this.new_length
      this.merge_options()

    }, 1800000)               //1000 = 1 second, 1,800 seconds = 30 minutes
  }
  
}
