import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcatComponent } from './tcat.component';

describe('TcatComponent', () => {
  let component: TcatComponent;
  let fixture: ComponentFixture<TcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
