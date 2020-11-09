import { Component, OnInit, TemplateRef } from "@angular/core"
import { Router } from "@angular/router"
import * as AOS from "aos"
import { BsModalService } from "ngx-bootstrap/modal"
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service"
import { FormGroup, FormControl, Validators } from "@angular/forms"
import {
  AfterViewInit,
  ViewChild,
  HostListener,
  ElementRef,
} from "@angular/core"
import { Location } from "@angular/common"
import { trigger, state, animate, transition, style } from "@angular/animations"
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  name: any = ""
  there: any = "there"
  showname = false
  showcontent = false

  officeaddress1: any = "201 N First Street, Lot B,Burbank, CA, 91502"
  officeaddress2: any = ""
  officeaddress3: any = ""
  showofficeaddress1: any = "201 N First Street, Lot B,Burbank, CA, 91502"
  showofficeaddress2: any = "201 N First Street, Lot B,Burbank, CA, 91502"
  showofficeaddress3: any = "201 N First Street, Lot B,Burbank, CA, 91502"
  showimg2: any = "../../assets/images/Rev-map-1.jpg"
  imgsrc: any = "../../assets/images/Rev-map-2.jpg"
  showimg1: any = "../../assets/images/Rev-map-2.jpg "
  wasClicked = true
  /* serach content */
  modalRef: BsModalRef
  searchform: FormGroup
  value = ""
  config = {
    backdrop: true,
    ignoreBackdropClick: false,
  }
  /* serach content */
  constructor(private router: Router, private modalService: BsModalService) {}
  /* serach content */
  items: string[] = [
    "",
    "FORMS AND NOTICES",
    "WORKERS’ COMPENSATION",
    "LABOR RELATIONS ",
    "RESIDUALS",
    "AFFILIATES",
    "BLOGS",
  ]
  test() {
    console.log("hji")
  }
  openModal(template: TemplateRef<any>) {
    console.log("hi")
    this.modalRef = this.modalService.show(template, this.config)
  }
  /* serach content */
  ngOnInit() {
    AOS.init()
  }
  /*search content */
  onEnter(value: string) {
    this.value = value
    if (value == "contact us") {
      this.router.navigate(["/contact"])
      window.location.reload()
    } else if (value == "home") {
      this.router.navigate(["/"])
      window.location.reload()
    } else if (value == "about") {
      this.router.navigate(["/aboutus"])
      window.location.reload()
    } else if (value == "forms and notices") {
      this.router.navigate(["/pagenotfound"])
      window.location.reload()
    } else if (value == "workers compensation") {
      this.router.navigate(["/pagenotfound"])
      window.location.reload()
    } else if (value == "residuals") {
      this.router.navigate(["/pagenotfound"])
      window.location.reload()
    } else if (value == "affilates") {
      this.router.navigate(["/pagenotfound"])
      window.location.reload()
    } else if (value == "forms and notices") {
      this.router.navigate(["/pagenotfound"])
      window.location.reload()
    } else if (value == "blogs") {
      this.router.navigate(["/pagenotfound"])
      window.location.reload()
    } else if (value == "careers") {
      this.router.navigate(["/pagenotfound"])
      window.location.reload()
    } else if (value == "payroll services") {
      this.router.navigate(["/payroll"])
      window.location.reload()
    } else if (value == "software") {
      this.router.navigate(["/productionreferrals"])
      window.location.reload()
    } else if (value == "healthcare") {
      this.router.navigate(["/taxincentive"])
      window.location.reload()
    } else if (value == "tax incentives") {
      this.router.navigate(["/taxincentive"])
      window.location.reload()
    } else if (value == "staffing") {
      this.router.navigate(["/products"])
      window.location.reload()
    } else if (value == "support") {
      this.router.navigate(["/taxincentive"])
      window.location.reload()
    }
  }
  /*search content */
  //  menubar
  openNav() {
    document.getElementById("mySidenav").style.width = "287px"
    document.getElementById("backdrop").style.display = "block"
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0"
    document.body.style.backgroundColor = "white"
    document.getElementById("backdrop").style.display = "none"
  }
  noopacitybg() {
    document.body.style.backgroundColor = "white"
  }
  reloadPage() {
    window.location.reload()
  }

  // menubar

  displayname() {
    this.there = ""
    this.showname = true
  }

  btnClick = function () {
    this.router.navigate(["/pagenotfound"])
  }

  scroll(el) {
    setTimeout(function () {
      el.scrollIntoView({ behavior: "smooth" })
    }, 500)
  }
  open() {
    this.showcontent = true
  }
  officeaddress(para) {
    if (para == "office1") {
      this.officeaddress1 = this.showofficeaddress1
      this.officeaddress2 = " "
      this.officeaddress3 = " "
      this.imgsrc = this.showimg1
    } else if (para == "office2") {
      this.officeaddress1 = ""
      this.officeaddress2 = this.showofficeaddress2
      this.officeaddress3 = " "
      this.imgsrc = this.showimg2
    } else if (para == "office3") {
      this.officeaddress1 = ""
      this.officeaddress2 = ""
      this.officeaddress3 = this.showofficeaddress3
    }
  }
}
