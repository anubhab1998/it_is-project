module.exports = ({
    name: "userid",
    aliases: ['getuserid'],
    code: `
    $description[**Username:**
$userTag[$findUser[$message[1]]]
**User ID:**
\`$findUser[$message[1]]\`
    ]
    $color[00ffff]
    `
});