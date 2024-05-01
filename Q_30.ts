// Question_30; Hello Admin:

const User_Names:string[] = ["Fahad", "Admin", "Nahead", "Ayoub", "Atzaz"];
User_Names.forEach(User_Names => {
    if (User_Names === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${User_Names}, thank you for logging in again.`);
    }
});