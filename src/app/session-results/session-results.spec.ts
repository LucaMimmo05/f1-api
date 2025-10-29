import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionResults } from './session-results';

describe('SessionResults', () => {
  let component: SessionResults;
  let fixture: ComponentFixture<SessionResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
