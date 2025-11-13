export interface MenuItem {
    id: number;
    name: string;
    category: string;
    defaultIngredients: string[];
    availableIngredients: string[];
    price: number;
}

export interface Extra {
    id: number;
    name: string;
    category: string;
    price: number;
}

export interface CartItem {
    id: number;
    menuItemId: number;
    name: string;
    selectedIngredients: string[];
    price: number;
    quantity: number;
}