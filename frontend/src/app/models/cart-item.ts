export interface CartItem {
  id: number;
  menuItemId: number;
  name: string;
  selectedIngredients: string[];
  price: number;
  quantity: number;
}