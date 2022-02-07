export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panoramic
}


abstract class Item {
    protected readonly _id: number
    protected  _title: string

    constructor(id: number, title: string) {
        this._id = id
        this._title = title
    }

    get id() {
        return this._id
    }

    /*set id(id: number) {
        this._id = id
    }*/

    get title() {
        return this._title
    }

    set title(title: string) {
        this._title = title
    }
}


class Picture extends Item {
    // Proprieties
    public  static photoOrientation = PhotoOrientation
    private _orientation: PhotoOrientation

    public constructor(id: number, title: string, orientation: PhotoOrientation) {
        super(id,title)
        this._orientation = orientation
    }

    //get and set

    get orientation() {
        return this._orientation
    }

    set orientation(orientation: PhotoOrientation) {
        this._orientation = orientation
    }


    public toString() {
        return `id: ${this._id} , title: ${this._title} ,orientation: ${this._orientation}`
    }

}

// behaviour
class Album extends Item {

    private picture: Picture[]

    public constructor(id: number, title: string) {
        super(id, title)
        this.picture = []
    }

    public addPicture(picture: Picture) {
        this.picture.push(picture)
    }
}

const album: Album = new Album(1, 'Personal Pictures')

const picture: Picture = new Picture(1, 'Platzi session', PhotoOrientation.Square)
album.addPicture(picture)

console.log('album', album)


//Accessing to public variables
//picture.id = 100 // private, set id(100)
picture.title = 'title' // private set
album.title = 'pWDA' // private set
console.log('album=>', album)
console.log('album=>', album.id)//private get


/*const item = new  Item(1 , 'test title ')*/
/*console.log('item', item)*/

// Testing static value
console.log('PhotoOrientation', Picture.photoOrientation.Landscape)
