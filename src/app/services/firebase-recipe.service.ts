import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { GeneratedRecipe } from '../models/generated-recipe.model';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService implements OnInit {
  BASE_URL = environment.databaseUrl;

  saveResultsToCookbook(recipes: GeneratedRecipe[]) {
    for (let index = 0; index < recipes.length; index++) {
      const recipe = recipes[index];
      this.http.post(this.BASE_URL + 'recipes.json', recipe).subscribe();
    }
  }

  constructor(
    private state: StateService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.http.get<GeneratedRecipe[]>(this.BASE_URL + 'recipes.json').subscribe((recipes) => {
      this.state.allRecipes = recipes;
    });
  }
}
