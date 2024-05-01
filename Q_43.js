"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question_43:Unchanged_Magicians
let Unchanged_Magicians = ['David', 'Harry', 'Penn', 'Teller', 'Dynamo'];
function GreatMagicians(Unchanged_Magicians) {
    Unchanged_Magicians.forEach(Unchanged_Magicians => console.log(`The Great ${Unchanged_Magicians}`));
}
GreatMagicians(Unchanged_Magicians);
console.log(Unchanged_Magicians.splice(1));
console.log(Unchanged_Magicians.indexOf("Dynamo"));
console.log(Unchanged_Magicians.includes("paul"));
