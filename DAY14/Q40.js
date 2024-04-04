function make_Album(artist, title, tracks) {
    var albums = { artist: artist, title: title };
    if (tracks) {
        albums["tracks"] = tracks;
    }
    return albums;
}
console.log(make_Album("Artist 1", "Title 1"));
console.log(make_Album("Artist 2", "Title 2"));
console.log(make_Album("Artist 3", "Title 3", 90));
