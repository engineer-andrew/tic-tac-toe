import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TicTacToeCanvasComponent } from './tic-tac-toe-canvas.component';
import { TicTacToeGameComponent } from '../tic-tac-toe-game/tic-tac-toe-game.component';

describe('TicTacToeCanvasComponent', () => {
  let component: TicTacToeCanvasComponent;
  let fixture: ComponentFixture<TicTacToeCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TicTacToeCanvasComponent,
        TicTacToeGameComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacToeCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('createNewGame', () => {
    it('should create a new game', () => {
      // act
      component.createNewGame();

      // assert
      expect(component.games.length).toBe(2);
    });

    it('should create a new game that is active', () => {
      // act
      component.createNewGame();

      // assert
      expect(component.games[1].isActive).toBe(true);
    });

    it('should create a new game with no moves', () => {
      // act
      component.createNewGame();

      // assert
      expect(component.games[1].moves).toEqual(['', '', '', '', '', '', '', '', '']);
    });

    it('should create a new game with bolts as the first player', () => {
      // act
      component.createNewGame();

      // assert
      expect(component.games[1].playerTurn).toBe('bolts');
    });
  });
});
