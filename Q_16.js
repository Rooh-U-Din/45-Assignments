"use strict";
//Question_16;More Guests
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["Fida", "Fahad", "Nahead", "Atzaz"];
guests.unshift("Ahmed");
guests.forEach(guests => {
    console.log(`${guests}, your invited for the dinner with friends.`);
});
