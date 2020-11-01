import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSocialNetworkComponent } from './footer-social-network.component';

describe('FooterSocialNetworkComponent', () => {
  let component: FooterSocialNetworkComponent;
  let fixture: ComponentFixture<FooterSocialNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSocialNetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSocialNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
