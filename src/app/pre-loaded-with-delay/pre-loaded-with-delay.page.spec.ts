import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreLoadedWithDelayPage } from './pre-loaded-with-delay.page';

describe('PreLoadedWithDelayPage', () => {
  let component: PreLoadedWithDelayPage;
  let fixture: ComponentFixture<PreLoadedWithDelayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreLoadedWithDelayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreLoadedWithDelayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
