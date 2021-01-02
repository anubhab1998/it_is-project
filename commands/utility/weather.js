module.exports = ({
    name: "weather",
    code: `
$title[$randomText[⛅;☁️;❄️;⚡;☔;☀️] Weather of $message]
$image[https://wttr.in/$replaceText[$message; ;-;-1].png?m]
$footer[Requested by $username[$authorID]#$discriminator[$authorID]]
$addTimestamp
$argsCheck[>1;You must indicate the name of the city]`
});