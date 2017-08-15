import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TicTacToe } from '../models/tic-tac-toe.model';

@Component({
  selector: 'ag-game',
  templateUrl: './tic-tac-toe-game.component.html',
  styleUrls: ['./tic-tac-toe-game.component.css']
})
export class TicTacToeGameComponent {
  @Input() game: TicTacToe;
  @Output() isGameOver = new EventEmitter();

  checkForGameOver(): boolean {
    // left column
    if (this.game.moves[0] === this.game.playerTurn &&
      this.game.moves[3] === this.game.playerTurn &&
      this.game.moves[6] === this.game.playerTurn) {
      return true;
    }

    // middle column
    if (this.game.moves[1] === this.game.playerTurn &&
      this.game.moves[4] === this.game.playerTurn &&
      this.game.moves[7] === this.game.playerTurn) {
      return true;
    }

    // right column
    if (this.game.moves[2] === this.game.playerTurn &&
      this.game.moves[5] === this.game.playerTurn &&
      this.game.moves[8] === this.game.playerTurn) {
      return true;
    }

    // top row
    if (this.game.moves[0] === this.game.playerTurn &&
      this.game.moves[1] === this.game.playerTurn &&
      this.game.moves[2] === this.game.playerTurn) {
      return true;
    }

    // middle row
    if (this.game.moves[3] === this.game.playerTurn &&
      this.game.moves[4] === this.game.playerTurn &&
      this.game.moves[5] === this.game.playerTurn) {
      return true;
    }

    // bottom row
    if (this.game.moves[6] === this.game.playerTurn &&
      this.game.moves[7] === this.game.playerTurn &&
      this.game.moves[8] === this.game.playerTurn) {
      return true;
    }

    // top left to bottom right
    if (this.game.moves[0] === this.game.playerTurn &&
      this.game.moves[4] === this.game.playerTurn &&
      this.game.moves[8] === this.game.playerTurn) {
      return true;
    }

    // bottom left to top right
    if (this.game.moves[2] === this.game.playerTurn &&
      this.game.moves[4] === this.game.playerTurn &&
      this.game.moves[6] === this.game.playerTurn) {
      return true;
    }

    return false;
  }

  makeSelection(box: HTMLElement) {
    box.classList.add('fa');

    if (box.classList.contains('top')) {
      if (box.classList.contains('left')) {
        this.game.moves[0] = this.game.playerTurn;
      } else if (box.classList.contains('center')) {
        this.game.moves[1] = this.game.playerTurn;
      } else if (box.classList.contains('right')) {
        this.game.moves[2] = this.game.playerTurn;
      }
    }

    if (box.classList.contains('middle')) {
      if (box.classList.contains('left')) {
        this.game.moves[3] = this.game.playerTurn;
      } else if (box.classList.contains('center')) {
        this.game.moves[4] = this.game.playerTurn;
      } else if (box.classList.contains('right')) {
        this.game.moves[5] = this.game.playerTurn;
      }
    }

    if (box.classList.contains('bottom')) {
      if (box.classList.contains('left')) {
        this.game.moves[6] = this.game.playerTurn;
      } else if (box.classList.contains('center')) {
        this.game.moves[7] = this.game.playerTurn;
      } else if (box.classList.contains('right')) {
        this.game.moves[8] = this.game.playerTurn;
      }
    }

    box.classList.add('fa-' + this.game.playerTurn.substring(0, this.game.playerTurn.length - 1));
    if (this.checkForGameOver()) {
      this.game.isActive = false;
      this.isGameOver.emit();
    }
    this.game.playerTurn = this.game.playerTurn === 'bolts' ? 'bombs' : 'bolts';
  }

}
