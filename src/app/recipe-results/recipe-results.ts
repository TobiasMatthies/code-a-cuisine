import { Component } from '@angular/core';
import { GenerateRecipeService } from '../services/generate-recipe.service';

@Component({
  selector: 'app-recipe-results',
  imports: [],
  templateUrl: './recipe-results.html',
  styleUrl: './recipe-results.css',
})
export class RecipeResults {
  constructor(public generateRecipeService: GenerateRecipeService) {}
}
