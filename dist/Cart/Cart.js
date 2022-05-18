"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cart = void 0;
class Cart {
    constructor() {
        this.burgers = [];
    }
    static getInstance() {
        if (!Cart.instance) {
            Cart.instance = new Cart();
        }
        return Cart.instance;
    }
    save(burgerToSave) {
        const burger = this.burgers.find(burger => burger.id === burgerToSave.id);
        if (!burger)
            this.burgers.push(burgerToSave);
        console.log(this.burgers);
    }
}
exports.cart = Cart.getInstance();
