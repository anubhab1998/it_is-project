module.exports = ({
    name: "queue",
    aliases: ['q'],
    code: `$title[Queue]
$description[
**Now playing [$songInfo[title]\\]($songInfo[url])**
$queueLength songs in queue
$queue[1]
$queue[2]
$queue[3]
$queue[4]
$queue[5]
$queue[6]
$queue[7]
$queue[8]
$queue[9]
$queue[10]]
$footer[For skip the current playing song Use  $getServerVar[prefix]skip ]
$color[ff0000]
$suppressErrors[Couldn't find songs. Or there are no songs in the queue.]`
});