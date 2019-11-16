import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular hello-world';

  post = {
    title: 'Hi this is title',
    isFavorite: true
  }

  isFavoriteChanged(event_parameter) {
    console.log("Fovorite changed: " , event_parameter);
  }
}
