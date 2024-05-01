"use strict";
// Question_44:Sandwiches
Object.defineProperty(exports, "__esModule", { value: true });
function order_Sandwich(...items) {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("You haven't selected any items for your sandwich.");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        for (const item of items) {
            console.log(item);
        }
    }
    console.log("");
}
order_Sandwich();
order_Sandwich("Turkey", "Cheese", "Lettuce", "Tomato");
order_Sandwich("cheese", "Omelette");
order_Sandwich("Salad");
