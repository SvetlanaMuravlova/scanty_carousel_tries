import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tryNewCarousel';
  slides = [
    {text: '11111'},
    {text: '222222'},
    {text: '333333'}
  ]

  add() {
    this.slides.push({text: '44444444'})
  }
}
