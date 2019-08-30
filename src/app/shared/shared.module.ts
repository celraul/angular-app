import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../security/auth.interceptor';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TitleDirective } from './directives/title.directive';
import { BoostrapAppModule } from './boostrap/boostrap.module';

@NgModule({
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        BoostrapAppModule,

        // directives
        TitleDirective
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        BoostrapAppModule
    ],
    declarations: [
        TitleDirective
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