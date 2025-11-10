import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Recipe } from '../models/generated-recipe.model';
import { FirebaseService } from '../services/firebase-recipe.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-recipe-detail',
  imports: [RouterModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private state: StateService,
    private firebaseService: FirebaseService,
  ) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    let recipeFound = this.state.currentRecipes.find((recipe) => id == recipe.id);

    if (!recipeFound) recipeFound = this.state.selectedRecipes.find((recipe) => id == recipe.id);

    if (recipeFound) this.selectedRecipe = recipeFound;
    else
      this.firebaseService.loadRecipeById(id!).subscribe((recipe) => {
        this.selectedRecipe = recipe;
        console.log(this.selectedRecipe);
      });
    console.log(this.selectedRecipe);
  }
}
