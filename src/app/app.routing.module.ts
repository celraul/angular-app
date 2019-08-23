import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { LoggedInTemplateComponent } from './templates/loggedin-template/loggedin-template.component';
import { AuthGuard } from './security/auth-guard';

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: LoggedInTemplateComponent,
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
        canActivate: [AuthGuard]
    }
];

@NgModule(
    {
        imports: [
            RouterModule.forRoot(APP_ROUTES,
                {
                    preloadingStrategy: PreloadAllModules,
                    useHash: true
                })
        ],
        declarations:[],
        exports:[],
        providers:[]
    })
export class AppRoutingModule{

}