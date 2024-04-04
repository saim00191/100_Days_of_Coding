
function make_Album(artist: string, title: string, tracks?: number) {
    const albums = { artist, title }

    if (tracks) {
        albums["tracks"] = tracks
    }
    return albums
}

console.log(make_Album("Artist 1", "Title 1"))
console.log(make_Album("Artist 2", "Title 2"))
console.log(make_Album("Artist 3", "Title 3", 90))