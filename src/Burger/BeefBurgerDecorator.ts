import { IBurger } from "./Burger";
import { order } from '../Order/Order'

export class Chesse implements IBurger{
    price: number;
    ingredients: string;
    id: string;
    constructor(protected burger: IBurger){
        this.id = this.burger.id
        this.ingredients = burger.ingredients + ', queijo'
        this.price = burger.price + 0.5
        this.save()
    }
    
    save(){
        const burger:IBurger = {id:this.id, ingredients: this.ingredients, price: this.price}
        order.save(burger)
    }
}

export class Pepperoni implements IBurger{
    price: number;
    ingredients: string;
    id: string;
    constructor(protected burger: IBurger){
        this.id = this.burger.id
        this.ingredients = burger.ingredients + ', calabresa'
        this.price = burger.price + 1.5
        this.save()
    }
    
    save(){
        const burger:IBurger = {id:this.id, ingredients: this.ingredients, price: this.price}
        order.save(burger)
    }
}

export class Sausage implements IBurger{
    price: number;
    ingredients: string;
    id: string;
    constructor(protected burger: IBurger){
        this.id = this.burger.id
        this.ingredients = burger.ingredients + ', salsicha'
        this.price = burger.price + 1.5
        this.save()
    }
    
    save(){
        const burger:IBurger = {id:this.id, ingredients: this.ingredients, price: this.price}
        order.save(burger)
    }
}

export class Ham implements IBurger{
    price: number;
    ingredients: string;
    id: string;
    constructor(protected burger: IBurger){
        this.id = this.burger.id
        this.ingredients = burger.ingredients + ', presunto'
        this.price = burger.price + 1.5
        this.save()
    }
    
    save(){
        const burger:IBurger = {id:this.id, ingredients: this.ingredients, price: this.price}
        order.save(burger)
    }
}

export class Egg implements IBurger{
    price: number;
    ingredients: string;
    id: string;
    constructor(protected burger: IBurger){
        this.id = this.burger.id
        this.ingredients = burger.ingredients + ', ovo'
        this.price = burger.price + 0.75
        this.save()
    }
    
    save(){
        const burger:IBurger = {id:this.id, ingredients: this.ingredients, price: this.price}
        order.save(burger)
    }
}

export class Tuna implements IBurger{
    price: number;
    ingredients: string;
    id: string;
    constructor(protected burger: IBurger){
        this.id = this.burger.id
        this.ingredients = burger.ingredients + ', atum'
        this.price = burger.price + 1.25
        this.save()
    }
    
    save(){
        const burger:IBurger = {id:this.id, ingredients: this.ingredients, price: this.price}
        order.save(burger)
    }
}

export class Chicken implements IBurger{
    price: number;
    ingredients: string;
    id: string;
    constructor(protected burger: IBurger){
        this.id = this.burger.id
        this.ingredients = burger.ingredients + ', frango'
        this.price = burger.price + 2.5
        this.save()
    }
    
    save(){
        const burger:IBurger = {id:this.id, ingredients: this.ingredients, price: this.price}
        order.save(burger)
    }
}
