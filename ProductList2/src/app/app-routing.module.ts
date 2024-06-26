import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'navbar', component: NavBarComponent },
  { path: 'productList', component: ProductListComponent },
  { path: 'productAdd', component: ProductAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
