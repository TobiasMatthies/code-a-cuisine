import { Routes } from '@angular/router';
import { GenerateRecipe } from './new-recipes/generate-recipe/generate-recipe';
import { Preferences } from './new-recipes/preferences/preferences';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeResults } from './recipe-results/recipe-results';
import { Welcome } from './welcome/welcome';

export const routes: Routes = [
  {
    path: '',
    component: Welcome,
  },
  {
    path: 'generate-recipe',
    component: GenerateRecipe,
  },
  {
    path: 'choose-preferences',
    component: Preferences,
  },
  {
    path: 'recipe-results',
    component: RecipeResults,
  },
  {
    path: 'recipe-results/:id',
    component: RecipeDetailComponent,
  },
];
