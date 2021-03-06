import { Album } from "./album";

export class User {
    private album: Album[];

    constructor(private id: number,
                private username: string,
                private firstName: string,
                private isPro: boolean) {
        this.album = [];
    }

    addAlbum(album: Album) {
        this.album.push(album);
    }

    removeAlbum(album:Album):Album {
        this.album = this.album.filter(a => a.id !== album.id)
        return album
    }

}
