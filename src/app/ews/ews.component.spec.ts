import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EwsComponent } from './ews.component';

describe('EwsComponent', () => {
  let component: EwsComponent;
  let fixture: ComponentFixture<EwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
