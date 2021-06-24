import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

/* Main Entry */
import { AppComponent } from './app.component';

/* Shared */
import { HeaderComponent } from './templates/header/header.component';
import { ScrollToTopComponent } from './templates/_shared/scroll-to-top/scroll-to-top.component';
import { LoaderComponent } from './templates/_shared/loader/loader.component';

/* Champions */
import { ChampionsComponent } from './templates/champions/champions.component';
import { ChampionsGalleryComponent } from './templates/champions-gallery/champions-gallery.component';
import { ChampionsCardComponent } from './templates/champions-card/champions-card.component';

/* Plugins */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChampionsGalleryComponent,
    ChampionsCardComponent,
    LoaderComponent,
    ScrollToTopComponent,
    ChampionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
