import { IBurger } from '../Burger/Burger'

class Order {
    private static instance: Order;
    burgers:IBurger[] = []
    private constructor(){}

    public static getInstance(): Order {
        if(!Order.instance){
            Order.instance = new Order();
        }

        return Order.instance
    }

    public save(burgerToSave:IBurger) {
        let found = false;
        for(let i=0; i<this.burgers.length; i++){
            if(this.burgers[i].id === burgerToSave.id){
                this.burgers[i] = burgerToSave;
                found = true;
                break;
            }
        }

        if (!found) this.burgers.push(burgerToSave)
    }

    public showOrders(){
        console.table(this.burgers, ["id","ingredients", "price"])
    }
}


export const order = Order.getInstance()