import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SearchQueryService} from "./search-query.service";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {StickyModule} from 'ng2-sticky-kit/ng2-sticky-kit';
import { PlayerComponent } from './player/player.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { MasonryModule } from 'angular2-masonry';
import { ViewsofvideoPipe } from './viewsofvideo.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    PlayerComponent,
    PlaceholderComponent,
    ViewsofvideoPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    StickyModule,
    MasonryModule
  ],
  providers: [SearchQueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
