module.exports = ({
    name: "setwelcomechannel",
    aliases: ['setwchannel','swc','swchannel'],
    code: `
    $setServerVar[wchannel;$mentionedChannels[1]]
$argsCheck[1;Please mention that channel, where you want to send the welcome message.Usage: \`$getServerVar[prefix]setwchannel #channel\`]
$onlyPerms[admin;Sorry you haven't enough permission .]
Welcome Channel has been changed to <#$mentionedChannels[1]>  by **$username** .`
});