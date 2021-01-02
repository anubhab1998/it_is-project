module.exports = ({
    name: "iftheyknow",
    aliases: ['itk'],
    code: `
https://jointviciousterabyte-1.notadevps.repl.co/if-those-kids?text=$replaceText[$message; ;%20;-1]
$argsCheck[>1;{color:ff0000} {description:<:AR_redtick:786483262997790731> Please give message!}]
`
});