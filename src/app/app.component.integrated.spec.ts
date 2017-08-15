import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    const testBed = TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TicTacToeComponent
      ],
    });

    testBed.overrideTemplate(TicTacToeComponent, '<div>{{game.isActive}}</div><div>{{game.playerTurn}}</div>');

    testBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
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
    const gameElements = fixture.nativeElement.querySelectorAll('ttt-game > div');

    // assert
    expect(gameElements[0].textContent).toBe('true');
    expect(gameElements[1].textContent).toBe('bolts');
  });

  it('should set all moves to empty at the start of the game', () => {
    // assert
    expect(component.games[0].moves).toEqual(['', '', '', '', '', '', '', '', '']);
  });
});
