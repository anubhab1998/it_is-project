module.exports = ({
    name: "setwelcomeimage",
    aliases: ['swelcomeimage','setwimage','swi'],
    code: `$setServerVar[wimage;$message[1]]
$argsCheck[>1;Please provide the link of welcome image , what you want .Usage: \`$getServerVar[prefix]setwimage <image link>\`]
$onlyPerms[admin;Sorry you haven't enough permission .]
Welcome message image has been changed by **$username** .`
});