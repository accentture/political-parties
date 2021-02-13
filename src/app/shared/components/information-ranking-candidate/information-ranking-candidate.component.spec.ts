import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationRankingCandidateComponent } from './information-ranking-candidate.component';

describe('InformationWinnerCandidateComponent', () => {
    let component: InformationRankingCandidateComponent;
    let fixture: ComponentFixture<InformationRankingCandidateComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InformationRankingCandidateComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InformationRankingCandidateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
