import { Routes } from '@angular/router';
import { NotLoggedInTemplateComponent } from './templates/not-logged-in-template/not-loggedin-template.component';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';
import { LoggedInTemplateComponent } from './templates/loggedin-template/loggedin-template.component';

export const AppRoutes: Routes = [
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
    },
    {
        path: 'login',
        component: NotLoggedInTemplateComponent,
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
