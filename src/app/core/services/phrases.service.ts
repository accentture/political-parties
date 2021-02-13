import { Injectable } from '@angular/core';
import { CorruptionPhrasesComponent } from '../../modules/home/components/corruption-phrases/corruption-phrases.component';
import { CountryDevelopmentPhrasesComponent } from '../../modules/home/components/country-development-phrases/country-development-phrases.component';
import { AdPhrase } from '../../shared/models/ad-phrase.model';

@Injectable({
    providedIn: 'root',
})
export class PhrasesService {
    constructor() {}

    getPhrases() {
        return [
            new AdPhrase(CorruptionPhrasesComponent, {
                phrase:
                    'El gobierno no puede combatir la corrupción porque la corrupción es el gobierno',
                autor: 'Anónimo',
            }),
            new AdPhrase(CorruptionPhrasesComponent, {
                phrase:
                    'Cuando un político quiere acabar con la pobreza, se refiere a la suya',
                autor: 'Paulo Cohelo',
            }),
            new AdPhrase(CountryDevelopmentPhrasesComponent, {
                phrase:
                    'La democracia, el desarrollo y la modernización de un pais se hacen incogruentes sin la solución de estos problemas',
                autor: 'Rigoberta Menchú',
            }),
            new AdPhrase(CountryDevelopmentPhrasesComponent, {
                phrase:
                    'Dime el porcentaje de la población de tu pais que actua en el voluntariado y te diré cuan avanzado moralmente es',
                autor: 'Mario Bunge',
            }),
        ];
    }
}
