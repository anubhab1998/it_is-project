module.exports = ({
    name: "caution",
    code: `
$botTyping
https://jointviciousterabyte-1.notadevps.repl.co/caution?text=$replaceText[$message; ;%20;-1]
$argsCheck[>1;{color:ff0000} {description: <:AR_redtick:786483262997790731> Please give message!}]
`
});