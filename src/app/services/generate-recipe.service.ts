import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { GeneratedRecipe } from '../models/generated-recipe.model';
import { RecipeRequirements } from '../models/recipe.model';

const webhookUrl = environment.webhookUrl;

@Injectable({
  providedIn: 'root',
})
export class GenerateRecipeService {
  recipeRequirements: RecipeRequirements = {
    ingredients: [],
    portionsAmount: 2,
    cooksAmount: 1,
    cookingTime: 'quick',
    cuisine: '',
    dietPreferences: '',
  };

  recipeResults: GeneratedRecipe[] = [];

  constructor(private http: HttpClient) {}

  generateRecipe(requirements: RecipeRequirements): Observable<GeneratedRecipe[]> {
    const response = this.http.post<GeneratedRecipe[]>(webhookUrl, requirements);
    response.subscribe((recipes) => {
      this.recipeResults = recipes;
    });
    return response;
  }
}
