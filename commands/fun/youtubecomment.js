module.exports = ({
    name: "youtubecomment",
    aliases: ['ytcomment'],
    code: `$onlyIf[$noMentionMessage!=;Please type something!]
$image[https://some-random-api.ml/canvas/youtube-comment?avatar=$userAvatar[$mentioned[1;yes]]&username=$username[$mentioned[1;yes]]&comment=$replaceText[$noMentionMessage; ;+;-1]]
$color[FF0000]
`
});