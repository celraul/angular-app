import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../security/auth.interceptor';
import { NotFoundPageComponent } from '../pages/not-found-page/not-found-page.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    exports: [
        CommonModule,
        RouterModule,
        NavComponent,
        SidebarComponent,
        FooterComponent,
        NotFoundPageComponent,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
        NavComponent,
        SidebarComponent,
        FooterComponent,
        NotFoundPageComponent
    ],
    providers: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
            ]
        }
    }
}