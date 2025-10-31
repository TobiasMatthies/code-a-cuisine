import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GeneratedRecipe, Recipe } from '../models/generated-recipe.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  BASE_URL = environment.databaseUrl;

  saveRecipesToCookbook(recipes: GeneratedRecipe[]): Observable<any[]> {
    const saveObservables = recipes.map((recipe) => {
      return this.http.post(this.BASE_URL + 'recipes.json', recipe);
    });
    return forkJoin(saveObservables);
  }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<{ [key: string]: GeneratedRecipe }>(this.BASE_URL + 'recipes.json').pipe(
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
