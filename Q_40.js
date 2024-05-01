"use strict";
//Question_40;Album
Object.defineProperty(exports, "__esModule", { value: true });
function make_Album(artist, title, track) {
    const album = { artist, title, track };
    if (track) {
        album["track"] = track;
        return album;
    }
}
console.log(make_Album('Jennie', 'You And Me', 'track second'));
console.log(make_Album('Taylor Swift', 'love story', "third track"));
