import { Component, OnInit, Input } from '@angular/core';
import { EChartsOption } from 'echarts';
import { SAMPLE_1 } from '../sample_db';
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

  data_1: dataPoint = {time: "", co2: 0, humidity: 0, temperature: -273};
  mergeOptions = {};

  initial_data = [this.data_1.co2, this.data_1.humidity, this.data_1.temperature];
  new_data: number[] = [];

  // item: AngularFirestoreCollection<dataPoint>

  ngOnInit(): void {
  }
  db_data: any 
  temp = this.db.getData().then(value => 
      {this.db_data = value
       console.log(this.db_data)
      }
    )

  @Input() card_title = "Graph ?";
  @Input("id") id = "?";

  chartOptions: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['CO2', 'Humidity', 'Temperature']
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: "Test_data",
        data: this.initial_data,
        type: "line",
      }
    ]
  }

  constructor(public db: DataBaseService) {
    console.log("Before assignment");
    // this.item = db.get_data() 
    setInterval(() => {
      console.log('updated')
      this.new_data.push(this.data_1.co2, this.data_1.humidity, this.data_1.temperature)
      this.mergeOptions = {
        series: [
          {
            name: "Test_data",
            data: this.new_data,
            type: "line"
          }
        ]
      }
    }, 3000)
  }
  
}
