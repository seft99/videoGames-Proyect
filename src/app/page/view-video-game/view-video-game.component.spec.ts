import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVideoGameComponent } from './view-video-game.component';

describe('ViewVideoGameComponent', () => {
  let component: ViewVideoGameComponent;
  let fixture: ComponentFixture<ViewVideoGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVideoGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVideoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
