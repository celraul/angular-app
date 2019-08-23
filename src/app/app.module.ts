import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthGuard } from './security/auth-guard';
import { SharedModule } from './shared/shared.module';
import { LoggedInTemplateComponent } from './templates/loggedin-template/loggedin-template.component';
import { NotLoggedInTemplateComponent } from './templates/not-loggedin-template/not-loggedin-template.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { CustomErrorHandler } from './app.error-handler';
import { ToasterService } from './shared/serivices/toaster.service';
import { SnotifyService, ToastDefaults, SnotifyModule } from 'ng-snotify';

@NgModule({
  declarations: [
    AppComponent,
    LoggedInTemplateComponent,
    NotLoggedInTemplateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SnotifyModule,
    SharedModule.forRoot(),
  ],
  providers: [
    { provide: ErrorHandler, useClass: CustomErrorHandler },
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    AuthGuard,
    SnotifyService,
    ToasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
