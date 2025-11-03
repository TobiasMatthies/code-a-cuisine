import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirebaseService } from '../../services/firebase-recipe.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-cookbook',
  imports: [RouterModule],
  templateUrl: './cookbook.component.html',
  styleUrl: './cookbook.component.css',
})
export class CookbookComponent implements OnInit, OnDestroy {
  constructor(
    public state: StateService,
    public firebaseService: FirebaseService,
  ) {
    console.log(state.currentRecipes);
  }

  ngOnInit(): void {
    this.firebaseService.getFirstThreeRecipes().subscribe((recipes) => {
      this.state.currentRecipes = recipes;
      console.log(recipes);
    });
  }

  ngOnDestroy(): void {
    this.state.currentRecipes = [];
  }
}
