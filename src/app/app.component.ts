import { Component } from '@angular/core';
import { TableTopComponent } from './components/table-top/table-top.component'
import { Tableau } from './types/tableau'
import { Card, Suits, Ranks } from './types/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'solitaire';
  
  constructor(){
  }
}
