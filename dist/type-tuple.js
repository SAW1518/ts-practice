"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tules types
let user;
user = [1, 'kike'];
console.log('user', user);
console.log('user number', user[0]);
console.log('user string', user[1]);
console.log('user string length', user[1].length);
/// Tuples whit multiples values
// id , username , isPro
let userInfo;
userInfo = [2, 'papa', true];
console.log('userInfo', userInfo);
//Array of Tuples
let array = [];
array.push([1, 'lucas']);
array.push([2, 'papa']);
array.push([3, 'less']);
// Using functions array
// lensQUEEN -> lensQUEEN0001
array[2][1] = array[2][1].concat('001');
console.log('array', array);
