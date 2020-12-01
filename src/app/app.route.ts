import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { AppComponent } from "./app.component"
import { HomeComponent } from "./home/home.component"

export const appRoutes: Routes = [{ path: "", component: HomeComponent }]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRouterModule {}
