import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-good-inwards',
  templateUrl: './good-inwards.component.html',
  styleUrls: ['./good-inwards.component.css']
})
export class GoodInwardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  send(){
    console.log("done")
  }

}
