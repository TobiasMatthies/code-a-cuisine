export interface Ingredient {
  servingSize: string;
  ingredient: string;
  isEditMode: boolean;
}

export interface RecipeRequirements {
  ingredients: Ingredient[];
  portionsAmount: number;
  cooksAmount: number;
  cookingTime: 'quick' | 'medium' | 'complex';
  cuisine: string;
  dietPreferences: string;
}
