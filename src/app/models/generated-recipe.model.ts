export interface GeneratedRecipe {
  title: string;
  cookingTime: string;
  nutritionalInformation: NutritionalInformation;
  preferences: Preferences;
  cooksAmount: number;
  ingredients: Ingredients;
  directions: Direction[];
}

export interface NutritionalInformation {
  calories: string;
  proteins: string;
  fats: string;
  carbs: string;
}

export interface Preferences {
  cookingTime: string;
  cuisine: string;
  dietPreferences: string;
}

export interface Ingredients {
  yourIngredients: YourIngredient[];
  extraIngredients: ExtraIngredient[];
}

export interface YourIngredient {
  ingredient: string;
  servingSize: string;
}

export interface ExtraIngredient {
  ingredient: string;
  servingSize: string;
}

export interface Direction {
  order: number;
  title: string;
  description: string;
  cook: number;
}

export interface RecipeInDatabase extends GeneratedRecipe {
  likes: number;
  cuisine?: string;
}

export interface Recipe extends RecipeInDatabase {
  id: string;
}
