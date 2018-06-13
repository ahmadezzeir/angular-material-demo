import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenu2Component } from './left-menu2.component';

describe('LeftMenu2Component', () => {
  let component: LeftMenu2Component;
  let fixture: ComponentFixture<LeftMenu2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftMenu2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
