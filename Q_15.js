"use strict";
//15 Assignment;Changing Guest List
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["Fida", "Fahad", "Nahead", "Atzaz"];
guests.splice(2, 1, "Shahil");
guests.forEach(guests => {
    console.log(`${guests}, your invited for the dinner with friends.`);
});
