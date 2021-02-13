import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

//to create dynamic components
import { PhrasesService } from '../../../core/services/phrases.service';
import { AdPhrase } from '../../../shared/models/ad-phrase.model';

//user
import { ControlUserService } from './../../../core/services/user/control-user.service';
import { ContactModel } from './../../../shared/models/contact.model';

@Component({
    selector: 'home-root',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    title = 'PoliticalParties';
    adPhrase: Array<AdPhrase>;
    user: ContactModel;

    myCustomSubscription: any; //for refresh this component

    constructor(
        private phrasesService: PhrasesService,
        private controlUserService: ControlUserService,
        private router: Router
    ) {
        //events -> allows to track the cyclelife of the router
        //subscribe -> subscribing to router events
        /* this.myCustomSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                // Trick the Router into believing it's last link wasn't previously loaded
                this.router.navigated = false; //change status of this navegated component to false
            }
        }); */
    }

    //getting dynamic components
    ngOnInit(): void {
        this.chargePhrases();
        this.checkUser();
    }
    ngOnDestroy() {
        //removing custom subscription
        /* if (this.myCustomSubscription) {
            this.myCustomSubscription.unsubscribe();
        } */
    }
    chargePhrases() {
        this.adPhrase = this.phrasesService.getPhrases();
    }
    checkUser() {
        this.user = this.controlUserService.getUser;
    }
}