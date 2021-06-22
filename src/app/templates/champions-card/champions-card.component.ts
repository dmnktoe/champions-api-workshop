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

  constructor() { }

  ngOnInit(): void {
  }

}
