import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreLoadedPage } from './pre-loaded.page';

describe('PreLoadedPage', () => {
  let component: PreLoadedPage;
  let fixture: ComponentFixture<PreLoadedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreLoadedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreLoadedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
