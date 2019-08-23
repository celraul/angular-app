import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { SharedModule } from "src/app/shared/shared.module";
import { LoginRoutingModule } from './login.routing.module';


@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        LoginRoutingModule,
        SharedModule
    ],
    entryComponents: [],
    providers: []
})
export class LoginModule { }
