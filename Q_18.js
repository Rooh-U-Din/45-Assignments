"use strict";
//Question_18; Seeing The World
Object.defineProperty(exports, "__esModule", { value: true });
let places = ["South Korea", "Islamabad", "Hong Kong", "Japan", "New York"];
console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Sorted in alphabetical order:", places);
