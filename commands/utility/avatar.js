module.exports = ({
    name: "avatar",
    aliases: ['av'],
    code: `$author[🖼 Avatar of $username[$findUser[$message]]#$discriminator[$findUser[$message]]]
    $description[[Download Avatar\\]($userAvatar[$findUser[$message]])]
$image[$userAvatar[$findUser[$message]]]
$color[00ffff]
$footer[Requested by $username[$authorID]#$discriminator[$authorID]]
`
});