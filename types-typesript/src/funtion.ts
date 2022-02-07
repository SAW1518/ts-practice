export {}
//Create a photo

// function createPicture1(title, data, size){
//     //title
// }
//using ts whit types defines
type SquareSize = '100x100' | '500x500' | '1000x1000'

// function createPicture(title:string, data:string, size:SquareSize){
//     //the objet photo is create
//     console.log('Create picture using', title, data , size)
// }
// createPicture('My date','My date day','1000x1000')
// createPicture('Col Trip','My date day')


/// Parameters optionals

function createPicture(title?:string, data?:string, size?:SquareSize){
         //the objet photo is create
         console.log('Create picture using', title, data , size)
     }

     createPicture('My date','My date day','1000x1000')
     createPicture('Col Trip','My date day')

// Flat Array Functions
let createPic = (title:string , date:string , size:SquareSize):object =>{
    return {
        title,
        date,
        size
    }
}

const pic = createPic('cat', 'today', '1000x1000')

console.log('pic', pic)

//Type of return whit ts
function handelError(code:number, message:string):never|string {
    if(message == 'error'){
        throw new Error(`${message}. Code error ${code}`)
    }else{
        return 'An error has occurred'
    }
}



try{
    let result = handelError (200, 'ok') // string
    console.log('result1', result)
    result = handelError (400, 'error')// never
    console.log('result2', result)
}catch(e){

}