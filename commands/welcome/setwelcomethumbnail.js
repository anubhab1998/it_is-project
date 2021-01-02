module.exports = ({
    name: "setwelcomethumbnail",
    aliases: ['setwthumbnail','swelcomethumbnail','swthumbnail'],
    code: `
    $setServerVar[wthumbnail;$message]
$argsCheck[>1;Please provide the link of welcome image , what you want .Usage: \`setwthumbnail <image link>\`]
$onlyPerms[admin;Sorry you haven't enough permission .]
Welcome thumbnail has been changed by **$username** .
`
});