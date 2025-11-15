export interface IMenuItem {
    id: number;
    name: string;
    category: string;
    defaultIngredients: string[];
    availableIngredients: string[];
    price: number;
}

export interface IExtra {
    id: number;
    name: string;
    category: string;
    price: number;
}

export interface ICartItem {
    id: number;
    menuItemId: number;
    name: string;
    selectedIngredients: string[];
    price: number;
    quantity: number;
}