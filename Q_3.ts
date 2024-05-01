//Question_3; Name Cases

let Full_Name:string = "nahead jokhio"
console.log(`LowerCase:${Full_Name.toLowerCase()}`)
console.log(`UpperCase:${Full_Name.toUpperCase()}`)

function titleCase(person_name: String) {
    let name = person_name.toLowerCase().split("          ")
    for (let i = 0; i < name.length; i++) {
        name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
    }
    return name.join(" ");
}
console.log(`titleCase: ${titleCase(Full_Name)}`);