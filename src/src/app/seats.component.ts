import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  value:any='';
  msg:string="";
  constructor() { }

  ngOnInit(): void {
  }
  change(){
    this.value*=100;
    console.log(this.value)
    this.msg=`->The price of the Selected seats id is: Rupees ${this.value}<-`;
    return this.value;
 }
}
