import { Routes } from '@angular/router';
import { LoginComponent, 
        P404Component, 
        P500Component, 
        HomeComponent
} from 'app/core/components';

export const routes:Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        data: { state: 'home' } 
    },
    {path: '**', redirectTo: 'login',}
]