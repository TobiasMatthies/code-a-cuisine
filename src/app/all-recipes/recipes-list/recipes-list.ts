import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  ngOnInit(): void {
    let cuisine = this.route.snapshot.queryParamMap.get('cuisine');

    if (cuisine) {
      this.firebaseService.getRecipesByCuisine(cuisine).subscribe((recipes) => {
        this.state.selectedRecipes = recipes;
        console.log(recipes);
      });
    }
  }
}
