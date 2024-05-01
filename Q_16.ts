//Question_16;More Guests

let guests:string[] = ["Fida", "Fahad", "Nahead", "Atzaz"]
guests.unshift("Ahmed")
guests.forEach(guests => {
    console.log(`${guests}, your invited for the dinner with friends.`)
});