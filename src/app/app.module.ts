import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ColItemComponent } from './components/col-item/col-item.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { RowItemComponent } from './components/row-item/row-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ColItemComponent,
    GridViewComponent,
    RowItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
