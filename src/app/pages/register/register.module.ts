import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register.routing.module';
import { EmailInUseValidator } from 'src/app/shared/validators/email-in-use.validator';

@NgModule({
    declarations: [
        RegisterComponent,
    ],
    imports: [
        RegisterRoutingModule,
        SharedModule
    ],
    entryComponents: [],
    providers: [EmailInUseValidator]
})
export class RegisterModule { }
