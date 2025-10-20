export interface Ingredient {
  servingSize: string;
  ingredient: string;
  isEditMode: boolean;
}

export interface RecipeRequirements {
  ingredients: Ingredient[];
  portionsAmount: number;
  cooksAmount: number;
  cookingTime: string;
  cuisine: string;
  dietPreferences: string;
}
