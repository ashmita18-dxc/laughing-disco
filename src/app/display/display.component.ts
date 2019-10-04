import { Component, OnInit } from '@angular/core';
import { Display } from './display.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  username:string;

  constructor() { }

  ngOnInit() {
  }

}
