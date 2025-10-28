import { Injectable } from '@angular/core';
import { GeneratedRecipe } from '../models/generated-recipe.model';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  recipeResults: GeneratedRecipe[] = [];
  allRecipes: GeneratedRecipe[] = [];
  preferences = {
    times: ['Quick', 'Medium', 'Complex'],
    cuisine: ['german', 'italian', 'indian', 'japanese', 'gourmet', 'fusion'],
    dietPrefences: ['vegetarian', 'vegan', 'keto', 'no preferences'],
  };
}
