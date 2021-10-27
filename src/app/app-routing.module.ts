import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleCardsComponent } from './title-cards/title-cards.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: TitleCardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
