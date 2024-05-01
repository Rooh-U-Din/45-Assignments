//Question_29;Favorite Fruit

const favorite_fruits:string[] = ["apple", "banana", "orange"];
if (favorite_fruits.find(fruit => fruit === "apple")) {
    console.log("You really like apples!");
}else if (favorite_fruits.find(fruit => fruit === "banana")) {
    console.log("You really like bananas!");
}else if (favorite_fruits.find(fruit => fruit === "orange")) {
    console.log("You really like oranges!");
}else if (favorite_fruits.find(fruit => fruit === "strawberry")) {
    console.log("You really like strawberries!");
}else if (favorite_fruits.find(fruit => fruit === "kiwi")) {
    console.log("You really like kiwis!");
}