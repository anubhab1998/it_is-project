module.exports = ({
    name: "np",
    aliases: ['nowplaying'],
    code: `$description[Currently playing: [$songInfo[title]\\]($songInfo[url])【<@$songInfo[userID]>】
Duration: $parseDate[$multi[$songInfo[duration];1000];time]]
$color[FFA07A]`
});
