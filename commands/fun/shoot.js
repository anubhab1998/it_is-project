module.exports = ({
    name: "shoot",
    code: `
$image[https://api.no-api-key.com/api/v2/shoot?image=$userAvatar[$findUser[$message]]]
$argsCheck[1;{color:ff0000} {description:<:AR_redtick:786483262997790731> Please mention someone!}]
`
});