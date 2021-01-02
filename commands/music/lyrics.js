module.exports = ({
    name: "lyrics",
    aliases: ['ly'],
    code: `
$title[$songInfo[title]] $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$songInfo[title];lyrics;No Lyrics Found for this song.]]
$suppressErrors[Failed finding lyrics with that song-name.]
$thumbnail[https://cdn.discordapp.com/attachments/777613658023919626/784624464620552232/1607139440807.png]
$color[FFFF00]`
}); 