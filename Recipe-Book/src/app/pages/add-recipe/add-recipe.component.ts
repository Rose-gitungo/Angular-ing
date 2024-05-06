import { Component } from '@angular/core';
import { loginRequest } from '../../models/LoginRequest';
import { Recipe } from '../../models/Recipe';
import { User } from '../../models/User';
import { RecipeService } from '../../services/recipe.service';
import swal from 'sweetalert';
import { Route, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {
  constructor(private recipeService: RecipeService, private router: Router, private userService: UserService) { }

  user: any = {
    Uid: 0,
    email: '',
    fullName: ''
  }

  recipe: Recipe = {
    id: 0,
    title: '',
    subtitle: '',
    image: '',
    description: '',
    vegetarian: false,
    uid: this.user.Uid
  };

  addRecipe() {
    this.userService.getUserProfile().subscribe(
      (response) => {
        this.recipe.uid = response.uid;
        this.recipeService.createRecipe(this.recipe).subscribe(
          (response2) => {
            this.recipe = response2;
            this.router.navigate(['/dashBoard']);
          }
        )
      }
    );
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.recipe.image = reader.result as string;
      }
    }
  }
}
