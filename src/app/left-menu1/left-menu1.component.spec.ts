import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenu1Component } from './left-menu1.component';

describe('LeftMenu1Component', () => {
  let component: LeftMenu1Component;
  let fixture: ComponentFixture<LeftMenu1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftMenu1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
