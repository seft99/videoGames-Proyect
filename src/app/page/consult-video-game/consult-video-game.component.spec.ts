import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultVideoGameComponent } from './consult-video-game.component';

describe('ConsultVideoGameComponent', () => {
  let component: ConsultVideoGameComponent;
  let fixture: ComponentFixture<ConsultVideoGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultVideoGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultVideoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
