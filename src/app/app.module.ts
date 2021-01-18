import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CharacterComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
