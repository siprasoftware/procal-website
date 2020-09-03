import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Router, NavigationEnd } from "@angular/router";
import * as $ from "jquery";
import * as AOS from "aos";
import {
  FormsModule,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
@Component({
  selector: "app-aboutus",
  templateUrl: "./aboutus.component.html",
  styleUrls: ["./aboutus.component.css"]
})
export class AboutusComponent implements OnInit {
  private dataService: DataService;
  demoForm: FormGroup;
  demoFromdata: any;
  config = {
    backdrop: true,
    ignoreBackdropClick: false
  };
  constructor(private router: Router, public dService: DataService) {
    this.dataService = dService;
  }

  ngOnInit() {
    this.demoForm = new FormGroup({
      message: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "287px";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("backdrop").style.display = "none";
  }
  navigateTo(link) {
    const windowpos = $(window).scrollTop();
    if (windowpos >= $("#bannerimg").innerHeight()) {
      this.dataService.setScrolled(true);
      this.router.navigate([link + ""]);
    } else {
      this.dataService.setScrolled(false);
      this.router.navigate([link + ""]);
    }
  }
  noopacitybg(routeName) {
    document.body.style.backgroundColor = "white";
    this.navigateTo(routeName);
  }
  openDemo() {
    document.getElementById("bookademotemplate").style.width = this.newMethod();
    document.getElementById("backdrop").style.display = "block";
  }
  closeDemo() {
    document.getElementById("bookademotemplate").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("backdrop").style.display = "none";
  }
  private newMethod(): string {
    return "287px";
  }
  backhomenav() {
    this.router.navigateByUrl("");
  }
  onSubmit(demoForm) {
    console.log(this.demoForm);
  }
}
