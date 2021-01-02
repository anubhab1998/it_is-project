module.exports = ({
    name: "snipe",
    code: `
$author[$username[$getChannelVar[user_ID]]#$discriminator[$getChannelVar[user_ID]];$userAvatar[$getChannelVar[user_ID]]]
$addTimestamp
$description[
$getChannelVar[user_message]
]
$color[RANDOM]
$onlyIf[$getChannelVar[user_message]!=undefinied;{description: I was not able to find any deleted message on this channel.}{color: ff0000}{author: :x: Message not found on this channel}]
`
});