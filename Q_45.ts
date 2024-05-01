// Question_45:Cars

function Car(manufacturer: string, modelName: string,color:string,year:number): any {
    const car = {
        manufacturer: manufacturer,
        modelName: modelName,
        color:color,
        year:year,
    };
    return car
}
console.log(Car("Lamborghini", "Gallardo","red",2024));
