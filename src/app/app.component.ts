import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'myapp';
  name = "wrapper";
  number = 11;
  array = [1,2,3,4,5];
  users = [
    {id: 1, name: 'Alex', age: 18},
    {id: 2, name: 'Steven', age: 19},
    {id: 3, name: 'Dima', age: 17},
    {id: 4, name: 'Neena', age: 15},
  ]
}
