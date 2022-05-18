"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chicken = exports.Tuna = exports.Egg = exports.Ham = exports.Sausage = exports.Pepperoni = exports.Chesse = void 0;
const Order_1 = require("../Order/Order");
class Chesse {
    constructor(burger) {
        this.burger = burger;
        this.id = this.burger.id;
        this.ingredients = burger.ingredients + ', queijo';
        this.price = burger.price + 0.5;
        this.save();
    }
    save() {
        const burger = { id: this.id, ingredients: this.ingredients, price: this.price };
        Order_1.order.save(burger);
    }
}
exports.Chesse = Chesse;
class Pepperoni {
    constructor(burger) {
        this.burger = burger;
        this.id = this.burger.id;
        this.ingredients = burger.ingredients + ', calabresa';
        this.price = burger.price + 1.5;
        this.save();
    }
    save() {
        const burger = { id: this.id, ingredients: this.ingredients, price: this.price };
        Order_1.order.save(burger);
    }
}
exports.Pepperoni = Pepperoni;
class Sausage {
    constructor(burger) {
        this.burger = burger;
        this.id = this.burger.id;
        this.ingredients = burger.ingredients + ', salsicha';
        this.price = burger.price + 1.5;
        this.save();
    }
    save() {
        const burger = { id: this.id, ingredients: this.ingredients, price: this.price };
        Order_1.order.save(burger);
    }
}
exports.Sausage = Sausage;
class Ham {
    constructor(burger) {
        this.burger = burger;
        this.id = this.burger.id;
        this.ingredients = burger.ingredients + ', presunto';
        this.price = burger.price + 1.5;
        this.save();
    }
    save() {
        const burger = { id: this.id, ingredients: this.ingredients, price: this.price };
        Order_1.order.save(burger);
    }
}
exports.Ham = Ham;
class Egg {
    constructor(burger) {
        this.burger = burger;
        this.id = this.burger.id;
        this.ingredients = burger.ingredients + ', ovo';
        this.price = burger.price + 0.75;
        this.save();
    }
    save() {
        const burger = { id: this.id, ingredients: this.ingredients, price: this.price };
        Order_1.order.save(burger);
    }
}
exports.Egg = Egg;
class Tuna {
    constructor(burger) {
        this.burger = burger;
        this.id = this.burger.id;
        this.ingredients = burger.ingredients + ', atum';
        this.price = burger.price + 1.25;
        this.save();
    }
    save() {
        const burger = { id: this.id, ingredients: this.ingredients, price: this.price };
        Order_1.order.save(burger);
    }
}
exports.Tuna = Tuna;
class Chicken {
    constructor(burger) {
        this.burger = burger;
        this.id = this.burger.id;
        this.ingredients = burger.ingredients + ', frango';
        this.price = burger.price + 2.5;
        this.save();
    }
    save() {
        const burger = { id: this.id, ingredients: this.ingredients, price: this.price };
        Order_1.order.save(burger);
    }
}
exports.Chicken = Chicken;
