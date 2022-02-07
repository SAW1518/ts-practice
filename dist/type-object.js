"use strict";
let user;
user = {};
user = {
    id: 1,
    username: 'pablo',
    firstName: 'pau',
    isPro: true
};
console.log(user);
// Object vs objet (Class JS vs type)
const myObj = {
    id: 1,
    username: 'pablo',
    firstName: 'pau',
    isPro: true
};
const isInstance = myObj instanceof Object;
console.log('isInstance', isInstance);
console.log('myObj.firstName', myObj.firstName);
