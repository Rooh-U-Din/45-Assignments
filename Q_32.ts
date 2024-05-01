//Question_32;Checking User Names:

let current_users:string[] = ["Fida", "Fahad", "Atzaz", "Ayoub", "Nahead", "Thanos"]
let new_users:string[] = ["Tony", "Fahad", "Atzaz", "Steve"]

new_users.forEach(new_users => {
    const lowercase_new_user = new_users.toLowerCase();
    if (current_users.map(user => user.toLocaleLowerCase()).includes(lowercase_new_user)) {
        console.log(`Sorry, the username'${new_users} is already taken.please enter a new username'`)
    } else {
        console.log(`Congratulation! The username is'${new_users}' is available`)
    }
})