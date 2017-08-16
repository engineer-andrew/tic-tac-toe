import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ttt-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.css']
})
export class TableOfContentsComponent implements OnInit {
  public games = [{name: 'Tic Tac Toe', url: '/tic-tac-toe'}];

  constructor() { }

  ngOnInit() {
  }

}
