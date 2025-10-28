import { Component } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-cookbook',
  imports: [],
  templateUrl: './cookbook.component.html',
  styleUrl: './cookbook.component.css',
})
export class CookbookComponent {
  constructor(public state: StateService) {}
}
