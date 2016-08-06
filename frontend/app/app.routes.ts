import { provideRouter, RouterConfig } from '@angular/router';
import { MissionsListComponent } from './missions-list.component';
import { MissionDetailsComponent } from './mission-details.component';
import { MissionMapComponent } from './mission-map.component';

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
        path: 'missions/:slug',
        component: MissionDetailsComponent
    },
    {
        path: 'missions/:slug/map',
        component: MissionMapComponent
    },
];

export const appRouterProviders = [
    provideRouter(routes)
];
