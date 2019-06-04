import { Component, OnInit, Input, Output, OnChanges, SimpleChange } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {
  
  @Input() Name:string="";
  
  strNames:string[]=["angular","react","vu"];
  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    let strFilterValue=changes.Name.currentValue;
    let list=this.strNames.filter(x=>x.includes(strFilterValue));
    console.log(list);
  }
}