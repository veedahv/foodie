import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisinesPageComponent } from './cuisines-page.component';

describe('CuisinesPageComponent', () => {
  let component: CuisinesPageComponent;
  let fixture: ComponentFixture<CuisinesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuisinesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisinesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
