module.exports = ({
    name: "spongeburn",
    aliases: ['burn'],
    code: `
$botTyping
https://jointviciousterabyte-1.notadevps.repl.co/spongeburn?text=$replaceText[$message; ;%20;-1]
$argsCheck[>1;Please give message!]

`
});