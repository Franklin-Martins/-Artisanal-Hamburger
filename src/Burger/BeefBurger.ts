import { IBurger } from './Burger'
import { order } from '../Order/Order'
import { v1 as uuidv4 } from 'uuid'


export class BeefBurger implements IBurger{
    id: string;
    ingredients = 'Pão de hambúrguer, carne'
    price = 2.5

    constructor(){
        this.id = uuidv4()
        this.save()
    }
    
    save(){
        const burger:IBurger = {id:this.id, ingredients: this.ingredients, price: this.price}
        order.save(burger)
    }

    getPrice(): number {
        return this.price
    }

    getIngredients(): string {
        
        return this.ingredients
    }

}