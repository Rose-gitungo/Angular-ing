import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './pages/edit-recipe/edit-recipe.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashBoard', component: DashboardComponent },
    { path: 'dashBoard/addRecipe', component: AddRecipeComponent },
    { path: 'dashBoard/edit/:id', component: EditRecipeComponent }



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }