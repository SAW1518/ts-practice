"use strict";
//  Orientation of photos
/* const landscape = 0
const portraits = 1
const square = 2
const panorama =3 */
var typesPhotos;
(function (typesPhotos) {
    typesPhotos[typesPhotos["Landscape"] = 0] = "Landscape";
    typesPhotos[typesPhotos["Portraits"] = 1] = "Portraits";
    typesPhotos[typesPhotos["square"] = 2] = "square";
    typesPhotos[typesPhotos["Panorama"] = 3] = "Panorama"; //3
})(typesPhotos || (typesPhotos = {}));
const landscape = typesPhotos.Landscape;
console.log('landscape', landscape);
console.log('landscape', typesPhotos[0]);
console.log('landscape', typesPhotos.Landscape);
var typesPhotosO;
(function (typesPhotosO) {
    typesPhotosO[typesPhotosO["Landscape"] = 10] = "Landscape";
    typesPhotosO[typesPhotosO["Portraits"] = 11] = "Portraits";
    typesPhotosO[typesPhotosO["square"] = 12] = "square";
    typesPhotosO[typesPhotosO["Panorama"] = 13] = "Panorama"; //13
})(typesPhotosO || (typesPhotosO = {}));
console.log('typesPhotosO', typesPhotosO.Portraits);
var County;
(function (County) {
    County["Bolivia"] = "bol";
    County["Colombia"] = "col";
    County["Mexico"] = "mex";
    County["EEUU"] = " usa";
    County["Espa\u00F1a"] = "esp";
})(County || (County = {}));
const country = County.Colombia;
console.log('country', country);
