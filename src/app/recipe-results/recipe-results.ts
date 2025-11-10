import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { GenerateRecipeService } from '../services/generate-recipe.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-recipe-results',
  imports: [RouterModule],
  templateUrl: './recipe-results.html',
  styleUrl: './recipe-results.css',
})
export class RecipeResults implements OnInit {
  constructor(
    public generateRecipeService: GenerateRecipeService,
    public state: StateService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.state.currentRecipes.length < 1) this.router.navigate(['/generate-recipe']);
  }
}
