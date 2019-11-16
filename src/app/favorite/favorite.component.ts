import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles: [
    `
    .glyphicon {
      color:yellow;
  }
    `
  ]
})
export class FavoriteComponent{
  @Input('is-favorite') isFavorite: boolean;
  @Output('change') click = new EventEmitter();



  clickStar() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({new_value: this.isFavorite});
  }

}
