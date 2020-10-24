import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GheDadatComponent } from './ghe-dadat.component';

describe('GheDadatComponent', () => {
  let component: GheDadatComponent;
  let fixture: ComponentFixture<GheDadatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GheDadatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GheDadatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
