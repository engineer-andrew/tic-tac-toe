import { Component } from '@angular/core';

import { Game } from './models/game.model';

@Component({
  selector: 'ttt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public games: [Game] = [
    <Game>{isActive: true, playerTurn: 'bolts', moves: ['', '', '', '', '', '', '', '', '']}
  ];

  createNewGame() {
    this.games.push({isActive: true, playerTurn: 'bolts', moves: ['', '', '', '', '', '', '', '', '']});
  }
}
