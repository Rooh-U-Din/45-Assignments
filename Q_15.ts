//15 Assignment;Changing Guest List

let guests:string[] = ["Fida", "Fahad", "Nahead", "Atzaz"];
guests.splice(2, 1, "Shahil");
guests.forEach(guests => {
    console.log(`${guests}, your invited for the dinner with friends.`)
});

