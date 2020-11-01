import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCountdownComponent } from './my-countdown.component';

describe('MyCountdownComponent', () => {
  let component: MyCountdownComponent;
  let fixture: ComponentFixture<MyCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCountdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
