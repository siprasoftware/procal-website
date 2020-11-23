import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { AppComponent } from "./app.component"
import { HomeComponent } from "./home/home.component"
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component"
import { AboutusComponent } from "./aboutus/aboutus.component"
import { TermsofuseComponent } from "./termsofuse/termsofuse.component"
import { PrivacypolicyComponent } from "./privacypolicy/privacypolicy.component"

export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "pagenotfound", component: PagenotfoundComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "termsofuse", component: TermsofuseComponent },
  { path: "privacypolicy", component: PrivacypolicyComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRouterModule {}
