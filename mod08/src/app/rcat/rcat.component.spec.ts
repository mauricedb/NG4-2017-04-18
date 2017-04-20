import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcatComponent } from './rcat.component';

describe('RcatComponent', () => {
  let component: RcatComponent;
  let fixture: ComponentFixture<RcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
