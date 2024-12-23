import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParfumComponent } from './parfum.component';

describe('ParfumComponent', () => {
  let component: ParfumComponent;
  let fixture: ComponentFixture<ParfumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParfumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParfumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
