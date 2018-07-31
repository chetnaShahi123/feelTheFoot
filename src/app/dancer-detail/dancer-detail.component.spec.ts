import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DancerDetailComponent } from './dancer-detail.component';

describe('DancerDetailComponent', () => {
  let component: DancerDetailComponent;
  let fixture: ComponentFixture<DancerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DancerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DancerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
