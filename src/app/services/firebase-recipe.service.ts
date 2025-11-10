import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GeneratedRecipe, Recipe, RecipeInDatabase } from '../models/generated-recipe.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  BASE_URL = environment.databaseUrl;

  saveRecipesToCookbook(recipes: GeneratedRecipe[]): Observable<any[]> {
    const saveObservables = recipes.map((recipe) => {
      const recipeWithCuisine = { ...recipe, cuisine: recipe.preferences.cuisine, likes: 0 };
      return this.http.post<RecipeInDatabase>(this.BASE_URL + 'recipes.json', recipeWithCuisine);
    });
    return forkJoin(saveObservables);
  }

  getRecipesByCuisine(cuisine: string): Observable<Recipe[]> {
    const url = `${this.BASE_URL}recipes.json?orderBy="cuisine"&equalTo="${cuisine}"`;
    return this.http.get<{ [key: string]: RecipeInDatabase }>(url).pipe(
      map((response) => {
        const recipes: Recipe[] = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            recipes.push({ ...response[key], id: key });
          }
        }
        return recipes;
      }),
    );
  }

  getFirstThreeRecipes(): Observable<Recipe[]> {
    const url = `${this.BASE_URL}recipes.json?orderBy="$key"&limitToFirst=3`;
    return this.http.get<{ [key: string]: RecipeInDatabase }>(url).pipe(
      map((response) => {
        const recipes: Recipe[] = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            recipes.push({ ...response[key], id: key });
          }
        }
        return recipes;
      }),
    );
  }

  constructor(private http: HttpClient) {}
}
