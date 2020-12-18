import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from "@angular/core"
import { BsModalService } from "ngx-bootstrap/modal"
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service"
import { FormsModule, FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"
import { BookademomailerService } from "../bookademo/bookademomailer.service"
import * as $ from 'jquery';
declare const document: any;
declare var jQuery:any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  @ViewChild("videoElement") videoElement: ElementRef
  mobile: any
  playFullVideo = {
    isFullVideo: false,
  }
  pause: any
  listentitle = true
  succesMessage: any = " "
  messageTrue: boolean
  ackSent: any = "none"
  modalRef: BsModalRef
  responeApi: string
  emailForm: FormGroup
  config = {
    backdrop: true,
    ignoreBackdropClick: false,
  }
  constructor(
    private modalService: BsModalService,
    private _emailData: BookademomailerService,
  ) {
  }

  ngOnInit() {
    this.emailForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      comments: new FormControl(null, [Validators.required]),
    })
  }

  //Footer From
  onSubmit() {
    if (
      this.emailForm.value.name === null || this.emailForm.value.email === null
    ) {
      alert("* Marked fields are mandatory")
    } else {
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

  // Video Popup
  openModal(template: TemplateRef<any>) {
    let vid = document.getElementById("myVideo")
    vid.pause()
    this.modalRef = this.modalService.show(template, this.config)
  }
  private closeFullvideo() {
    this.modalRef.hide()
    let vid = document.getElementById("myVideo")
    vid.play()
    vid.muted = true
    this.listentitle = true
  }
  listaudio() {
    this.listentitle = !this.listentitle
  }
  submitContact() {
    this._emailData.emailService(this.emailForm.value).subscribe(data => {
      this.responeApi = data;
    });
  }
  ngAfterViewInit(){
    $('.counter-count').each(function () {
      $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
            //chnage count up speed here
              duration: 4000,
              easing: 'swing',
              step: function (now) {
                return $(this).text(now.toLocaleString());
                  // $(this).text(Math.ceil(now));
              }
          });
      });
  }
  
}
