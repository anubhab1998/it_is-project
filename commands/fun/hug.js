module.exports = ({
    name: "hug",
    code: `$title[$username[$authorID] hugged $username[$mentioned[1]]]
$image[$jsonRequest[https://nekos.life/api/hug;url; Something went wrong .]]
$color[00FFFF]
$argsCheck[1; {color:ff0000} {description:<:AR_redtick:786483262997790731> Mention someone to hug them}]
`
});
