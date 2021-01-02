module.exports = ({
    name: "waste",
    code: `
$image[https://some-random-api.ml/canvas/wasted?avatar=$userAvatar[$mentioned[1]]]

$argsCheck[1;{color:ff0000} {description:<:AR_redtick:786483262997790731> Please mention someone!}]
`
});