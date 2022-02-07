"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function createPicture(title:string, data:string, size:SquareSize){
//     //the objet photo is create
//     console.log('Create picture using', title, data , size)
// }
// createPicture('My date','My date day','1000x1000')
// createPicture('Col Trip','My date day')
/// Parameters optionals
function createPicture(title, data, size) {
    //the objet photo is create
    console.log('Create picture using', title, data, size);
}
createPicture('My date', 'My date day', '1000x1000');
createPicture('Col Trip', 'My date day');
// Flat Array Functions
let createPic = (title, date, size) => {
    return {
        title,
        date,
        size
    };
};
const pic = createPic('cat', 'today', '1000x1000');
console.log('pic', pic);
//Type of return whit ts
function handelError(code, message) {
    if (message == 'error') {
        throw new Error(`${message}. Code error ${code}`);
    }
    else {
        return 'An error has occurred';
    }
}
try {
    let result = handelError(200, 'ok'); // string
    console.log('result1', result);
    result = handelError(400, 'error'); // never
    console.log('result2', result);
}
catch (e) {
}
