module.exports = ({
    name: "invite",
    aliases: ['botinvite','bot invite','support server'],
    code: `

$addField[Join Support Server; **[Support Server\\]($getServerInvite[777177349887361064])**]

$addField[Invite me to your server; **[Invite Link\\](https://discord.com/oauth2/authorize?client_id=$clientID&scope=bot&permissions=2146958847)**]

$color[00ffff]
$author[$username[$clientID];$userAvatar[$clientID]]
$thumbnail[$userAvatar[$clientID]]
$footer[Requested by $username#$discriminator[$authorID];$authorAvatar]`
});