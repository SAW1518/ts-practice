enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panoramic
}

class Picture {
    // Proprieties
    id: number
    title: string
    orientation: PhotoOrientation

    constructor(id: number, title: string, orientation: PhotoOrientation) {
        this.id = id
        this.title = title
        this.orientation = orientation
    }


    toString(){
        return `id: ${this.id} , title: ${this.title} ,orientation: ${this.orientation}`
    }

}
// behaviour
class Album {
    id: number
    title: string
    picture : Picture[]

    constructor(id:number, title:string ) {
        this.id = id
        this.title = title
        this.picture = []
    }

    addPicture(picture: Picture){
       this.picture.push(picture)
    }
}

const album : Album = new Album(1, 'Personal Pictures')

const picture: Picture= new Picture(1 , 'Platzi session', PhotoOrientation.Square)
album.addPicture(picture)

console.log('album', album)




