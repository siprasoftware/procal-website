import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  king: any;

  constructor() { }

  ngOnInit() {
  }

  btnClick= function () {
    this.router.navigate(['']);
  };
}
