import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { LoggedInTemplateComponent } from './templates/loggedin-template/loggedin-template.component';
import { AuthGuard } from './security/auth.guard';
import { NotLoggedInTemplateComponent } from './templates/not-loggedin-template/not-loggedin-template.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

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
        // canLoad: [AuthGuard],
        // canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: NotLoggedInTemplateComponent,
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'register',
        component: NotLoggedInTemplateComponent,
        loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
    },
    {
        path: 'orders',
        component: LoggedInTemplateComponent,
        loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule)
    },
    {
        path: '**',
        component: NotFoundPageComponent
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
        declarations: [],
        exports: [],
        providers: []
    })
export class AppRoutingModule {

}