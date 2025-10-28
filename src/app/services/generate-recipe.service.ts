import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GeneratedRecipe } from '../models/generated-recipe.model';
import { RecipeRequirements } from '../models/recipe.model';
import { FirebaseService } from './firebase-recipe.service';
import { StateService } from './state.service';

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

  constructor(
    private http: HttpClient,
    private firebaseService: FirebaseService,
    private state: StateService,
  ) {}

  generateRecipe(requirements: RecipeRequirements): Observable<GeneratedRecipe[]> {
    const response = this.http.post<GeneratedRecipe[]>(webhookUrl, requirements);
    response.subscribe((recipes) => {
      this.state.recipeResults = recipes;
      this.firebaseService.saveResultsToCookbook(recipes);
      this.state.allRecipes.push(...recipes);
    });
    return response;
  }
}
