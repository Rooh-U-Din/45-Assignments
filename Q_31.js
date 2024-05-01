"use strict";
//Question_31; No Users:
Object.defineProperty(exports, "__esModule", { value: true });
const No_Users = [""];
No_Users.forEach(No_Users => {
    if (No_Users.length === 0) {
        console.log("We need to find some users");
    }
    else {
        console.log(`Hello ${No_Users}, thank you for logging in again.`);
    }
});
