module.exports = ({
    name: "feed",
    code: `$title[$username[$authorID] feed $username[$mentioned[1]]]
$image[$jsonRequest[https://nekos.life/api/v2/img/feed;url; Something went wrong .]]
$color[00FFFF]
$argsCheck[1; {color:ff0000} {description:<:AR_redtick:786483262997790731> Mention someone to feed them}]
`
});