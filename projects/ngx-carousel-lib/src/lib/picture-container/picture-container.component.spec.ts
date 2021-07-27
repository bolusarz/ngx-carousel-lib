import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PictureContainerComponent} from './picture-container.component';

describe('PictureContainerComponent', () => {
  let component: PictureContainerComponent;
  let fixture: ComponentFixture<PictureContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PictureContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
