import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ApisComponent } from './apis/apis.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FaqComponent } from './faq/faq.component';
import { GettingstartedComponent } from './gettingstarted/gettingstarted.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OverviewComponent } from './overview/overview.component';
import { TechnicaldocumentationComponent } from './technicaldocumentation/technicaldocumentation.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, ApisComponent, RegisterComponent, LoginComponent, FaqComponent, GettingstartedComponent, ContactComponent, HomepageComponent, OverviewComponent, TechnicaldocumentationComponent, SidenavbarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
