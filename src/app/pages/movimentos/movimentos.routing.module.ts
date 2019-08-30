import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovimentosComponent } from './movimentos.component';

const routes: Routes = [
    {
        path: '',
        component: MovimentosComponent
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
    declarations: []
})
export class MovimentosRoutingModule { }