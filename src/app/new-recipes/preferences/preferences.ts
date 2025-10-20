import { NgClass, TitleCasePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GenerateRecipeService } from '../../services/generate-recipe.service';
import { LoadingScreen } from '../loading-screen/loading-screen';

@Component({
  selector: 'app-preferences',
  imports: [RouterModule, TitleCasePipe, LoadingScreen, NgClass, HttpClientModule],
  templateUrl: './preferences.html',
  styleUrl: './preferences.css',
})
export class Preferences {
  isLoading = false;

  preferences = {
    times: ['Quick', 'Medium', 'Complex'],
    cuisine: ['german', 'italian', 'indian', 'japanese', 'gourmet', 'fusion'],
    dietPrefences: ['vegetarian', 'vegan', 'keto', 'no preferences'],
  };

  onGenerateRecipe() {
    const requirements = this.generateRecipeService.recipeRequirements;
    if (requirements.cookingTime && requirements.cuisine && requirements.dietPreferences) {
      this.isLoading = true;
      this.generateRecipeService.generateRecipe(requirements).subscribe({
        next: (response) => {
          console.log('Recipe generated successfully!', response);
          // TODO: Handle success (e.g., navigate to the recipe page)
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error generating recipe:', error);
          // TODO: Handle error (e.g., show an error message)
          this.isLoading = false;
        },
      });
    }
  }

  constructor(public generateRecipeService: GenerateRecipeService) {}

  increaseAmount(key: 'portionsAmount' | 'cooksAmount') {
    this.generateRecipeService.recipeRequirements[key]++;
  }

  decreaseAmount(key: 'portionsAmount' | 'cooksAmount') {
    if (this.generateRecipeService.recipeRequirements[key] > 1) {
      this.generateRecipeService.recipeRequirements[key]--;
    }
  }

  selectPreference(key: 'cookingTime' | 'cuisine' | 'dietPreferences', value: string) {
    this.generateRecipeService.recipeRequirements[key] = value;
  }
}
