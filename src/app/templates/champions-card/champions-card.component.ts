import {Component, Input, OnInit} from '@angular/core';
import { Champion } from "../../core/model/Champion";

@Component({
  selector: 'app-champions-card',
  templateUrl: './champions-card.component.html',
  styleUrls: ['./champions-card.component.scss']
})
export class ChampionsCardComponent implements OnInit {
  // @ts-ignore
  @Input() champion: Champion;
  public isFlipped = false;

  constructor() { }

  ngOnInit(): void {
  }

  public flipCard() {
    this.isFlipped = !this.isFlipped;
  }

}
