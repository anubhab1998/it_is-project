module.exports = ({
    name: "volume",
    aliases: ['vol'],
    code: `$description[Successfully set the volume to **$message** ]
    $color[7B68EE]
$volume[$message]
$suppressErrors[What do you want your volume set as? use a number.]`
});
