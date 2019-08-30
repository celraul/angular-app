import { AuthService } from './security/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthGuard } from './security/auth.guard';
import { SharedModule } from './shared/shared.module';
import { LoggedInTemplateComponent } from './templates/loggedin-template/loggedin-template.component';
import { NotLoggedInTemplateComponent } from './templates/not-loggedin-template/not-loggedin-template.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { CustomErrorHandler } from './app.error-handler';
import { ToasterService } from './shared/services/toaster.service';
import { SnotifyService, ToastDefaults, SnotifyModule } from 'ng-snotify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StorageService } from './shared/services/storage.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavComponent } from './shared/components/nav/nav.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
// import * as moment from 'moment';
// import 'moment/locale/pt-br';

@NgModule({
  declarations: [
    AppComponent,
    LoggedInTemplateComponent,
    NotLoggedInTemplateComponent,
    // components
    NavComponent,
    SidebarComponent,
    FooterComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SnotifyModule,
    SharedModule.forRoot()
  ],
  providers: [
    { provide: ErrorHandler, useClass: CustomErrorHandler },
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    AuthGuard,
    AuthService,
    SnotifyService,
    ToasterService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
