"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, exeFavorito) {
        this.name = name;
        this.exeFavorito = exeFavorito;
    }
    registeredExercise() {
        console.log(`${this.name} decidiu praticar: ${this.exeFavorito.nameOfExercise}`);
        console.log(`Preço: ${this.exeFavorito.getPrice()}`);
    }
}
exports.User = User;
