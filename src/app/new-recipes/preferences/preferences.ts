import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-preferences',
  imports: [RouterModule, TitleCasePipe],
  templateUrl: './preferences.html',
  styleUrl: './preferences.css'
})
export class Preferences {
  preferences = {
    times: ['Quick', 'Medium', 'Complex'],
    cuisine: ['german', 'italian', 'indian', 'japanese', 'gourmet', 'fusion'],
    dietPrefences: ['vegetarian', 'vegan', 'keto', 'no preferences']
  }
}
