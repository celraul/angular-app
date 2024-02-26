import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AuthService } from "./security/auth.service";
import { StorageService } from "./services/storage.service";
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { NavComponent } from "./shared/components/nav/nav.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { NotLoggedInTemplateComponent } from "./templates/not-logged-in-template/not-loggedin-template.component";
import { LoggedInTemplateComponent } from "./templates/loggedin-template/loggedin-template.component";

@NgModule({
  declarations: [
    AppComponent,
    NotLoggedInTemplateComponent,
    LoggedInTemplateComponent,
    NavComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule.forRoot()
  ],
  providers: [
    AuthService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}