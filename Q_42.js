"use strict";
//42th Assignment; Great Magicians:
Object.defineProperty(exports, "__esModule", { value: true });
let magician_names = ['David', 'Harry', 'Penn', 'Teller', 'Dynamo'];
function showMaGicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
function makeGreat(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
magician_names = makeGreat(magician_names);
showMaGicians(magician_names);
