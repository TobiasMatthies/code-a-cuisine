import { Injectable } from '@angular/core';
import { Recipe } from '../models/generated-recipe.model';
import { FirebaseService } from './firebase-recipe.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  recipeResults: Recipe[] = [];
  currentRecipes: Recipe[] = [];
  preferences = {
    times: ['Quick', 'Medium', 'Complex'],
    cuisine: [
      { name: 'german', img: 'img/category-thumbnails/card-4.png', emoji: '🥨' },
      { name: 'italian', img: 'img/category-thumbnails/card-5.png', emoji: '🤌' },
      { name: 'indian', img: 'img/category-thumbnails/card-1.png', emoji: '🍛' },
      { name: 'japanese', img: 'img/category-thumbnails/card-3.png', emoji: '🥢' },
      { name: 'gourmet', img: 'img/category-thumbnails/card-2.png', emoji: '✨' },
      { name: 'fusion', img: 'img/category-thumbnails/card.png', emoji: '🍢' },
    ],
    dietPrefences: ['vegetarian', 'vegan', 'keto', 'no preferences'],
  };

  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.getFirstThreeRecipes().subscribe((recipes) => {
      this.currentRecipes = recipes;
      console.log(recipes);
    });
  }

  loadRecipesByCuisine(cuisine: string) {
    this.firebaseService.getRecipesByCuisine(cuisine).subscribe((recipes) => {
      this.currentRecipes = recipes;
    });
  }
}
