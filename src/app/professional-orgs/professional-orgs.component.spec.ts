import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalOrgsComponent } from './professional-orgs.component';

describe('ProfessionalOrgsComponent', () => {
  let component: ProfessionalOrgsComponent;
  let fixture: ComponentFixture<ProfessionalOrgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalOrgsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalOrgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
