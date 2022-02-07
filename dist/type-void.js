"use strict";
//Void
//Type explicit
function showInfo(user) {
    console.log('User Info ', user.id, user.username, user.firstName);
}
showInfo({ id: 1, username: 'Jesus', firstName: 'Kike' });
//Type Inflicted
function showFormattedInfo(user) {
    console.log('User Info ', `
    id:${user.id}
    username:${user.username}
    firstName : ${user.firstName}
    `);
}
showFormattedInfo({ id: 1, username: 'Jesus e', firstName: 'Kikes' });
// type void that type of date
let unusable;
//unusable = null
//unusable = undefined
//Type: Never
function handelError(code, message) {
    //Proses you code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
}
try {
    handelError(404, 'Not Found');
}
catch (e) {
}
function sumNumbers(limits) {
    let sum = 0;
    while (true) {
        sum++;
    }
}
sumNumbers(10);
