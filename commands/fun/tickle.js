module.exports = ({
    name: "tickle",
    code: `$title[$username[$authorID] tickled $username[$mentioned[1]]]
$image[$jsonRequest[https://nekos.life/api/v2/img/tickle;url; Something went wrong .]]
$color[00FFFF]
$argsCheck[1; Mention someone to tickle them]
`
});
