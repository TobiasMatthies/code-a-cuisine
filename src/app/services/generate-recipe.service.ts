import { Injectable } from '@angular/core';
import { RecipeRequirements } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class GenerateRecipeService {
  recipeRequirements: RecipeRequirements = {
    ingredients: [],
    portionsAmount: 0,
    cooksAmount: 0,
    cookingTime: 'quick',
    cuisine: '',
    dietPreferences: ''
  };
}
