import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';
@Component({
  selector: 'app-dynamic-card',
  templateUrl: './dynamic-card.component.html',
  styleUrls: ['./dynamic-card.component.css']
})
export class DynamicCardComponent implements OnInit {
  public cardItem:Card = new Card("","","","","","");
  public cards:Card[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  onBtnClick(event:Event){
    this.cards.push(this.cardItem);
    this.cardItem = new Card("","","","","","");
  }

}
