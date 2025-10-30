import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { GeneratedRecipe } from '../models/generated-recipe.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  BASE_URL = environment.databaseUrl;

  saveResultsToCookbook(recipes: GeneratedRecipe[]) {
    for (let index = 0; index < recipes.length; index++) {
      const recipe = recipes[index];
      this.http.post(this.BASE_URL + 'recipes.json', recipe).subscribe();
    }
  }

  getAllRecipes() {
    return this.http.get<GeneratedRecipe[]>(this.BASE_URL + 'recipes.json');
  }

  constructor(private http: HttpClient) {}
}
