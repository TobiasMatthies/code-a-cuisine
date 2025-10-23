import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GeneratedRecipe } from '../models/generated-recipe.model';
import { GenerateRecipeService } from '../services/generate-recipe.service';

@Component({
  selector: 'app-recipe-detail',
  imports: [RouterModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: GeneratedRecipe | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private generateRecipeService: GenerateRecipeService,
  ) {}

  ngOnInit(): void {
    let routeIndex = this.activatedRoute.snapshot.paramMap.get('id');

    if (routeIndex) {
      let recipeIndex = parseInt(routeIndex);
      this.selectedRecipe = this.generateRecipeService.recipeResults[recipeIndex];
      console.log(this.selectedRecipe);
    }
  }
}
