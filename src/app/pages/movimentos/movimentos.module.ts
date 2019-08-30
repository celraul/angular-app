import { NgModule } from '@angular/core';
import { MovimentosComponent } from './movimentos.component';
import { MovimentosRoutingModule } from './movimentos.routing.module';
import { MovimentoService } from 'src/app/services/movimento.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MovimentosComponent
  ],
  imports: [
    MovimentosRoutingModule,
    SharedModule
  ],
  providers: [
    MovimentoService
  ]
})
export class MovimentosModule { }
