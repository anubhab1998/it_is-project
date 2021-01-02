module.exports = ({
    name: "play",
    aliases: ['p'],
    code: `$author[Your song has been added to queue;https://cdn.discordapp.com/attachments/777613624830328893/784393494180921361/images.jpeg]
    $thumbnail[https://images.squarespace-cdn.com/content/v1/58eac4d88419c2d993e74f57/1491954929572-MII6RYJO4QRPZHRFNYAM/ke17ZwdGBToddI8pDm48kOyctPanBqSdf7WQMpY1FsRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyD4IQ_uEhoqbBUjTJFcqKvko9JlUzuVmtjr1UPhOA5qkTLSJODyitRxw8OQt1oetw/ITunes_12_logo.png]
$title[Now Playing]
$description[ **[$songInfo[title]\\]($songInfo[url])**]
$footer[Currently in queue: $queueLength]
    $playSong[$message;No song found.]
$onlyIf[$voiceID!=;To play music, please join a VC.]
$color[58D68D]`
});