import { Component } from '@angular/core';

import { TicTacToe } from './models/tic-tac-toe.model';

@Component({
  selector: 'ttt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public games: [TicTacToe] = [
    <TicTacToe>{isActive: true, playerTurn: 'bolts', moves: ['', '', '', '', '', '', '', '', '']}
  ];

  createNewGame() {
    this.games.push({isActive: true, playerTurn: 'bolts', moves: ['', '', '', '', '', '', '', '', '']});
  }
}
