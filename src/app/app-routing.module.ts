import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ApisComponent } from "./apis/apis.component";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { GettingstartedComponent } from "./gettingstarted/gettingstarted.component";
import { FaqComponent } from "./faq/faq.component";
import { ContactComponent } from "./contact/contact.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { OverviewComponent } from "./overview/overview.component";

const routes: Routes = [
  { path: "apis", component: ApisComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "gettingstarted", component: GettingstartedComponent },
  { path: "faq", component: FaqComponent },
  { path: "contact", component: ContactComponent },
  { path: "home", component: HomepageComponent },
  { path: "overview", component: OverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
