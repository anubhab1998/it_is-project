module.exports = ({
    name: "water",
    code: `https://vacefron.nl/api/water?text=$replaceText[$message; ;+;-1]
$argsCheck[>1;{color:ff0000} {description:<:AR_redtick:786483262997790731> Please give message!}]
`
});