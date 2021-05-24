
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { CardComponent } from './card/card.component';
// import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  // { path: "category/:id", component: CategoryComponent },
  { path: "item/:id", component: ItemComponent },
  { path: "card", component: CardComponent },
  { path: "about", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
