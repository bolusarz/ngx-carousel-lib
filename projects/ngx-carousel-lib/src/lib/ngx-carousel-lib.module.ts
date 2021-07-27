import {NgModule} from '@angular/core';
import {CarouselComponent} from './components/carousel/carousel.component';
import {PictureContainerComponent} from './components/picture-container/picture-container.component';
import {IndicatorComponent} from './components/indicator/indicator.component';
import {IndicatorGroupComponent} from './components/indicator-group/indicator-group.component';
import {ActionButtonComponent} from './components/action-button/action-button.component';


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
