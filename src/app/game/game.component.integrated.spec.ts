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
    component.game = <Game>{};
    fixture.detectChanges();
  });

  it('should render a game', () => {
    // arrange
    debugElement = fixture.debugElement.query(By.css('.game'));

    // assert
    expect(debugElement.nativeElement).toBeDefined();
  });

  it('should render three rows in the game', () => {
    // arrange
    const debugElements: DebugElement[] = fixture.debugElement.queryAll(By.css('.game > .row'));

    // assert
    expect(debugElements.length).toBe(3);
  });

  it('should render three boxes in each row', () => {
    // arrange
    const debugElements: DebugElement[] = fixture.debugElement.queryAll(By.css('.game > .row > .box'));

    // assert
    expect(debugElements.length).toBe(9);
  });

  it('should render one box as top left box', () => {
    // arrange
    debugElement = fixture.debugElement.query(By.css('.game > .row > .box.top.left.col'));

    // assert
    expect(debugElement.nativeElement).toBeDefined();
  });

  it('should render one box as top center box', () => {
    // arrange
    debugElement = fixture.debugElement.query(By.css('.game > .row > .box.top.center.col'));

    // assert
    expect(debugElement.nativeElement).toBeDefined();
  });

  it('should render one box as top right box', () => {
    // arrange
    debugElement = fixture.debugElement.query(By.css('.game > .row > .box.top.right.col'));

    // assert
    expect(debugElement.nativeElement).toBeDefined();
  });

  it('should render one box as middle left box', () => {
    // arrange
    debugElement = fixture.debugElement.query(By.css('.game > .row > .box.middle.left.col'));

    // assert
    expect(debugElement.nativeElement).toBeDefined();
  });

  it('should render one box as middle center box', () => {
    // arrange
    debugElement = fixture.debugElement.query(By.css('.game > .row > .box.middle.center.col'));

    // assert
    expect(debugElement.nativeElement).toBeDefined();
  });

  it('should render one box as middle right box', () => {
    // arrange
    debugElement = fixture.debugElement.query(By.css('.game > .row > .box.middle.right.col'));

    // assert
    expect(debugElement.nativeElement).toBeDefined();
  });

  it('should render one box as bottom left box', () => {
    // arrange
    debugElement = fixture.debugElement.query(By.css('.game > .row > .box.bottom.left.col'));

    // assert
    expect(debugElement.nativeElement).toBeDefined();
  });

  it('should render one box as bottom center box', () => {
    // arrange
    debugElement = fixture.debugElement.query(By.css('.game > .row > .box.bottom.center.col'));

    // assert
    expect(debugElement.nativeElement).toBeDefined();
  });

  it('should render one box as bottom right box', () => {
    // arrange
    debugElement = fixture.debugElement.query(By.css('.game > .row > .box.bottom.right.col'));

    // assert
    expect(debugElement.nativeElement).toBeDefined();
  });

  it('should select box when box is clicked', () => {
    // arrange
    const spy = spyOn(component, 'makeSelection');
    const debugElements: DebugElement[] = fixture.debugElement.queryAll(By.css('.box'));

    // act
    for (let i = 0; i < debugElements.length; i++) {
      element = debugElements[i].nativeElement;
      element.click();

      // assert
      expect(component.makeSelection).toHaveBeenCalledTimes(1);
      spy.calls.reset();
    }
  });

  it('should pass selected box to function when box is clicked', () => {
    // arrange
    const spy = spyOn(component, 'makeSelection');
    const debugElements: DebugElement[] = fixture.debugElement.queryAll(By.css('.box'));

    // act
    for (let i = 0; i < debugElements.length; i++) {
      element = debugElements[i].nativeElement;
      element.click();

      // assert
      expect(component.makeSelection).toHaveBeenCalledWith(element);
      spy.calls.reset();
    }
  });
});
