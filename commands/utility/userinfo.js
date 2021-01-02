module.exports = ({
    name: "userinfo",
    aliases: ['whois'],
    code: `$thumbnail[$userAvatar[$findUser[$message[1]]]]
    $author[$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] INFO]

$addField[Key Permissions:;$userPerms[$findUser[$message[1]]]]

$addField[Highest Role:;<@&$highestRole[$findUser[$message[1]]]>]
$addField[Custom Status:;$getCustomStatus[$findUser[$message[1]]]]
$addField[Status:;$customEmoji[$status[$findUser[$message]]] $status[$findUser[$message[1]]]]
$addField[Platform:;$customEmoji[$platform[$findUser[$message]]] $platform[$findUser[$message[1]]]]
$addField[Joined Date:;$memberJoinedDate[$findUser[$message[1]]]]
$addField[Creation Date:;$creationDate[$findUser[$message[1]]]]
$addField[Username:;$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]]
$footer[ID: $findUser[$message[1]]]

$color[$getRoleColor[$highestRole[$findUser[$message[1]]]]]
`
});
