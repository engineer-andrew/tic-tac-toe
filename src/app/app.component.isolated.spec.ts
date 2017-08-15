import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TicTacToeComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
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
