import { ChangeDetectorRef, Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'slide',
  template:`<ng-content></ng-content>`,
  host: {
    '[class.carousel-item]': 'true',
    '[class.active]': '_active',
    '[attr.role]': '"tabpanel"'
  }
})
export class SlideComponent {
  @Input()
  set width(value: number) {
   this._width = value;
  };

  @Input() set active (value: boolean) {
    this._active = value;
  };

  _active = false;
  _width?: number;

  constructor(
    private _cdr: ChangeDetectorRef
  ) {
  }


}
