import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingCandidatesComponent } from './ranking-candidates.component';

describe('ListPresidentialCandidatesComponent', () => {
    let component: RankingCandidatesComponent;
    let fixture: ComponentFixture<RankingCandidatesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RankingCandidatesComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RankingCandidatesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
