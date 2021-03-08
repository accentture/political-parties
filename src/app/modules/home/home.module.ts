
import { NgModule } from '@angular/core';

//for two way data binding
import { FormsModule } from '@angular/forms'

//for ajax petition
import { HttpClientModule } from '@angular/common/http'

//pipe
import { CustomLowerCasePipe } from '../../shared/pipes/custom-lowercase.pipe'

//routes
import { Routing, AppRoutingProviders } from './home-routing.module'

//animations

import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HomeComponent } from './pages/home.component'
import { PeruDepartmentsComponent } from './components/peru-departments-congressman/peru-departments-congressman.component'
import { ListCandidatesComponent } from '../../shared/components/list-candidates/list-candidates.component';
import { FrontComponent } from './components/front/front.component';

//components shared
import { InformationCandidateComponent } from '../../shared/components/information-candidate/information-candidate.component';
import { RankingCandidatesComponent } from './components/ranking-candidates/ranking-candidates.component';
import { BannerComponent } from './components/banner/banner.component';
import { CorruptionPhrasesComponent } from './components/corruption-phrases/corruption-phrases.component';
import { PhraseDirective } from '../../shared/directives/phrase.directive';
import { CountryDevelopmentPhrasesComponent } from './components/country-development-phrases/country-development-phrases.component'

import { VoteButtonComponent } from '../../shared/components/vote-button/vote-button.component';
import { FrontRankingComponent } from './components/front-ranking/front-ranking.component';
import { InformationRankingCandidateComponent } from '../../shared/components/information-ranking-candidate/information-ranking-candidate.component';
import { ZonesWithVotesComponent } from './components/zones-with-votes/zones-with-votes.component';
import { VotesInPercentajeComponent } from '../../shared/components/votes-in-percentaje/votes-in-percentaje.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { RankingStatisticsComponent } from './components/ranking-statistics/ranking-statistics.component';
import { AuthModule } from '../../authentication/auth.module';


@NgModule({
    declarations: [
        HomeComponent,
        PeruDepartmentsComponent,
        InformationCandidateComponent,
        ListCandidatesComponent,
        FrontComponent,
        //pipe
        CustomLowerCasePipe,
        RankingCandidatesComponent,
        BannerComponent,
        CorruptionPhrasesComponent,
        PhraseDirective,
        CountryDevelopmentPhrasesComponent,
        VoteButtonComponent,
        FrontRankingComponent,
        InformationRankingCandidateComponent,
        ZonesWithVotesComponent,
        VotesInPercentajeComponent,
        OverlayComponent,
        RankingStatisticsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        Routing,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        AuthModule,
    ],
    providers:[
        AppRoutingProviders
    ],
    bootstrap:[HomeComponent]

})
export class HomeModule { }

/* 
    prettier options :  https://prettier.io/docs/en/options.html#print-width 
*/

/* 
    
    folder structure in angular: https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7

    to generate models in angular https://www.codegrepper.com/code-examples/typescript/generate+model+in+angular
*/