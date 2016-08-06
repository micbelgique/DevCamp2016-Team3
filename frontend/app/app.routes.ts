import { provideRouter, RouterConfig } from '@angular/router';
import { MissionsListComponent } from './missions-list.component';
import { MissionDetailsComponent } from './mission-details.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/missions',
        pathMatch: 'full'
    },
    {
        path: 'missions',
        component: MissionsListComponent
    },
    {
        path: 'mission/:slug',
        component: MissionDetailsComponent
    },
];

export const appRouterProviders = [
    provideRouter(routes)
];
