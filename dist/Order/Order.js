"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = void 0;
class Order {
    constructor() {
        this.burgers = [];
    }
    static getInstance() {
        if (!Order.instance) {
            Order.instance = new Order();
        }
        return Order.instance;
    }
    save(burgerToSave) {
        let found = false;
        for (let i = 0; i < this.burgers.length; i++) {
            if (this.burgers[i].id === burgerToSave.id) {
                this.burgers[i] = burgerToSave;
                found = true;
                break;
            }
        }
        if (!found)
            this.burgers.push(burgerToSave);
    }
    showOrders() {
        console.table(this.burgers, ["id", "ingredients", "price"]);
    }
}
exports.order = Order.getInstance();
