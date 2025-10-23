import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GenerateRecipeService } from '../services/generate-recipe.service';

@Component({
  selector: 'app-recipe-results',
  imports: [RouterModule],
  templateUrl: './recipe-results.html',
  styleUrl: './recipe-results.css',
})
export class RecipeResults {
  constructor(public generateRecipeService: GenerateRecipeService) {}
}
