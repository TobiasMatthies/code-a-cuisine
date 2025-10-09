import { Routes } from '@angular/router';
import { GenerateRecipe } from './generate-recipe/generate-recipe';
import { Welcome } from './welcome/welcome';

export const routes: Routes = [
  {
    path: '',
    component: Welcome,
  },
  {
    path: 'generate-recipe',
    component: GenerateRecipe
  }
];
