//Fusion for show a photo
export {}
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panoramic
}

interface Picture {
    title:string,
    date:string,
    orientation:PhotoOrientation
}
function showPicture(picture:Picture){
    console.log(`[title :${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`)
}
let myPic ={
    title:'Test Title',
    date:'2020-03',
    orientation: PhotoOrientation.Landscape
}

showPicture(myPic)
showPicture( {title:'h1', date:'today', orientation:PhotoOrientation.Panoramic})

interface PictureConfig {
    title?:string
    date?:string
    orientation?:PhotoOrientation 
}
function generatePicture(config :PictureConfig){
    let pic = {title:'Default' , date: 'today'}
    if(config.title){
        pic.title = config.title
    }
    if(config.date){
        pic.date = config.date
    }

    return pic
}

console.log('generatePicture', generatePicture({}))

// Interface : User

interface User{
    readonly id:number,
    readonly username:string,
    isProp:boolean
}

let user :User
user= {id:10, username:'kike', isProp: true}
console.log('user', user)
// user.username = 'kike1'
// console.log('user', user)