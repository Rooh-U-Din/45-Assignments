//Question_40;Album

function make_Album(artist: string, title: string, track: string) {
    const album = { artist, title, track };
    if (track) {
        album["track"]=track;
        return album;
    }
}

console.log(make_Album('Jennie', 'You And Me', 'track second'));

console.log(make_Album('Taylor Swift', 'love story', "third track"));

