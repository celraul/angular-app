import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        CollapseModule.forRoot()
    ],
    exports: [
        BsDropdownModule,
        TooltipModule,
        ModalModule,
        CollapseModule
    ]
})
export class BoostrapAppModule { }
