//in this file is code most important to make dynamic components

import {
    Component,
    OnInit,
    OnDestroy,
    Input,
    ViewChild,
    ComponentFactoryResolver,
} from '@angular/core';
import { PhraseDirective } from '../../../../shared/directives/phrase.directive';
import { AdPhrase } from '../../../../shared/models/ad-phrase.model';
import { Phrase } from '../../../../shared/interfaces/phrase';

@Component({
    selector: 'banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, OnDestroy {
    @Input() phrases: AdPhrase[];
    currentPhraseIndex = -1;

    @ViewChild(PhraseDirective, { static: true })
    dynamicPhases: PhraseDirective;
    interval: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

    ngOnInit(): void {
        this.loadComponents();
        this.getPhrases();
    }
    ngOnDestroy(): void {
        //important to destroy the last view
        clearInterval(this.interval);
    }

    loadComponents() {
        //getting component from parent componenet (home.component)
        this.currentPhraseIndex =
            (this.currentPhraseIndex + 1) % this.phrases.length;
        const adPhrase = this.phrases[this.currentPhraseIndex];

        //retrieving a factory object
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            adPhrase.component
        );

        //destroying views in this component
        const viewContainerRef = this.dynamicPhases.viewContainerRef;
        viewContainerRef.clear();

        //creating dynamic component and adding to every component
        const componentRef = viewContainerRef.createComponent<Phrase>(
            componentFactory
        );
        componentRef.instance.data = adPhrase.data; //these dates will be send to child component
    }
    getPhrases() {
        this.interval = setInterval(() => {
            this.loadComponents();
        }, 3000);
    }
}
