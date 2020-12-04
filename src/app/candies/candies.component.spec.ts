import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandiesComponent } from './candies.component';

describe('CandiesComponent', () => {
  let component: CandiesComponent;
  let fixture: ComponentFixture<CandiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
