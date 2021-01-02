module.exports = ({
    name: "serverid",
    aliases: ['getserverid'],
    code: `
    $description[**Server Name:**
    $serverName
    **Server ID:**
    \`$guildID\`
    
    ]
    $color[00ffff]
    `
});