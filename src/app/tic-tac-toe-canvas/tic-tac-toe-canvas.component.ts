import { Component, OnInit } from '@angular/core';

import { TicTacToe } from '../models/tic-tac-toe.model';

@Component({
  selector: 'ag-tic-tac-toe-canvas',
  templateUrl: './tic-tac-toe-canvas.component.html'
})
export class TicTacToeCanvasComponent {
  public games: [TicTacToe] = [
    <TicTacToe>{isActive: true, playerTurn: 'bolts', moves: ['', '', '', '', '', '', '', '', '']}
  ];

  createNewGame() {
    this.games.push({isActive: true, playerTurn: 'bolts', moves: ['', '', '', '', '', '', '', '', '']});
  }
}
