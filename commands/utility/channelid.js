module.exports = ({
    name: "channelid",
    aliases: ['getchannelid'],
    code: `
    $description[**Channel Name:**
$channelName[$findChannel[$message[1]]]
**Channel ID:**
\`$findChannel[$message[1]]\`
    
    ]
    $color[00ffff]
    `
});