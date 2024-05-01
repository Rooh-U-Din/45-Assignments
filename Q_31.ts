//Question_31; No Users:

const No_Users:string[] = [""];
No_Users.forEach(No_Users => {
    if (No_Users.length === 0) {
        console.log("We need to find some users")
    } else {
        console.log(`Hello ${No_Users}, thank you for logging in again.`);
    }
});
