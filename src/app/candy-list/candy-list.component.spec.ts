import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyListComponent } from './candy-list.component';

describe('CandyListComponent', () => {
  let component: CandyListComponent;
  let fixture: ComponentFixture<CandyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
