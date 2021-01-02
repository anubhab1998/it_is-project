module.exports = ({
    name: "respect",
    code: `
$image[https://useless-api--vierofernando.repl.co/respects?image=$userAvatar[$findUser[$message]]]
$argsCheck[1;{color:ff0000} {description:<:AR_redtick:786483262997790731> Please mention someone!}]
`
});