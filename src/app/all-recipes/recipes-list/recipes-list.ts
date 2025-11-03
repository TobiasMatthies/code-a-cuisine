import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cuisine } from '../../models/cuisine.model';
import { FirebaseService } from '../../services/firebase-recipe.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-recipes-list',
  imports: [],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.css',
})
export class RecipesList implements OnInit {
  constructor(
    public firebaseService: FirebaseService,
    public state: StateService,
    private route: ActivatedRoute,
  ) {}

  cuisine: Cuisine | null = null;

  ngOnInit(): void {
    let cuisineName = this.route.snapshot.queryParamMap.get('cuisine');

    if (cuisineName) {
      this.firebaseService.getRecipesByCuisine(cuisineName).subscribe((recipes) => {
        this.state.selectedRecipes = recipes;
        console.log(recipes);
      });
    }

    let cuisineFound = this.state.preferences.cuisine.find((c) => c.name == cuisineName);
    if (cuisineFound) {
      this.cuisine = cuisineFound;
    }
  }
}
