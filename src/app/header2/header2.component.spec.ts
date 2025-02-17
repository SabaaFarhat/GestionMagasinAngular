import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header2Component } from './header2.component';

describe('HeaderComponent', () => {
  let component: Header2Component;
  let fixture: ComponentFixture<Header2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Header2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Header2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
