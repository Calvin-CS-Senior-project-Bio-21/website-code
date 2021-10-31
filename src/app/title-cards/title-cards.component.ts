import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-title-cards',
  templateUrl: './title-cards.component.html',
  styleUrls: ['./title-cards.component.css']
})
export class TitleCardsComponent implements OnInit {

  side_bar = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggle_toolbar(): void {
    console.log(this.side_bar);
  }
  

}
