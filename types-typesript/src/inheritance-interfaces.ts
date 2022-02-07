export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panoramic
}


interface Entity {
    id: number,
    title: string
}

interface Album extends Entity {
    // copy of @Entity
    description: string
}

interface Picture extends Entity {
    // copy of @Album
    orientation: PhotoOrientation
}

const album: Album = {
    id: 1,
    title: 'Meetups',
    description: 'a photo',
}


const picture: Picture = {
    id: 2,
    title: 'Meetups2',
    orientation: PhotoOrientation.Landscape
}

const newPicture = { } as Picture
newPicture.id = 2
newPicture.title = 'moon'

console.log('picture', picture)
console.log('album', album)
console.log('newPicture', newPicture)