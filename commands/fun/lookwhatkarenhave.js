module.exports = ({
    name: "lookwhatkarenhave",
    code: `
$image[https://jointviciousterabyte-1.notadevps.repl.co/look-what-karen-have?image=$replaceText[$replaceText[$userAvatar[$mentioned[1]];gif;webp];webp;png]]
$argsCheck[1;{color:ff0000} {description:<:AR_redtick:786483262997790731> Please mention someone!}]
` 
});