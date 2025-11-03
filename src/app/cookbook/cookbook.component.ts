import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-cookbook',
  imports: [RouterModule],
  templateUrl: './cookbook.component.html',
  styleUrl: './cookbook.component.css',
})
export class CookbookComponent {
  constructor(public state: StateService) {
    console.log(state.currentRecipes);
  }
}
