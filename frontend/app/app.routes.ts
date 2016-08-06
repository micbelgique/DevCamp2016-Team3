import { provideRouter, RouterConfig } from '@angular/router';
import { MissionsListComponent } from './missions-list.component';
import { MissionDetailsComponent } from './mission-details.component';
import { ExplorationComponent } from './exploration.component';
import { ExplorationCheckpointComponent } from './exploration-checkpoint.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/missions',
        pathMatch: 'full'
    },
    {
        path: 'explorations/:slug',
        component: ExplorationComponent
    },
    {
        path: 'explorations/:slugex/checkpoints/:slugcp',
        component: ExplorationCheckpointComponent
    },
    {
        path: 'missions',
        component: MissionsListComponent
    },
    {
        path: 'missions/:slug',
        component: MissionDetailsComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
