module.exports = ({
    name: "setwelcomedescription",
    aliases: ['swdescription','setwdescription','swd'],
    code: `$setServerVar[wdescription;$message]
$argsCheck[>1;Please write the title, what you want .Usage: \`setwdescription <yourwelcomedescription>\`]
$onlyPerms[admin;Sorry you haven't enough permission .]
Welcome Message description has been changed  by **$username** .`
});