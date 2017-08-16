import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TicTacToeGameComponent } from './tic-tac-toe-game/tic-tac-toe-game.component';
import { TicTacToeCanvasComponent } from './tic-tac-toe-canvas/tic-tac-toe-canvas.component';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeGameComponent,
    TicTacToeCanvasComponent,
    TableOfContentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
