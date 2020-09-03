import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'q';

@Component({
  selector: 'app-pageloader',
  templateUrl: './pageloader.component.html',
  styleUrls: ['./pageloader.component.css']
})
export class PageloaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {


}



}
