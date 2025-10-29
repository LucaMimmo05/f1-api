import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Piloti } from './piloti';

describe('Piloti', () => {
  let component: Piloti;
  let fixture: ComponentFixture<Piloti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Piloti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Piloti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
