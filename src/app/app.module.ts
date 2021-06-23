import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './templates/header/header.component';
import { SearchComponent } from './templates/_shared/search/search.component';
import { ChampionsGalleryComponent } from './templates/champions-gallery/champions-gallery.component';
import { ChampionsCardComponent } from './templates/champions-card/champions-card.component';
import { LoaderComponent } from './templates/_shared/loader/loader.component';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ChampionsGalleryComponent,
    ChampionsCardComponent,
    LoaderComponent
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
