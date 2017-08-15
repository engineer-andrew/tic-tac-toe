import { Component } from '@angular/core';

import { TicTacToe } from './models/tic-tac-toe.model';

@Component({
  selector: 'ag-root',
  template: '<h1>App Works!</h1>'
})
export class AppComponent {
  public games: [TicTacToe] = [
    <TicTacToe>{isActive: true, playerTurn: 'bolts', moves: ['', '', '', '', '', '', '', '', '']}
  ];

  createNewGame() {
    this.games.push({isActive: true, playerTurn: 'bolts', moves: ['', '', '', '', '', '', '', '', '']});
  }
}
