import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';
import { TicTacToeCanvasComponent } from './tic-tac-toe-canvas/tic-tac-toe-canvas.component';

const routes: Routes = [
  {
    path: 'table-of-contents',
    component: TableOfContentsComponent
  },
  {
    path: 'tic-tac-toe',
    component: TicTacToeCanvasComponent
  },
  {
    path: '',
    redirectTo: 'table-of-contents',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
