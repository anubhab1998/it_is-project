module.exports = ({
    name: "setwelcometitle",
    aliases: ['setwtitle','swtitle','swt'],
    code: `$setServerVar[wtitle;$message]
$onlyIf[$message!=;Please write the title, what you want by default it is \`WELCOME TO THE SERVER\`.Usage: \`$getServerVar[prefix]setwtitle <yourtitle>\`]
$onlyPerms[admin;Sorry you haven't enough permission .]
Welcome Title has been changed to \`$message\` by **$username** .`
});