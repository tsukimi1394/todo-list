import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCompComponent } from './logo-comp.component';

describe('LogoCompComponent', () => {
  let component: LogoCompComponent;
  let fixture: ComponentFixture<LogoCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
