import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RecipeService } from './services/recipe.service';
import { UserService } from './services/user.service';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { RecipeCardComponent } from './pages/recipe-card/recipe-card.component';
import { LoginComponent } from './pages/login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';
import { FloatingButtonComponent } from './pages/floating-button/floating-button.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditRecipeComponent } from './pages/edit-recipe/edit-recipe.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        RecipeCardComponent,
        LoginComponent,
        RegisterComponent,
        DashboardComponent,
        AddRecipeComponent,
        FloatingButtonComponent,
        EditRecipeComponent

    ],
    imports: [
        BrowserModule,
        RouterModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatDialogModule
    ],
    providers: [RecipeService, UserService, provideAnimationsAsync()],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
