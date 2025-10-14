import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingScreen } from '../loading-screen/loading-screen';

@Component({
  selector: 'app-preferences',
  imports: [RouterModule, TitleCasePipe, LoadingScreen],
  templateUrl: './preferences.html',
  styleUrl: './preferences.css'
})
export class Preferences {
  isLoading = false;

  preferences = {
    times: ['Quick', 'Medium', 'Complex'],
    cuisine: ['german', 'italian', 'indian', 'japanese', 'gourmet', 'fusion'],
    dietPrefences: ['vegetarian', 'vegan', 'keto', 'no preferences']
  }

  onGenerateRecipe() {
    this.isLoading = true
  }
}
