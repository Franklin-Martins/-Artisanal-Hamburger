import { BeefBurger } from "./Burger/BeefBurger";
import { Chesse, Pepperoni } from "./Burger/BeefBurgerDecorator";
import { order } from './Order/Order'

const burgerOne = new BeefBurger();
const burgerWithChesse = new Chesse(burgerOne)

const burgerTwo = new BeefBurger();
const burgerWithPepperoni = new Pepperoni(burgerTwo)

order.showOrders()
