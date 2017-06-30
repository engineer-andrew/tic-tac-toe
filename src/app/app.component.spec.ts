import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

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

  describe('makeSelection', () => {
    it('should add bolt to selected box when player is bolt and box is clicked', () => {
      // arrange
      component.player = 'bolts';
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
      component.player = 'bombs';
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
      component.player = 'bombs';
      debugElement = fixture.debugElement.query(By.css('.top.left.box'));
      element = debugElement.nativeElement;

      // act
      component.makeSelection(element);

      // assert
      expect(component.player).toBe('bolts');
    });

    it('should change player to bombs when player is bolts and box is clicked', () => {
      // arrange
      component.player = 'bolts';
      debugElement = fixture.debugElement.query(By.css('.top.left.box'));
      element = debugElement.nativeElement;

      // act
      component.makeSelection(element);

      // assert
      expect(component.player).toBe('bombs');
    });
  });
});
