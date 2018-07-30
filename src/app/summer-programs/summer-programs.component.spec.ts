import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerProgramsComponent } from './summer-programs.component';

describe('SummerProgramsComponent', () => {
  let component: SummerProgramsComponent;
  let fixture: ComponentFixture<SummerProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummerProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
