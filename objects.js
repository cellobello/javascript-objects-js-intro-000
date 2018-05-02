var playlist = {weezer: 'island in the sun', greenDay: 'brainstew'};

function updatePlaylist (object, artist, song) {
  object[artist] = song;
    return object;
}

function removeFromPlaylist(playlist, artistName) {
  console.log(playlist.artistName);
  delete playlist.artistName;
    return playlist;
}