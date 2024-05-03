import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarGamesComponent } from './similar-games.component';

describe('SimilarGamesComponent', () => {
  let component: SimilarGamesComponent;
  let fixture: ComponentFixture<SimilarGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
