import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../models/Recipe';
import swal from 'sweetalert';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {
  Recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router) { }
  ngOnInit() {
    this.recipeService.getAllRecipes().subscribe(
      (response) => {
        this.Recipes = response;
      }
    )
  }

  deleteRecipe(id: any) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this recipe!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        this.recipeService.deleteRecipe(id).subscribe(
          (response) => {
            swal("Recipe Deleted Successfully!", {
              icon: "success",
            });
            this.ngOnInit();
          },
          (error) => {
            swal("Oops! Something went wrong.", {
              icon: "error",
            });
          }
        );
      } else {
      }
    });
  }

}