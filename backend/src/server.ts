require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());

import { MenuItem, Extra, CartItem} from '../interfaces';

//file paths
const menuItemsPath = path.join(__dirname, 'data', 'menu-items.json');
const extrasPath = path.join(__dirname, 'data', 'extras.json');
const cartPath = path.join(__dirname, 'data', 'cart.json');

//load data from the json files
// Load data from JSON files
let menuItems: MenuItem[] = JSON.parse(fs.readFileSync(menuItemsPath));
let extras: Extra[] = JSON.parse(fs.readFileSync(extrasPath));
let cart: CartItem[] = JSON.parse(fs.readFileSync(cartPath));

const port = process.env.PORT || 3000;

// MENU ENDPOINTS

// GET - return all menu itmes

// GET - return menu item by id


//EXTRAS ENDPOINTS

// GET - return all extras


// CART ENDPOINTS

// GET - return all items in the cart

// POST - add an item to the cart

// PUT - update the item quantity in the cart

// DELETE - remove an item from the cart



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});