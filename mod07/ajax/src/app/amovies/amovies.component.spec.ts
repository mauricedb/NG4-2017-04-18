import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmoviesComponent } from './amovies.component';

describe('AmoviesComponent', () => {
  let component: AmoviesComponent;
  let fixture: ComponentFixture<AmoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
