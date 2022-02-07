"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panoramic"] = 3] = "Panoramic";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log(`[title :${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`);
}
let myPic = {
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({ title: 'h1', date: 'today', orientation: PhotoOrientation.Panoramic });
function generatePicture(config) {
    let pic = { title: 'Default', date: 'today' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
console.log('generatePicture', generatePicture({}));
let user;
user = { id: 10, username: 'kike', isProp: true };
console.log('user', user);
// user.username = 'kike1'
// console.log('user', user)
