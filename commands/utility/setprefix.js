module.exports = ({
    name: "setprefix",
    aliases: ['sprefix'],
    code: `$setServerVar[prefix;$message[1]]
    $argsCheck[1;Usage: \`$getServerVar[prefix]setprefix <prefix>\`]
$onlyPerms[admin;Sorry you haven't enough permission .]
Prefix has been changed to \`$message[1]\`  by **$username**`
});