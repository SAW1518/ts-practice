"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panoramic"] = 3] = "Panoramic";
})(PhotoOrientation || (PhotoOrientation = {}));
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    /*set id(id: number) {
        this._id = id
    }*/
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
    }
    //get and set
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
    toString() {
        return `id: ${this._id} , title: ${this._title} ,orientation: ${this._orientation}`;
    }
}
// Proprieties
Picture.photoOrientation = PhotoOrientation;
// behaviour
class Album extends Item {
    constructor(id, title) {
        super(id, title);
        this.picture = [];
    }
    addPicture(picture) {
        this.picture.push(picture);
    }
}
const album = new Album(1, 'Personal Pictures');
const picture = new Picture(1, 'Platzi session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);
//Accessing to public variables
//picture.id = 100 // private, set id(100)
picture.title = 'title'; // private set
album.title = 'pWDA'; // private set
console.log('album=>', album);
console.log('album=>', album.id); //private get
/*const item = new  Item(1 , 'test title ')*/
/*console.log('item', item)*/
// Testing static value
console.log('PhotoOrientation', Picture.photoOrientation.Landscape);
