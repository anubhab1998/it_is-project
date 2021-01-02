module.exports = ({
    name: "genie",
    code: `

https://jointviciousterabyte-1.notadevps.repl.co/genie?text=$replaceText[$message; ;%20;-1]
$botTyping
$argsCheck[>1;{color:ff0000} {description:<:AR_redtick:786483262997790731> Please give message!}]

`
});