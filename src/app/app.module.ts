import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NgModule } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http"
import { CommonModule } from "@angular/common"
import { AppRouterModule } from "./app.route"
import { AppComponent } from "./app.component"
import { ModalModule } from "ngx-bootstrap"
import { NgsRevealModule } from "ng-scrollreveal"
import { NgwWowModule } from "ngx-wow"
import { SweetAlert2Module } from "@toverux/ngx-sweetalert2"
import { BookademomailerService } from "./bookademo/bookademomailer.service"

import { HomeComponent } from "./home/home.component"
import { PrivacyComponent } from "./privacy/privacy.component"
import { TermsComponent } from "./terms/terms.component"
import { DataService } from "./data.service"
import { HeaderComponent } from "./header/header.component"
import { FooterComponent } from "./footer/footer.component"
import { BookademoComponent } from "./bookademo/bookademo.component"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TermsComponent,
    PrivacyComponent,
    HeaderComponent,
    FooterComponent,
    BookademoComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouterModule,
    HttpModule,
    ModalModule.forRoot(),
    NgsRevealModule.forRoot(),
    BrowserAnimationsModule,
    NgwWowModule.forRoot(),
    SweetAlert2Module.forRoot(),
  ],
  providers: [DataService, BookademomailerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
