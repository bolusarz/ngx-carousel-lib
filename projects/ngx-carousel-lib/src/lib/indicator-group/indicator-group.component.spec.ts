import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IndicatorGroupComponent} from './indicator-group.component';

describe('IndicatorGroupComponent', () => {
  let component: IndicatorGroupComponent;
  let fixture: ComponentFixture<IndicatorGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndicatorGroupComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
