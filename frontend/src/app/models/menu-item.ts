export interface MenuItem {
  id: number;
  name: string;
  category: string;
  defaultIngredients: string[];
  availableIngredients: string[];
  price: number;
}