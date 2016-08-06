import { provideRouter, RouterConfig } from '@angular/router';
import { MissionsListComponent } from './missions-list.component';
import { MissionDetailsComponent } from './mission-details.component';
import { ExplorationComponent } from './exploration.component';

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
        component: ExplorationComponent
    },
];

export const appRouterProviders = [
    provideRouter(routes)
];
