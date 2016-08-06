import { provideRouter, RouterConfig } from '@angular/router';
import { MissionsListComponent } from './missions-list.component';
import { MissionDetailsComponent } from './mission-details.component';
import { ExplorationsComponent } from './explorations.component';

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
        path: 'explorations/:slug',
        component: ExplorationsComponent
    },
];

export const appRouterProviders = [
    provideRouter(routes)
];
