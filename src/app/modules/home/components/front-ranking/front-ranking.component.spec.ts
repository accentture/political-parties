import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontRankingComponent } from './front-ranking.component';

describe('ElectoralRankingComponent', () => {
    let component: FrontRankingComponent;
    let fixture: ComponentFixture<FrontRankingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FrontRankingComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FrontRankingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
