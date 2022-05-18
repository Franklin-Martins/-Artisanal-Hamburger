"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeefBurger = void 0;
const Order_1 = require("../Order/Order");
const uuid_1 = require("uuid");
class BeefBurger {
    constructor() {
        this.ingredients = 'Pão de hambúrguer, carne';
        this.price = 2.5;
        this.id = (0, uuid_1.v1)();
        this.save();
    }
    save() {
        const burger = { id: this.id, ingredients: this.ingredients, price: this.price };
        Order_1.order.save(burger);
    }
    getPrice() {
        return this.price;
    }
    getIngredients() {
        return this.ingredients;
    }
}
exports.BeefBurger = BeefBurger;
