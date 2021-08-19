import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CarouselComponent } from './carousel.component';
import { SlideComponent } from './elements/slide.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ CarouselComponent, SlideComponent],
  exports: [ CarouselComponent, SlideComponent]
})
export class CarouselModule {}
