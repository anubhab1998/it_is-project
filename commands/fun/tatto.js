module.exports = ({
    name: "tattoo",
    code: `
$image[https://jointviciousterabyte-1.notadevps.repl.co/tattoo?image=$replaceText[$replaceText[$userAvatar[$mentioned[1]];gif;webp];webp;png]]
$argsCheck[1;{color:ff0000} {description:<:AR_redtick:786483262997790731> Please mention someone!}]
` 
});
