import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }
  id: any;
  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
      }
    )
  }

  recipe: any = {
    title: '',
    subtitle: '',
    image: '',
    description: '',
    vegetarian: 0,
  }

  updateRecipe() {
    this.recipeService.getRecipeById(this.id).subscribe(
      (response) => {
        if (this.recipe.title === '') {
          this.recipe.title = response.title;
        }
        if (this.recipe.subtitle === '') {
          this.recipe.subtitle = response.subtitle;
        }
        if (this.recipe.image === '') {
          this.recipe.image = response.image;
        }
        if (this.recipe.description === '') {
          this.recipe.description = response.description;
        }
        if (this.recipe.vegetarian === 0) {
          this.recipe.vegetarian = response.vegetarian;
        }
        this.recipeService.updateRecipe(this.id, this.recipe).subscribe(
          () => {
            this.router.navigate(['/dashBoard'])
          }
        )
      }
    )

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
