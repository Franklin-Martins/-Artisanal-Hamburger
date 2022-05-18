"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
class Database {
    constructor() { }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    connectDatabase() {
        console.log("Database conectada com sucesso");
    }
}
exports.database = Database.getInstance();
