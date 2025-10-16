import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GenerateRecipeService } from '../../services/generate-recipe.service';

@Component({
  selector: 'app-generate-recipe',
  imports: [RouterModule],
  templateUrl: './generate-recipe.html',
  styleUrl: './generate-recipe.css'
})
export class GenerateRecipe {
  unitsOfMeasurement = ['gram', 'ml', 'unit(s)'];
  isDropdownOpen = false;
  selectedUnit: string = this.unitsOfMeasurement[0];

  constructor(public GenerateRecipeService: GenerateRecipeService, private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.isDropdownOpen = false;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectUnit(unit: string, $event: any) {
    this.selectedUnit = unit;
    this.isDropdownOpen = false;
    $event.stopPropagation();
  }
}
