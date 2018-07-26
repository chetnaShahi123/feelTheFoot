import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoreographersComponent } from './choreographers.component';

describe('ChoreographersComponent', () => {
  let component: ChoreographersComponent;
  let fixture: ComponentFixture<ChoreographersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoreographersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoreographersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
