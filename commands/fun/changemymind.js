module.exports = ({
    name: "changemymind",
    aliases: ['cmm'],
    code: `$title[Change My Mind]
$image[https://vacefron.nl/api/changemymind?text=$replaceText[$message; ;%20;-1]]
$color[$random[000000;999999]]

$footer[Requested by $username;$authorAvatar]
$addTimestamp
$argsCheck[>1;{color:ff0000} {description: <:AR_redtick:786483262997790731> Write something to change your mind :)}]
$suppressErrors[Please try again later]
`
});