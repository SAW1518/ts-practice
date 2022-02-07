//  Orientation of photos

/* const landscape = 0
const portraits = 1
const square = 2
const panorama =3 */

enum typesPhotos {
    Landscape, //0
    Portraits, //1
    square, //2
    Panorama //3
}

const landscape :typesPhotos= typesPhotos.Landscape
console.log('landscape', landscape)
console.log('landscape', typesPhotos[0])
console.log('landscape', typesPhotos.Landscape)


enum typesPhotosO {
    Landscape = 10 , //10
    Portraits, //11
    square, //12
    Panorama //13
}

console.log('typesPhotosO', typesPhotosO.Portraits)


enum County{
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = ' usa',
    España= 'esp'
}

const country : County =  County.Colombia
console.log('country', country)
