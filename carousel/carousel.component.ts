import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnDestroy,
  OnInit,
  QueryList,
  Input, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { SlideComponent } from './elements/slide.component'
import { takeUntil } from "rxjs/operators";
import {  Subject } from 'rxjs';


@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit, AfterContentInit, OnDestroy{
  @ContentChildren(SlideComponent) _slides: QueryList<SlideComponent> | null = null;
  get slides() {
    return this._slides?.toArray();
  }
  width = 30;
  public isDestroy$ = new Subject<void>();

  @Input() activeSlide = 0;

  constructor(
    private _cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.slides);
    setTimeout(() => {
      this.initActiveSlide();
    },0)
    if (this._slides) {
      // this.slides.forEach(slide => {
      //   // slide.width = this.width;
      // })
      this._slides.changes.pipe(takeUntil(this.isDestroy$)).subscribe( res => {
        console.log('res', res);
      });
    }
    this._cdr.markForCheck();
  }

  initActiveSlide() {
    if (this.slides) {
      this.slides[this.activeSlide].active = true;
    }
  }

  ngOnDestroy(): void {
    if (this.isDestroy$) {
      this.isDestroy$.complete();
    }
  }

}
