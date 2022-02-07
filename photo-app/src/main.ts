import { Album } from "./album";
import { PhotoOrientation } from "./photoOrientation";

import { Picture } from "./picture";
import {User} from "./user";

const user  = new User( 1, 'userp1', 'userp2', true)
const album = new Album(10 , 'album', )
const picture = new Picture(1, 'picture' , 'today', PhotoOrientation.Panoramic)

user.addAlbum(album)
album.addPicture(picture)

console.log('user', user)
user.removeAlbum(album)
console.log('user remove', user)

