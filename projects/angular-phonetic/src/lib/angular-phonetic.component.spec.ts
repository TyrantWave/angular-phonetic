import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPhoneticComponent } from './angular-phonetic.component';

describe('AngularPhoneticComponent', () => {
  let component: AngularPhoneticComponent;
  let fixture: ComponentFixture<AngularPhoneticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPhoneticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPhoneticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
