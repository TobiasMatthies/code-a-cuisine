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
}
