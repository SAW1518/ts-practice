export {}
// <type> // Angle Bracket syntax

let username : any
username = 'kike'

// have a string , Ts trust me
let message : string = (<string>username).length > 5? `Welcome ${username}` : `UserName is too short ${username}`

console.log('message', message)


let userNameWithId : any = 'kike 1'

// how get the username?


username == (<string> userNameWithId).substring(0, 3)
console.log('UserName only:',username)

///syntax's 'as'

message = (username as string).length > 5? `Welcome ${username}` : `UserName is too short ${username}`


let helloUser :any
helloUser = 'hello paparazzi'
username = (helloUser as string).substring(6)
console.log('user name', username)