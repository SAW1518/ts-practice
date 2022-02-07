"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <type> // Angle Bracket syntax
let username;
username = 'kike';
// have a string , Ts trust me
let message = username.length > 5 ? `Welcome ${username}` : `UserName is too short ${username}`;
console.log('message', message);
let userNameWithId = 'kike 1';
// how get the username?
username == userNameWithId.substring(0, 3);
console.log('UserName only:', username);
///syntax's 'as'
message = username.length > 5 ? `Welcome ${username}` : `UserName is too short ${username}`;
let helloUser;
helloUser = 'hello paparazzi';
username = helloUser.substring(6);
console.log('user name', username);
