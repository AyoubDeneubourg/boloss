import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdssamadComponent } from './boloss.component';

describe('AbdssamadComponent', () => {
  let component: AbdssamadComponent;
  let fixture: ComponentFixture<AbdssamadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbdssamadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbdssamadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
