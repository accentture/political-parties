import { RankingCandidatesComponent } from './components/ranking-candidates/ranking-candidates.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontComponent } from './components/front/front.component';
/* import { ListCandidatesComponent } from './components/list-candidates/list-candidates.component' */
import { PeruDepartmentsComponent } from './components/peru-departments-congressman/peru-departments-congressman.component';
import { ListCandidatesComponent } from '../../shared/components/list-candidates/list-candidates.component';
import { ContactComponent } from '../home/components/contact/contact.component';
import { FrontRankingComponent } from './components/front-ranking/front-ranking.component';
import { ZonesWithVotesComponent } from './components/zones-with-votes/zones-with-votes.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { RankingStatisticsComponent } from './components/ranking-statistics/ranking-statistics.component';

const appRoutes: Routes = [
    { path: '', component: FrontComponent },
    { path: 'front', component: FrontComponent },
    { path: 'frontRanking', component: FrontRankingComponent },
    { path: 'peruDepartments', component: PeruDepartmentsComponent },
    { path: 'listCandidates', component: ListCandidatesComponent },
    { path: 'listCandidates/:whatCandidates', component: ListCandidatesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'rankingCandidates', component: RankingCandidatesComponent },
    { path: 'rankingCandidates/:whatZone', component: RankingCandidatesComponent },
    { path: 'zonesWithVotes', component: ZonesWithVotesComponent },
    { path: 'overlay', component: OverlayComponent },
    { path: 'rankingStatistics', component: RankingStatisticsComponent },
    { path: 'rankingStatistics/:whatRanking', component: RankingStatisticsComponent },
    { path: '**', component: FrontComponent },
];

export const AppRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });