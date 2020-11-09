import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NgModule } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http"
import { CommonModule } from "@angular/common"
import { BsDropdownModule } from "ngx-bootstrap"
import { AccordionModule } from "ngx-bootstrap"
import { AppRouterModule } from "./app.route"
import { AppComponent } from "./app.component"
import { ModalModule } from "ngx-bootstrap"
import { NgsRevealModule } from "ng-scrollreveal"
import { NgwWowModule } from "ngx-wow"
import { MyDatePickerModule } from "mydatepicker"
import { SweetAlert2Module } from "@toverux/ngx-sweetalert2"
import { BookademomailerService } from "./bookademo/bookademomailer.service"
import { NgImageSliderModule } from "ng-image-slider"

import { HomeComponent } from "./home/home.component"
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component"
import { AboutusComponent } from "./aboutus/aboutus.component"
import { DataService } from "./data.service"
import { HeaderComponent } from "./header/header.component"
import { FooterComponent } from "./footer/footer.component"
import { PrivacypolicyComponent } from "./privacypolicy/privacypolicy.component"
import { TermsofuseComponent } from "./termsofuse/termsofuse.component"
import { BookademoComponent } from "./bookademo/bookademo.component"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    AboutusComponent,
    HeaderComponent,
    FooterComponent,
    PrivacypolicyComponent,
    BookademoComponent,
    TermsofuseComponent,
  ],
  imports: [
    BrowserModule,
    NgImageSliderModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouterModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    NgsRevealModule.forRoot(),
    BrowserAnimationsModule,
    NgwWowModule.forRoot(),
    AccordionModule.forRoot(),
    SweetAlert2Module.forRoot(),
  ],
  providers: [DataService, BookademomailerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
