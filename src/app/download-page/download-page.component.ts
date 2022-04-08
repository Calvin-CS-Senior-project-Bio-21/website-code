import { DatePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { map } from '@firebase/util';
import { DataBaseService } from '../data-base.service';
import { dataPoint } from '../DataPoint';


@Component({
  selector: 'app-download-page',
  templateUrl: './download-page.component.html',
  styleUrls: ['./download-page.component.css']
})
export class DownloadPageComponent implements OnInit {

  @Input() pi1_data: any
  @Input() new_length: any
  old_length: number = 0



  constructor(public db: DataBaseService, public datepipe: DatePipe) { 

  }

  download_content(content: any, header: string) {
    let blob = new Blob(['\ufeff' + content], {type: 'text/csv;charset=utf-8;'})
    let download = document.createElement("a")
    let url = URL.createObjectURL(blob)
    let filename = "biobox-" + header + "-" + this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm')

    download.setAttribute("href", url)
    download.setAttribute("download", filename + ".csv")
    download.style.visibility="hidden"
    document.body.appendChild(download)
    download.click()
    document.body.removeChild(download)
  }

  get_formated_data(data_type: string) {
    let line = []
    line.push("" + "Time" + ',' + data_type)
    for(let i=0; i < this.new_length; i++){
      let row1 = this.pi1_data.time[i]
      let row2 = 0
      if(data_type=="Temperature"){
        row2 = this.pi1_data.temperature[i]
      }else if(data_type == "CO2"){
        row2 = this.pi1_data.co2[i]
      } else if(data_type == "Humidity"){
        row2 = this.pi1_data.humidity[i]
      }
      
      line.push("\n" + row1 + "," + row2.toString())
    }
    console.log(line)
    return line
    
  }

  export_data(data_type: string) {
    let myInterval = setInterval(() =>{
      if (this.new_length != 0){
        if(data_type == "Temperature"){
          let content = this.get_formated_data(data_type)
          this.download_content(content, "Temperature")
        }else if(data_type == "CO2"){
          let content = this.get_formated_data(data_type)
          this.download_content(content, "CO2")
        }else if (data_type == "Humidity"){
          let content = this.get_formated_data(data_type)
          this.download_content(content, "Humidity")
        }
      }
      clearInterval(myInterval)
    }, 3000)
    
  }

  ngOnInit(): void {
    
  }

}
