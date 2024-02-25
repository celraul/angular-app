import { Routes } from '@angular/router';
import { NotLoggedInTemplateComponent } from './templates/not-logged-in-template/not-loggedin-template.component';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';

export const AppRoutes: Routes = [
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
