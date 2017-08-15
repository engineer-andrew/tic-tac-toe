import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TicTacToeCanvasComponent } from './tic-tac-toe-canvas.component';
import { TicTacToeGameComponent } from '../tic-tac-toe-game/tic-tac-toe-game.component';

describe('TicTacToeCanvasComponent', () => {
  let component: TicTacToeCanvasComponent;
  let fixture: ComponentFixture<TicTacToeCanvasComponent>;

  beforeEach(async(() => {
    const testBed = TestBed.configureTestingModule({
      declarations: [
        TicTacToeCanvasComponent,
        TicTacToeGameComponent
      ],
    });

    testBed.overrideTemplate(TicTacToeGameComponent, '<div>{{game.isActive}}</div><div>{{game.playerTurn}}</div>');

    testBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacToeCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a single new game', () => {
    // assert
    expect(component.games.length).toBe(1);
  });

  it('should default initial game to active', () => {
    // assert
    expect(component.games[0].isActive).toBe(true);
  });

  it('should set initial game\'s turn to bolts', () => {
    // assert
    expect(component.games[0].playerTurn).toBe('bolts');
  });

  it('should pass game to game component', () => {
    // arrange
    const gameElements = fixture.nativeElement.querySelectorAll('ag-game > div');

    // assert
    expect(gameElements[0].textContent).toBe('true');
    expect(gameElements[1].textContent).toBe('bolts');
  });

  it('should set all moves to empty at the start of the game', () => {
    // assert
    expect(component.games[0].moves).toEqual(['', '', '', '', '', '', '', '', '']);
  });
});
