import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-graph-cards',
  templateUrl: './graph-cards.component.html',
  styleUrls: ['./graph-cards.component.css']
})
export class GraphCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() card_title = "Graph ?";
  @Input("id") id = "?";
  @Input("image") img = "assets/garden-3.jpg";
  // card_title = "Title";

}
