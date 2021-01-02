module.exports = ({
    name: "ecoemoji",
    aliases: ['changeecoemoji','cemoji'],
    code: `

$deletecommand
$title[Successfully changed!]
$description[
$username, successfully changed the money emoji for this: $message[1]]
$setServerVar[ecocustom;$message[1]]
$botTyping
$deleteIn[5s]
$argsCheck[1;{description:Please give the emoji/symbol to set the economy emoji.} {color:F39C12}]
$onlyPerms[admin;{description:You don't have enough permission for this!} {color:ff0000}]
`
});
