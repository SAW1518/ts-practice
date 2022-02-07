export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panoramic
}

class Picture {
    // Proprieties
    private _id: number
    private _title: string
    private _orientation: PhotoOrientation

    public constructor(id: number, title: string, orientation: PhotoOrientation) {
        this._id = id
        this._title = title
        this._orientation = orientation
    }

    //get and set
    get id() {
        return this._id
    }

    set id(id: number) {
        this._id = id
    }

    get title() {
        return this._title
    }

    set title(title: string) {
        this._title = title
    }

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
class Album {
    private _id: number
    private _title: string
    private picture: Picture[]


    get id() {
        return this._id
    }
    set id(id: number) {
        this._id = id
    }

    get title() {
        return this._title
    }

    set title(title: string) {
        this._title = title
    }





    public constructor(id: number, title: string) {
        this._id = id
        this._title = title
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
picture.id = 100 // private, set id(100)
picture.title = 'title' // private set
album.title = 'pWDA' // private set
console.log('album=>', album)
console.log('album=>', album.id)//private get


