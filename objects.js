var playlist = {weezer: 'island in the sun', greenDay: 'brainstew'};

function updatePlaylist (object, artist, song) {
  object[artist] = song;
    return object;
}

function removeFromPlaylist(playlistObject, artist) {
  delete playlistObject.artist;
    return playlistObject;
}