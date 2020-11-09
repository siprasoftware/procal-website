import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  TemplateRef,
  ViewChild,
  HostListener,
  ElementRef,
  NgZone,
  AfterViewChecked,
} from "@angular/core"
import * as AOS from "aos"
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  useAnimation,
} from "@angular/animations"
import { Router } from "@angular/router"
import { BsModalService } from "ngx-bootstrap/modal"
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service"
import {
  FormsModule,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms"
import { Location } from "@angular/common"
import { Keywords } from "../keywords"
import { DataService } from "../data.service"
import { BookademomailerService } from "../bookademo/bookademomailer.service"
import * as $ from "jquery"
import { Duration } from "ngx-bootstrap/chronos/duration/constructor"
import { NgwWowService } from "ngx-wow"
import { Subscription } from "rxjs/Subscription"

declare const document: any

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild("videoElement") videoElement: ElementRef
  private wowSubscription: Subscription
  mobile: any

  playFullVideo = {
    isFullVideo: false,
  }

  pause: any
  listentitle = true
  succesMessage: any = " "
  messageTrue: boolean
  intervalID: any
  pagenavnumber: any
  videohide = true
  hideclosebtn: false
  key: any = Keywords
  ackSent: any = "none"
  modalRef: BsModalRef
  searchform: FormGroup
  marginTop = 0
  boxShadow: any
  responeApi: string
  emailForm: FormGroup
  value = ""
  config = {
    backdrop: true,
    ignoreBackdropClick: false,
  }
  SearchRoute: any
  searchNoMatch: any = "none"
  afterclickmarginleft: number
  height12: any
  demoForm: FormGroup
  demoFromdata: any
  bufferplaceholderheight: any
  routename: any
  backgroundpositionbg: string
  private dataService: DataService
  innerWidth: any
  bookADemoForm: FormGroup
  items: string[] = [
    "",
    "FORMS AND NOTICES",
    "WORKERS’ COMPENSATION",
    "LABOR RELATIONS ",
    "RESIDUALS",
    "AFFILIATES",
    "BLOGS",
  ]
  width = 12.6
  marginRight = 0
  placeholderHeight = 800
  defaultbrandingmargin: any = 40
  defaultbrandingpadding: any = 18
  settransition1: any = false
  settransition2: any = false
  settransition3: any = false
  settransition4: any = false
  settransition5: any = false
  settransition6: any = false
  mouseTrigger: any = true
  hovertraForm: any
  hovertransition: any
  defaultdisplay: any
  defaultoverlaystatus: any = "none"
  displaystatus: any = "block"
  Fsett = 25
  firstPillerMargin = 15
  marginLeft = 40
  leftPercent = 0
  placeholderOpacity = 0
  placeholderFirstMarginLeft = 0
  placeholderSecondMarginLeft = 0
  placeholderthirdMarginLeft = 0
  placeholderfourthMarginLeft = 0
  placeholderfifthMarginLeft = 0
  placeholdersixthMarginLeft = 0
  placeholdersixthMarginTop = 0
  placeholderWidth = 12.6
  removeZoomAnimation = true
  king = false
  gray = false
  payrollHalfImg = null
  defaultheight: any = 0
  grayToOne = false
  grayToTwo = false
  grayToThree = false
  grayToFour = false
  grayToFive = false
  grayToSix = false
  grayToseven = false
  backgroundpostion = false
  backgroundpositionsoftware = false
  pillerHeight: any
  resizeSubscription: any
  resizeService: any
  Scroller: any
  closeVideo = false

  @HostListener("window:resize")
  onResize() {
    if (window.innerWidth <= 995) {
      this.setMobileVersion()
    } else {
      this.mobile = false
    }
  }

  constructor(
    private router: Router,
    private modalService: BsModalService,
    private location: Location,
    private ngZone: NgZone,
    private dService: DataService,
    private fb: FormBuilder,
    // private _emailData: MailerService,
    private wowService: NgwWowService
  ) {
    this.dataService = dService
    this.dataService.setScrolled(false)
    window.onresize = (e) => {
      ngZone.run(() => {
        this.bufferplaceholderheight = window.innerHeight
        this.setplaceholderheight(this.bufferplaceholderheight)
      })
    }
  }

  ngOnDestroy() {
    document.removeEventListener("fullscreenchange", this.exitVideoHandler)
    document.removeEventListener("mozfullscreenchange", this.exitVideoHandler)
    document.removeEventListener(
      "webkitfullscreenchange",
      this.exitVideoHandler
    )
    document.removeEventListener("msfullscreenchange", this.exitVideoHandler)
  }

  ngOnInit() {
    this.emailForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      comments: new FormControl(null, [Validators.required]),
    })
    AOS.init()

    this.height12 = window.innerHeight
    this.setplaceholderheight(this.height12)
    if (window.innerWidth <= 880) {
      this.setMobileVersion()
    } else {
      this.mobile = false
    }
    var scroller = $("#scroller div.innerScrollArea")
    var scrollerContent = scroller.children("ul")
    scrollerContent.children().clone().appendTo(scrollerContent)
    var curX = 0
    scrollerContent.children().each(function () {
      var $this = $(this)
      $this.css("left", curX)
      curX += $this.outerWidth(true)
    })
    var fullW = curX / 2
    var viewportW = scroller.width()

    // Scrolling speed management
    var controller = { curSpeed: 0, fullSpeed: 1 }
    var $controller = $(controller)
    var tweenToNewSpeed = function (newSpeed, duration) {
      if (duration === undefined) duration = 600
      $controller.stop(true).animate({ curSpeed: newSpeed }, duration)
    }

    // // Pause on hover
    // scroller.hover(function(){
    //     tweenToNewSpeed(0);
    // }, function(){
    //     tweenToNewSpeed(controller.fullSpeed);
    // });

    // Scrolling management; start the automatical scrolling
    var doScroll = function () {
      var curX = scroller.scrollLeft()
      var newX = curX + controller.curSpeed
      if (newX > fullW * 2 - viewportW) newX -= fullW
      scroller.scrollLeft(newX)
    }
    setInterval(doScroll, 20)
    tweenToNewSpeed(controller.fullSpeed, 600)

    $(window).scroll(function () {
      var scroll = $(window).scrollTop()
      if (scroll >= 1100) {
        $.each(document.querySelectorAll(".svgpath"), function (
          index,
          ele: any
        ) {
          if (ele) {
            $(this).addClass("svganimate")
          }
        })
      } else {
        $("#svgpath").removeClass("svganimate")
      }
    })

    document.addEventListener("fullscreenchange", this.exitVideoHandler)
    document.addEventListener("mozfullscreenchange", this.exitVideoHandler)
    document.addEventListener("webkitfullscreenchange", this.exitVideoHandler)
    document.addEventListener("msfullscreenchange", this.exitVideoHandler)
  }

  setMobileVersion() {
    this.mobile = true
    this.pillerHeight = 350
    this.defaultbrandingmargin = 15
  }

  openModal(template: TemplateRef<any>) {
    let vid = document.getElementById("myVideo")
    vid.pause()
    this.modalRef = this.modalService.show(template, this.config)
    // this.videoElement.nativeElement.pause()
  }

  private closeFullvideo() {
    this.modalRef.hide()
    let vid = document.getElementById("myVideo")
    vid.play()
    vid.muted = true
    this.listentitle = true
  }

  openModalVideo(video: TemplateRef<any>) {
    this.videoElement.nativeElement = this.hideVideo
    this.videoElement.nativeElement.play()
  }
  onHidden(): void {}
  onShown(): void {}
  isOpenChange(): void {}

  setAllToVaild() {
    this.grayToOne = true
    this.grayToTwo = true
    this.grayToThree = true
    this.grayToFour = true
    this.grayToFive = true
    this.grayToSix = true
    this.grayToseven = true
  }
  onMouseOut(item) {
    this.settransition1 = false
    this.settransition2 = false
    this.settransition3 = false
    this.settransition4 = false
    this.settransition5 = false
    this.settransition6 = false
    this.grayToOne = false
    this.grayToTwo = false
    this.grayToThree = false
    this.grayToFour = false
    this.grayToFive = false
    this.grayToSix = false
    this.grayToseven = false
  }
  onMouseOver(item) {
    if (item && this.mouseTrigger) {
      this.setAllToVaild()
      switch (item) {
        case 1:
          this.grayToOne = false
          this.settransition1 = true
          break
        case 2:
          this.grayToTwo = false
          this.settransition2 = true
          break
        case 3:
          this.grayToThree = false
          this.settransition3 = true

          break
        case 4:
          this.grayToFour = false
          this.settransition4 = true
          break
        case 5:
          this.grayToFive = false
          this.settransition5 = true
          break
        case 6:
          this.grayToSix = false
          this.settransition6 = true
          break
      }
    }
  }
  imgTransition() {
    this.hovertraForm = "scale(1.05)"
    this.hovertransition = "transform 0.8s, -webkit-transform 0.8s"
  }
  imgTransitionafter() {
    this.hovertraForm = "scale(1)"
    this.hovertransition = "transform 0.8s, -webkit-transform 0.8s"
  }
  onSubmit() {
    if (
      this.emailForm.value.name === null ||
      this.emailForm.value.email === null
    ) {
      alert("* Marked fields are mandatory")
    } else {
      /* // This is for the java backend
      this._emailData.emailService(this.emailForm.value).subscribe(data => {
        this.emaildata = data;
        this.succesMessage = "Email Sent ";
        this.messageTrue = true;
      });
      */

      // This is for the current revolution backend
      this.submitContact()
      this.succesMessage = "Email Sent "
      this.messageTrue = true
      this.emailForm.reset()

      this.ackSent = "block"
      setTimeout(function () {
        this.ackSent = "none"
        document.getElementById("acksent").style.display = "none"
      }, 8000)
    }
  }

  listaudio() {
    this.listentitle = !this.listentitle
  }
  onMenuClick(imgName, routeName) {
    this.firstPillerMargin = 0
    this.marginLeft = -1.99999
    this.marginRight = -2
    this.settransition1 = false
    this.settransition2 = false
    this.settransition3 = false
    this.settransition4 = false
    this.settransition5 = false
    this.settransition6 = false
    this.grayToOne = false
    this.grayToTwo = false
    this.grayToThree = false
    this.grayToFour = false
    this.grayToFive = false
    this.grayToSix = false
    this.grayToseven = false
    this.mouseTrigger = false
    this.width = 16.5666666666666666
    this.placeholderOpacity = 1
    this.removeZoomAnimation = true
    this.placeholderFirstMarginLeft = 0
    this.placeholderSecondMarginLeft = -98
    this.placeholderthirdMarginLeft = -197
    this.placeholderfourthMarginLeft = -295
    this.placeholderfifthMarginLeft = -394
    this.placeholdersixthMarginLeft = -493
    this.placeholdersixthMarginTop = 0
    this.placeholderWidth = window.screen.width
    this.defaultdisplay = "none"
    if (routeName === "staffing") {
      this.backgroundpostion = true
    } else {
      this.backgroundpostion = false
    }
    if (routeName === "software") {
      this.backgroundpositionsoftware = true
    } else {
      this.backgroundpositionsoftware = false
    }
    setTimeout(() => {
      const leftInterval = setInterval(() => {
        this.leftPercent += 1
        console.log(imgName)
        this.payrollHalfImg = `url('/assets/website/images/bannerimages/${imgName}.jpg')`
        if (this.leftPercent >= 100) {
          this.king = true
          clearInterval(leftInterval)
          setTimeout(() => {
            this.router.navigate([`/${routeName}`])
          }, 700)
        }
      }, 8)
    }, 200)
  }
  pageloder() {
    this.router.navigate([`/loader`])
  }
  setplaceholderheight(params) {
    this.bufferplaceholderheight = (100 / 100) * params
    this.placeholderHeight = this.bufferplaceholderheight
  }
  // tslint:disable-next-line:member-ordering
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
  // tslint:disable-next-line:one-line
  openNav() {
    document.getElementById("mySidenav").style.width = "287px"
    document.getElementById("backdrop_home").style.display = "block"
  }

  // tslint:disable-next-line:one-line
  closeNav() {
    document.getElementById("mySidenav").style.width = "0"
    document.body.style.backgroundColor = "white"
    document.getElementById("backdrop_home").style.display = "none"

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

  // onSubmit(demoForm) {
  //   console.log(this.demoForm);
  // }
  openDemo() {
    document.getElementById("bookademotemplate").style.width = this.newMethod()
    document.getElementById("backdrop").style.display = "block"
  }
  closeDemo() {
    document.getElementById("bookademotemplate").style.width = "0"
    document.body.style.backgroundColor = "white"
    document.getElementById("backdrop").style.display = "none"
  }
  private newMethod(): string {
    return "400px"
  }
  submitContact() {
    // var formdata = {
    //   contactData: $("#emailForm").serializeArray(),
    //   token: $("#token").serializeArray(),
    // };
    // $.ajax({
    //   url: "/oasis/index/addContact",
    //   type: "POST",
    //   dataType: "JSON",
    //   data: { "data": formdata },
    //   error: function (result) { },
    //   success: function (result) {
    //     // var options = result.message;
    //     // alert(options);
    //   }
    // });
    /// Use this service call to hit the BACKEND API
    // this._emailData.MailerService(this.emailForm.value).subscribe(data => {
    //   this.responeApi = data;
    // });
  }

  playVid() {
    this.videoElement.nativeElement.currentTime = 0
    this.videoElement.nativeElement.controlsList = "nodownload"
    this.playFullVideo = {
      isFullVideo: true,
    }
  }
  hideVideo() {
    this.playFullVideo.isFullVideo = false
  }
  playentirevideo() {
    this.modalRef.hide()
    // this.videoElement.nativeElement.play()
  }

  exitVideoHandler = (event) => {
    if (!document.fullscreenElement) {
      this.videoElement.nativeElement.muted = true
      this.videoElement.nativeElement.style.opacity = "0.5"
    }
  }
}
