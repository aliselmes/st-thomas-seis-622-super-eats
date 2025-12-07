require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());

import { IMenuItem, IExtra, ICartItem} from '../interfaces';

//file paths
const menuItemsPath = path.join(__dirname, '..', 'data', 'menu-items.json');
const extrasPath = path.join(__dirname, '..', 'data', 'extras.json');
const cartPath = path.join(__dirname, '..', 'data', 'cart.json');

//load data from the json files

let menuItems: IMenuItem[] = []
let extras: IExtra[] = []
let cart: ICartItem[] = []

fs.readFile(menuItemsPath, (err:any, data:any) => {
    if (err) {
        console.log(`Cannot read file path: ${menuItemsPath}`);
    } else {
        menuItems = JSON.parse(data) as IMenuItem[];
    }
});

fs.readFile(cartPath, (err:any, data:any) => {
    if (err) {
        console.log(`Cannot read file path: ${cartPath}`);
    } else {
        cart = JSON.parse(data) as ICartItem[];
    }
});

fs.readFile(extrasPath, (err:any, data:any) => {
    if (err) {
        console.log(`Cannot read file path: ${extrasPath}`);
    } else {
        extras = JSON.parse(data) as IExtra[];
    }
});

const port = process.env.PORT || 3000;

// MENU ENDPOINTS

// GET - return all menu itmes
app.get('/api/menu', (req: any, res:any) => {
    console.log('GET - Fetched all menu items');
    res.status(200).json(menuItems);
});

// GET - return menu item by id
app.get('/api/menu/:id', (req:any, res:any) => {
    const item = menuItems.find(item => item.id == req.params.id);
    if (item) {
        console.log(`GET - Fetched menu item with id: ${req.params.id}`);
        return res.status(200).json(item);
    }
    console.log(`Item with id ${req.params.id} not found.`);
    return res.status(404).json({error: `Item with id ${req.params.id} not found.`});
});

//EXTRAS ENDPOINT

// GET - return all extras
app.get('/api/extras', (req:any, res:any) => {
    console.log(`GET - Fetched all extras`);
    res.status(200).json(extras);
});

// CART ENDPOINTS

// GET - return all items in the cart
app.get('/api/cart', (req:any, res:any) => {
    console.log(`GET - Fetched the cart`);
    res.status(200).json(cart);
});

// POST - add an item to the cart
app.post('/api/cart', (req:any, res:any) => {
    console.log("POST - Added item to the cart");
    const newItem: ICartItem = {
        id: Date.now(), //use current the date as a unique id
        menuItemId: req.body.menuItemId,
        name: req.body.name,
        selectedIngredients: req.body.selectedIngredients,
        price: req.body.price,
        quantity: req.body.quantity || 1
    };

    cart.push(newItem);

    console.log(`Item added to cart. Cart contains ${cart.length} items.`);
    res.status(200).json(cart);
});

// PUT - update the item quantity in the cart
app.put('/api/cart/:id', (req:any, res:any) => {
    const id = parseInt(req.params.id);
    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
        cartItem.quantity = req.body.quantity;
        console.log(`PUT - updated quantity to ${req.body.quantity}`);
        return res.status(200).json(cart);
    }

    console.log("PUT - item not found.");
    return res.status(404).json({error: 'Cart item not found.'});
});

// DELETE - remove an item from the cart
app.delete('/api/cart/:id', (req:any, res:any) => {
    const id = parseInt(req.params.id);
    const index = cart.findIndex(item => item.id === id);

    if (index !== -1) {
        cart.splice(index, 1);
        console.log(`DELETE - Removed item with id ${id} from cart.`);
        return res.status(200).json(cart);
    }

    console.log(`DELETE - item with id ${id} not found.`);
    return res.status(404).json({error: 'Cart item not found.'});
});

// DELETE - clear the cart when "Submit Order" is clicked
app.delete('/api/cart', (req:any, res:any) => {
    cart = [];
    console.log('DELETE = cart cleared.');
    return res.status(200).json(cart);
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});