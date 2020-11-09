import { Component, OnInit } from "@angular/core"
import {
  FormGroup,
  FormControl,
  FormBuilder,
  FormGroupName,
} from "@angular/forms"
import { BookademomailerService } from "./bookademomailer.service"
@Component({
  selector: "app-bookademo",
  templateUrl: "./bookademo.component.html",
  styleUrls: ["./bookademo.component.css"],
})
export class BookademoComponent implements OnInit {
  bookADemoForm: FormGroup
  emaildata: any
  ackSent: any = "none"
  succesMessage: any = " "
  messageTrue: boolean
  ackSentbol: any = false
  responeApi: string
  constructor(
    private fb: FormBuilder,
    private _emailData: BookademomailerService
  ) {}

  ngOnInit() {
    this.bookADemoForm = this.fb.group({
      name: "",
      phone: "",
      email: "",
      prodCompany: "",
      typeOfProd: "",
      comments: "",
    })
  }
  openDemo() {
    document.getElementById("bkdemobtn").style.display = "none"
    document.getElementById("bookademotemplate").style.width = this.newMethod()
    document.getElementById("backdrop").style.display = "block"
    var x = document.getElementsByClassName("top_header")[0]
    // x.id = "headermenu"
    // document.getElementById('headermenu').style.zIndex = "9";
  }
  closeDemo() {
    document.getElementById("bookademotemplate").style.width = "0"
    document.body.style.backgroundColor = "white"
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("bkdemobtn").style.display = "block"
  }
  private newMethod(): string {
    return "400px"
  }
  onSubmit() {
    if (
      this.bookADemoForm.value.name === null ||
      this.bookADemoForm.value.email === null
    ) {
      alert("* Marked fields are mandatory")
    } else {
      /* // This is for the java backend
      this._emailData.emailService(this.bookADemoForm.value).subscribe(data => {
        this.emaildata = data;
        console.log(this.emaildata);
        this.succesMessage = "Email Sent ";
        this.messageTrue = true;
      });
      */

      // This is for the current revolution backend
      this.submitContact()
      this.succesMessage = "Email Sent "
      this.messageTrue = true
      this.bookADemoForm.reset()

      this.ackSent = "block"
      this.ackSentbol = true
      setTimeout(function () {
        this.ackSent = "none"
        this.ackSentbol = false
        document.getElementById("acksent").style.display = "none"
      }, 8000)
    }
  }

  submitContact() {
    const form = [
      {
        name: "name",
        value: this.bookADemoForm.value.name,
      },
      {
        name: "phone",
        value: this.bookADemoForm.value.phone,
      },
      {
        name: "email",
        value: this.bookADemoForm.value.email,
      },
      {
        name: "comments",
        value:
          "Company: " +
          this.bookADemoForm.value.prodCompany +
          " \n" +
          "Type: " +
          this.bookADemoForm.value.typeOfProd +
          " \n" +
          "Notes: " +
          this.bookADemoForm.value.comments +
          " \n",
      },
    ]
    // var formdata = {
    //   contactData: form,
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

    ///Use this service call to hit the Backend API
    this._emailData.emailService(this.bookADemoForm.value).subscribe((data) => {
      this.responeApi = data
    })
  }
}
