import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { AppComponent } from "./app.component"
import { HomeComponent } from "./home/home.component"
import { PrivacyComponent } from "./privacy/privacy.component"
import { TermsComponent } from "./terms/terms.component"

export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "privacy", component: PrivacyComponent },
  { path: "terms", component: TermsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRouterModule {}
