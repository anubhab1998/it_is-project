module.exports = ({
    name: "clyde",
    code: `
$image[https://ctk-api.herokuapp.com/Clyde/$replaceText[$message; ;%20;-1]]
$deletecommand
$botTyping
$argsCheck[>1;{color:ff0000} {description:<:AR_redtick:786483262997790731> Please give message!}]
`
});