import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { GameComponent } from './game.component';
import { Game } from '../models/game.model';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    component.game = <Game>{
      playerTurn: 'bolts',
      isActive: true,
      moves: ['', '', '', '', '', '', '', '', '']
    }
    fixture.detectChanges();
  });

  describe('checkForGameOver', () => {
    it('should return true when the current player has completed three in a row in the left column', () => {
      // arrange
      component.game.playerTurn = 'bolts';
      component.game.moves = ['bolts', 'bombs', 'bombs', 'bolts', 'bombs', 'bombs', 'bolts'];

      // act
      const result = component.checkForGameOver();

      // assert
      expect(result).toBe(true);
    });

    it('should return true when the current player has completed three in a row in the middle column', () => {
      // arrange
      component.game.playerTurn = 'bombs';
      component.game.moves = ['bolts', 'bombs', 'bolts', 'bolts', 'bombs', 'bombs', 'bombs', 'bombs'];

      // act
      const result = component.checkForGameOver();

      // assert
      expect(result).toBe(true);
    });

    it('should return true when the current player has completed three in a row in the right column', () => {
      // arrange
      component.game.playerTurn = 'bombs';
      component.game.moves = ['bolts', 'bolts', 'bombs', 'bolts', 'bolts', 'bombs', 'bombs', 'bombs', 'bombs'];

      // act
      const result = component.checkForGameOver();

      // assert
      expect(result).toBe(true);
    });

    it('should return true when the current player has completed three in a row in the top row', () => {
      // arrange
      component.game.playerTurn = 'bolts';
      component.game.moves = ['bolts', 'bolts', 'bolts'];

      // act
      const result = component.checkForGameOver();

      // assert
      expect(result).toBe(true);
    });

    it('should return true when the current player has completed three in a row in the middle row', () => {
      // arrange
      component.game.playerTurn = 'bolts';
      component.game.moves = ['bolts', 'bombs', 'bombs', 'bolts', 'bolts', 'bolts'];

      // act
      const result = component.checkForGameOver();

      // assert
      expect(result).toBe(true);
    });

    it('should return true when the current player has completed three in a row in the bottom row', () => {
      // arrange
      component.game.playerTurn = 'bolts';
      component.game.moves = ['bolts', 'bombs', 'bombs', 'bolts', 'bombs', 'bombs', 'bolts', 'bolts', 'bolts'];

      // act
      const result = component.checkForGameOver();

      // assert
      expect(result).toBe(true);
    });

    it('should return true when the current player has completed three in a row from top left to bottom right', () => {
      // arrange
      component.game.playerTurn = 'bolts';
      component.game.moves = ['bolts', 'bombs', 'bombs', 'bombs', 'bolts', 'bombs', 'bombs', 'bolts', 'bolts'];

      // act
      const result = component.checkForGameOver();

      // assert
      expect(result).toBe(true);
    });

    it('should return true when the current player has completed three in a row from bottom left to top right', () => {
      // arrange
      component.game.playerTurn = 'bolts';
      component.game.moves = ['bombs', 'bombs', 'bolts', 'bombs', 'bolts', 'bombs', 'bolts', 'bolts', 'bombs'];

      // act
      const result = component.checkForGameOver();

      // assert
      expect(result).toBe(true);
    });

    it('should return false when the current player has not completed three in a row', () => {
      // arrange
      component.game.playerTurn = 'bolts';
      component.game.moves = ['bolts', 'bombs', 'bolts', 'bombs', 'bolts', 'bombs', 'bolts', 'bombs', 'bolts'];

      // act
      const result = component.checkForGameOver();

      // assert
      expect(result).toBe(true);
    });
  });

  describe('makeSelection', () => {
    let spy;
    beforeEach(() => {
      spy = spyOn(component, 'checkForGameOver');
    });

    it('should add bolt to selected box when player is bolt and box is clicked', () => {
      // arrange
      component.game.playerTurn = 'bolts';
      debugElement = fixture.debugElement.query(By.css('.top.left.box'));
      element = debugElement.nativeElement;

      // act
      element.click();

      // assert
      expect(element.classList.contains('fa')).toBe(true);
      expect(element.classList.contains('fa-5x')).toBe(true);
      expect(element.classList.contains('fa-bolt')).toBe(true);
    });

    it('should add bomb to selected box when player is bomb and box is clicked', () => {
      // arrange
      component.game.playerTurn = 'bombs';
      debugElement = fixture.debugElement.query(By.css('.top.left.box'));
      element = debugElement.nativeElement;

      // act
      element.click();

      // assert
      expect(element.classList.contains('fa')).toBe(true);
      expect(element.classList.contains('fa-5x')).toBe(true);
      expect(element.classList.contains('fa-bomb')).toBe(true);
    });

    it('should change player to bolts when player is bombs and box is clicked', () => {
      // arrange
      component.game.playerTurn = 'bombs';
      debugElement = fixture.debugElement.query(By.css('.top.left.box'));
      element = debugElement.nativeElement;

      // act
      component.makeSelection(element);

      // assert
      expect(component.game.playerTurn).toBe('bolts');
    });

    it('should change player to bombs when player is bolts and box is clicked', () => {
      // arrange
      component.game.playerTurn = 'bolts';
      debugElement = fixture.debugElement.query(By.css('.top.left.box'));
      element = debugElement.nativeElement;

      // act
      component.makeSelection(element);

      // assert
      expect(component.game.playerTurn).toBe('bombs');
    });

    it('should add move to moves list when top left box is clicked', () => {
      // arrange
      debugElement = fixture.debugElement.query(By.css('.top.left.box'));
      element = debugElement.nativeElement;

      // act
      component.makeSelection(element);

      // assert
      expect(component.game.moves).toEqual(['bolts', '', '', '', '', '', '', '', '']);
    });

    it('should add move to moves list when top center box is clicked', () => {
      // arrange
      debugElement = fixture.debugElement.query(By.css('.top.center.box'));
      element = debugElement.nativeElement;

      // act
      component.makeSelection(element);

      // assert
      expect(component.game.moves).toEqual(['', 'bolts', '', '', '', '', '', '', '']);
    });

    it('should add move to moves list when top right box is clicked', () => {
      // arrange
      debugElement = fixture.debugElement.query(By.css('.top.right.box'));
      element = debugElement.nativeElement;

      // act
      component.makeSelection(element);

      // assert
      expect(component.game.moves).toEqual(['', '', 'bolts', '', '', '', '', '', '']);
    });

    it('should add move to moves list when middle left box is clicked', () => {
      // arrange
      debugElement = fixture.debugElement.query(By.css('.middle.left.box'));
      element = debugElement.nativeElement;

      // act
      component.makeSelection(element);

      // assert
      expect(component.game.moves).toEqual(['', '', '', 'bolts', '', '', '', '', '']);
    });

    it('should add move to moves list when middle center box is clicked', () => {
      // arrange
      debugElement = fixture.debugElement.query(By.css('.middle.center.box'));
      element = debugElement.nativeElement;

      // act
      component.makeSelection(element);

      // assert
      expect(component.game.moves).toEqual(['', '', '', '', 'bolts', '', '', '', '']);
    });

    it('should add move to moves list when middle right box is clicked', () => {
      // arrange
      debugElement = fixture.debugElement.query(By.css('.middle.right.box'));
      element = debugElement.nativeElement;

      // act
      component.makeSelection(element);

      // assert
      expect(component.game.moves).toEqual(['', '', '', '', '', 'bolts', '', '', '']);
    });

    it('should add move to moves list when bottom left box is clicked', () => {
      // arrange
      debugElement = fixture.debugElement.query(By.css('.bottom.left.box'));
      element = debugElement.nativeElement;

      // act
      component.makeSelection(element);

      // assert
      expect(component.game.moves).toEqual(['', '', '', '', '', '', 'bolts', '', '']);
    });

    it('should add move to moves list when bottom center box is clicked', () => {
      // arrange
      debugElement = fixture.debugElement.query(By.css('.bottom.center.box'));
      element = debugElement.nativeElement;

      // act
      component.makeSelection(element);

      // assert
      expect(component.game.moves).toEqual(['', '', '', '', '', '', '', 'bolts', '']);
    });

    it('should add move to moves list when bottom right box is clicked', () => {
      // arrange
      debugElement = fixture.debugElement.query(By.css('.bottom.right.box'));
      element = debugElement.nativeElement;

      // act
      component.makeSelection(element);

      // assert
      expect(component.game.moves).toEqual(['', '', '', '', '', '', '', '', 'bolts']);
    });

    it('should check whether the game has been won', () => {
      // arrange
      debugElement = fixture.debugElement.query(By.css('.top.left.box'));
      element = debugElement.nativeElement;

      // act
      component.makeSelection(element);

      // assert
      expect(component.checkForGameOver).toHaveBeenCalledTimes(1);
    });

    it('should make game inactive when a player has won', () => {
      // arrange
      spy.and.returnValue(true);
      debugElement = fixture.debugElement.query(By.css('.top.left.box'));
      element = debugElement.nativeElement;
      component.game.isActive = true;

      // act
      component.makeSelection(element);

      // assert
      expect(component.game.isActive).toBe(false);
    });

    it('should emit an event indicating the game is over when a player has won', () => {
      // arrange
      spy.and.returnValue(true);
      spyOn(component.isGameOver, 'emit');
      debugElement = fixture.debugElement.query(By.css('.top.left.box'));
      element = debugElement.nativeElement;

      // act
      component.makeSelection(element);

      // assert
      expect(component.isGameOver.emit).toHaveBeenCalledTimes(1);
    });
  });
});
