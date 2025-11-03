import { Injectable } from '@angular/core';
import { Cuisine } from '../models/cuisine.model';
import { Recipe } from '../models/generated-recipe.model';
import { FirebaseService } from './firebase-recipe.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  selectedRecipes: Recipe[] = [];
  currentRecipes: Recipe[] = [];
  preferences: { times: string[]; cuisine: Cuisine[]; dietPrefences: string[] } = {
    times: ['Quick', 'Medium', 'Complex'],
    cuisine: [
      {
        name: 'german',
        thumbnail_img: 'img/category-thumbnails/card-4.png',
        header_img: 'img/category-headers/Property 1=Fusion.png',
        emoji: '🥨',
      },
      {
        name: 'italian',
        thumbnail_img: 'img/category-thumbnails/card-5.png',
        header_img: 'img/category-headers/Property 1=Fusion.png',
        emoji: '🤌',
      },
      {
        name: 'indian',
        thumbnail_img: 'img/category-thumbnails/card-1.png',
        header_img: 'img/category-headers/Property 1=Fusion.png',
        emoji: '🍛',
      },
      {
        name: 'japanese',
        thumbnail_img: 'img/category-thumbnails/card-3.png',
        header_img: 'img/category-headers/Property 1=Fusion.png',
        emoji: '🥢',
      },
      {
        name: 'gourmet',
        thumbnail_img: 'img/category-thumbnails/card-2.png',
        header_img: 'img/category-headers/Property 1=Fusion.png',
        emoji: '✨',
      },
      {
        name: 'fusion',
        thumbnail_img: 'img/category-thumbnails/card.png',
        header_img: 'img/category-headers/Property 1=Fusion.png',
        emoji: '🍢',
      },
    ],
    dietPrefences: ['vegetarian', 'vegan', 'keto', 'no preferences'],
  };

  constructor(private firebaseService: FirebaseService) {}

  loadRecipesByCuisine(cuisine: string) {
    this.firebaseService.getRecipesByCuisine(cuisine).subscribe((recipes) => {
      this.currentRecipes = recipes;
    });
  }
}
