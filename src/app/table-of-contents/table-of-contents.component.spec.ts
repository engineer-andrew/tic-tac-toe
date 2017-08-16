import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { RouterLinkStubDirective } from '../../testing/router-stubs';

import { TableOfContentsComponent } from './table-of-contents.component';

describe('TableOfContentsComponent', () => {
  let component: TableOfContentsComponent;
  let fixture: ComponentFixture<TableOfContentsComponent>;
  let linkDebugElements: DebugElement[];
  let links: RouterLinkStubDirective[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        RouterLinkStubDirective,
        TableOfContentsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should list all of the games', () => {
    // arrange
    component.games = [{url: '/tic-tac-toe', name: 'Tic Tac Toe'}, {url: '/hangman', name: 'Hangman'}];
    fixture.detectChanges();

    // act
    const debugElements = fixture.debugElement.queryAll(By.css('.container > .jumbotron > a'));

    // assert
    expect(debugElements.length).toBe(2);
  });

  it('should render a link for each game with the correct name', () => {
    // arrange
    component.games = [{url: '/tic-tac-toe', name: 'Tic Tac Toe'}, {url: '/hangman', name: 'Hangman'}];
    fixture.detectChanges();

    // act
    const debugElements = fixture.debugElement.queryAll(By.css('.container > .jumbotron > a'));

    // assert
    expect(debugElements[0].nativeElement.textContent).toContain('Tic Tac Toe');
    expect(debugElements[1].nativeElement.textContent).toContain('Hangman');
  });

  it('should render a link for each game with the correct url', () => {
    // arrange
    component.games = [{url: '/tic-tac-toe', name: 'Tic Tac Toe'}, {url: '/hangman', name: 'Hangman'}];
    fixture.detectChanges();

    // act
    linkDebugElements = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));
    links = linkDebugElements.map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);

    // assert
    expect(links.length).toBe(2);
    expect(links[0].linkParams).toBe('/tic-tac-toe');
    expect(links[1].linkParams).toBe('/hangman');
  });
});
