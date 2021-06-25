import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionsComponent } from "./templates/champions/champions.component";
import { ChampionsDetailComponent } from "./templates/champions-detail/champions-detail.component";

const routes: Routes = [
  { path: '', component: ChampionsComponent },
  { path: ':id', component: ChampionsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
