import {NgModule} from '@angular/core';
import {CarouselComponent} from './carousel.component';
import {PictureContainerComponent} from './picture-container/picture-container.component';
import {IndicatorComponent} from './indicator/indicator.component';
import {IndicatorGroupComponent} from './indicator-group/indicator-group.component';
import {ActionButtonComponent} from './action-button/action-button.component';


@NgModule({
  declarations: [
    CarouselComponent,
    PictureContainerComponent,
    IndicatorComponent,
    IndicatorGroupComponent,
    ActionButtonComponent
  ],
  imports: [],
  exports: [
    CarouselComponent
  ]
})
export class NgxCarouselLibModule {
}
