import { Component, OnInit, HostListener, TemplateRef } from "@angular/core"
import { Router } from "@angular/router"
import { DataService } from "../data.service"
import { BsModalService } from "ngx-bootstrap/modal"
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service"
import { Keywords } from "../keywords"
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  stickymenuopacity = 0
  bg: any
  stickyMargin: any
  scrollboolean = false
  key: any = Keywords
  config = {
    backdrop: true,
    ignoreBackdropClick: false,
  }
  SearchRoute: any
  modalRef: BsModalRef
  value = ""
  searchNoMatch: any = "none"
  private dataService: DataService
  heightAfterScroll: string
  constructor(
    private router: Router,
    private dService: DataService,
    private modalService: BsModalService
  ) {
    this.dataService = dService
  }

  ngOnInit() {
    const scrollPosition = window.pageYOffset
    this.stickymenuopacity = 1
  }
  @HostListener("window:scroll", ["$event"])
  checkScroll() {}
  backhomenav() {
    this.router.navigateByUrl("")
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config)
  }
  onEnter(value: any) {
    this.searchNoMatch = "none"
    this.value = value.toLowerCase() || null
    for (let i = 0; i < this.key.length; i++) {
      if (this.value === this.key[i].keyword.toLowerCase()) {
        this.SearchRoute = this.key[i].pagenavid
      }
    }

    if (this.SearchRoute) {
      this.router.navigate([this.SearchRoute])
      this.modalRef.hide()
    } else {
      this.searchNoMatch = "block"
    }
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "287px"
    document.getElementById("backdrop").style.display = "block"
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0"
    document.body.style.backgroundColor = "white"
    document.getElementById("backdrop").style.display = "none"

    document.getElementById("bookademotemplate").style.width = "0"
    document.body.style.backgroundColor = "white"
    document.getElementById("backdrop").style.display = "none"
  }
  noopacitybg(routeName) {
    document.body.style.backgroundColor = "white"
    this.navigateTo(routeName)
  }

  navigateTo(link) {
    const windowpos = $(window).scrollTop()
    if (windowpos >= $("#bannerimg").innerHeight()) {
      this.dataService.setScrolled(true)
      this.router.navigate([link + ""])
    } else {
      this.dataService.setScrolled(false)
      this.router.navigate([link + ""])
    }
  }
  gotocovid() {
    this.router.navigate(["covid19response"])
  }
}
