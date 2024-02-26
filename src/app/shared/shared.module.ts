import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { AuthInterceptor } from "../security/auth.interceptor";
import { RouterModule, RouterOutlet } from "@angular/router";

@NgModule({
    exports: [
        RouterOutlet,
        RouterModule,
        FontAwesomeModule,
    ],
    imports: [
        RouterOutlet,
        RouterModule,
        FontAwesomeModule,
    ],
    declarations: [
    ],
    providers: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [
                //{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
            ]
        }
    }
}