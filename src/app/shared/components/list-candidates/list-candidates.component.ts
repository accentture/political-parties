import { Component, OnInit, DoCheck, OnDestroy, Optional, Injector } from '@angular/core';

//API
import { InstagramAPIService } from '../../../core/services/api-services/instagram-api.service';

//candidates json
import { CandidatesService } from '../../../core/services/candidates/candidates.service';
import { candidatesServiceProvider } from '../../../core/services/candidates/candidates.service.provider';

//router
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router'; //NavigationEnd -> an event triggered when a navigation ends successfully

//interface
import { completeCandidate } from '../../../core/models/complete-candidate';

@Component({
    selector: 'list-candidates',
    templateUrl: './list-candidates.component.html',
    styleUrls: ['./list-candidates.component.scss'],
    providers: [candidatesServiceProvider],
})
//CandidatesCongressmanService, CandidatesPresidentialService
export class ListCandidatesComponent implements OnInit, DoCheck, OnDestroy {
    myCustomSubscription: any; //for refresh this component
    private _allCandidates: Array<completeCandidate> = [];

    candidatesPresidential: Array<completeCandidate> = [];
    whatCandidateList: string;
    presidentialPhoto: any;
    congressmanPhoto: any;

    candidatesService: CandidatesService;
    totalCandidates: number;

    photos: any;
    help: any;

    constructor(
        private injector: Injector,
        @Optional() private instagramAPIService: InstagramAPIService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        //events -> allows to track the cyclelife of the router
        //subscribe -> subscribing to router events
        this.myCustomSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                // Trick the Router into believing it's last link wasn't previously loaded
                this.router.navigated = false; //change status of this navegated component to false
            }
        });
    }

    ngOnInit(): void {
        //this.chargePhotosOfCandidates();
        this.getServices();
        this.getCandidateListToNavigate();
        this.chargePhotos();
    }
    ngDoCheck() {}
    ngOnDestroy(): void {
        //removing custom subscription
        if (this.myCustomSubscription) {
            this.myCustomSubscription.unsubscribe();
        }
    }
    getCandidateListToNavigate() {
        this.activatedRoute.params.subscribe((param: Params) => {
            this.whatCandidateList = param.whatCandidates;
            this.getCandidatesList();
        });
    }
    getServices() {
        //getting my service with candidatesServiceProvider
        this.candidatesService = this.injector.get(CandidatesService);
    }
    getCandidatesList() {
        this._allCandidates = this.candidatesService.getCandidates(this.whatCandidateList);
        this.totalCandidates = this._allCandidates.length;
    }
    chargePhotos() {
        //for presidential photo
        this.instagramAPIService.getPhoto('17893974742675499').subscribe((response) => {
            this.presidentialPhoto = response.media_url;
        });

        //for congressam photo
        this.instagramAPIService.getPhoto('17848035548463192').subscribe((response) => {
            this.congressmanPhoto = response.media_url;
        });
    }
    searchCandidate(_candidate: string) {
        console.log(_candidate);
        //using service to get a new array
        this._allCandidates = this.candidatesService.getCandidates(this.whatCandidateList).filter((candidate) => {
            return (
                candidate['Prenombres'].toLowerCase().includes(_candidate.toLowerCase()) ||
                candidate['Primer apellido'].toLowerCase().includes(_candidate.toLowerCase()) ||
                candidate['Segundo apellido'].toLowerCase().includes(_candidate.toLowerCase())
            );
        });
    }
    get allCandidates() {
        return this._allCandidates;
    }
    chargePhotosOfCandidates() {
        this.instagramAPIService.getphotos.subscribe((response) => {
            this.photos = new Promise((resolve, reject) => {
                resolve(response);
            });
            console.log(this.photos);
        });
        this.photos.then((successMessage) => (this.help = successMessage));
        console.log(this.help);
    }
}
