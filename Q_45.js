"use strict";
// Question_45:Cars
Object.defineProperty(exports, "__esModule", { value: true });
function Car(manufacturer, modelName, color, year) {
    const car = {
        manufacturer: manufacturer,
        modelName: modelName,
        color: color,
        year: year,
    };
    return car;
}
console.log(Car("Lamborghini", "Gallardo", "red", 2024));
