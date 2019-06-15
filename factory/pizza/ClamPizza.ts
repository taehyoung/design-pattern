import { Pizza } from "../interface/Pizza";
import { PizzaIngredientFactory } from "../factory/PizzaIngredientFactory";

export class ClamPizza extends Pizza {

    ingredientFactory: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    public prepare(): void {
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.clams = this.ingredientFactory.createClams();
    }

}