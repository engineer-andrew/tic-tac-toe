import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  player: string = 'bolts';

  makeSelection(box: HTMLElement) {
    box.classList.add('fa');
    box.classList.add('fa-5x');

    if (this.player === 'bolts') {
      box.classList.add('fa-bolt');
      this.player = 'bombs';
    } else if (this.player === 'bombs') {
      box.classList.add('fa-bomb');
      this.player = 'bolts';
    }
  }
}
