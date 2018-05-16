class Pizza {
    constructor(ingredients) {
    this.ingredients = ingredients || 'cheese';
    this.price = 10;
};
// pizzaPrice() {
//     var i;
//     let base_price = 10;
//     for (let i = 0; i < this.ingredients.length; i++) {
//         base_price += 0.99;
//     }
//     return base_price;

    pizzaPrice() {
        this.ingredients.forEach((ingredient) =>
        this.price += 0.99);
        console.log(this.price)
    }
}

class Order {
    constructor(pizzas) {
    this.pizzas = pizzas;
};
calculateTotalOrderCost() {
    let totalCost = 0;
this.pizzas.forEach((pizza) => {
let newCost = pizzas.pizzaPrice();
totalCost += newCost
})
return totalCost
}
}


// class PepperoniPizza extends CheesePizza {
//     constructor(cheese, ingredients) {
//         super(cheese);
//         this.ingredients = 
//     }
//     pizzaPrice() {
//         this.price += 0.99;
//     }
// }

// class MeatLovers extends PepperoniPizza {
//     constructor(cheese, ingr1, ingr2, ingr3, ingr4) {
//         super(cheese, ingr1);
//         this.ingr2 = ingr2;
//         this.ingr3 = ingr3;
//         this.ingr4 = ingr4;
//         }
//         addToppings() {
//         super.pizzaPrice();
//         }
//     }


const pizza = new Pizza('cheese');
const pizza2 = new Pizza(['pepperoni']);
const meatLovers = new Pizza(['pepperoni', 'sausage', 'canadian bacon', 'chicken']);
// console.log(pizza);
// console.log(pizza2)
// console.log(meatLovers);
meatLovers.pizzaPrice();
pizza.pizzaPrice();
pizza2.pizzaPrice();
// console.log(meatLovers.price);
// pizzaPrice() {
//     this.price = 10;
const order = new Order(pizzas);
console.log(order);