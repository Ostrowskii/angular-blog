import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { ComentarioComponent } from './pages/comentario/comentario.component';
import { InputComentarioComponent } from './components/input-comentario/input-comentario.component';
import { ListaComentarioComponent } from './components/lista-comentario/lista-comentario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    ComentarioComponent,
    InputComentarioComponent,
    ListaComentarioComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
