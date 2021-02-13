import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[dynamicPhrases]',
})
export class PhraseDirective {
    constructor(
        //this injection will allow attach one o maore view in the container of a component
        public viewContainerRef: ViewContainerRef
    ) {}
}
