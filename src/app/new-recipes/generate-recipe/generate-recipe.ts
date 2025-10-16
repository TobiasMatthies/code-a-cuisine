import { Component, ElementRef, HostListener } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ingredient } from '../../models/recipe.model';
import { GenerateRecipeService } from '../../services/generate-recipe.service';
@Component({
  selector: 'app-generate-recipe',
  imports: [RouterModule, FormsModule],
  templateUrl: './generate-recipe.html',
  styleUrl: './generate-recipe.css',
})
export class GenerateRecipe {
  unitsOfMeasurement = [
    { name: 'gram', abbreviation: 'g' },
    { name: 'milliliters', abbreviation: 'ml' },
    { name: 'unit(s)', abbreviation: '' },
  ];
  isDropdownOpen = false;
  selectedUnit: { name: string; abbreviation: string } = this.unitsOfMeasurement[0];
  servingSize = 100;

  constructor(
    public generateRecipeService: GenerateRecipeService,
    private elementRef: ElementRef
  ) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.isDropdownOpen = false;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectUnit(unit: { name: string; abbreviation: string }, $event: any) {
    this.selectedUnit = unit;
    this.isDropdownOpen = false;
    $event.stopPropagation();
  }

  onSubmit(form: NgForm) {
    let ingredient = form.form.controls['ingredient'].value;
    let servingSize = form.form.controls['servingSize'].value;

    if (ingredient && servingSize) {
      this.generateRecipeService.recipeRequirements.ingredients.push({
        ingredient: ingredient,
        servingSize: servingSize + this.selectedUnit.abbreviation,
        isEditMode: false,
      });
    }

    console.log(this.generateRecipeService.recipeRequirements);
  }

  toggleEditModeForIngredient(ingredient: Ingredient) {
    ingredient.isEditMode = !ingredient.isEditMode;
  }

  deleteIngredient(ingredient: Ingredient) {
    let index = this.generateRecipeService.recipeRequirements.ingredients.indexOf(ingredient);
    this.generateRecipeService.recipeRequirements.ingredients.splice(index, 1);
  }
}
