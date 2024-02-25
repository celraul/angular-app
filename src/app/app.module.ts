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

@NgModule({
  declarations: [
    AppComponent
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