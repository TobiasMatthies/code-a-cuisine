import { NgClass, TitleCasePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { GenerateRecipeService } from '../../services/generate-recipe.service';
import { StateService } from '../../services/state.service';
import { LoadingScreen } from '../loading-screen/loading-screen';

@Component({
  selector: 'app-preferences',
  imports: [RouterModule, TitleCasePipe, LoadingScreen, NgClass, HttpClientModule],
  templateUrl: './preferences.html',
  styleUrl: './preferences.css',
})
export class Preferences {
  isLoading = false;
  preferences;

  onGenerateRecipe() {
    const requirements = this.generateRecipeService.recipeRequirements;
    if (requirements.cookingTime && requirements.cuisine && requirements.dietPreferences) {
      this.isLoading = true;
      this.generateRecipeService.generateRecipe(requirements).subscribe({
        next: (response) => {
          console.log('Recipe generated successfully!', response);
          this.isLoading = false;
          this.router.navigate(['recipe-results/']);
        },
        error: (error) => {
          console.error('Error generating recipe:', error);
          this.isLoading = false;
        },
      });
    }
  }

  constructor(
    public generateRecipeService: GenerateRecipeService,
    public router: Router,
    public state: StateService,
  ) {
    this.preferences = state.preferences;
  }

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
