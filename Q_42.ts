//42th Assignment; Great Magicians:

let magician_names: string[] = ['David', 'Harry', 'Penn', 'Teller', 'Dynamo'];

function showMaGicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

magician_names = makeGreat(magician_names);
showMaGicians(magician_names);