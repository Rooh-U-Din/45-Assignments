"use strict";
//17th Assignment; Shrinking Guest List
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["Fida", "Fahad", "Nahead", "Atzaz"];
guests.unshift("Ahmed");
guests.splice(2);
console.log("Sorry guys i can invite only two peoples for the dinner.");
console.log(guests[0], "invited for the dinner with friends.");
console.log(guests[1], "invited for the dinner with friends.");
