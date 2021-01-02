module.exports = ({
    name: "tinder",
    code: `$image[https://useless-api.vierofernando.repl.co/tinder?image1=$authorAvatar?size=1024&image2=$userAvatar[$mentioned[1]]?size=1024]
$color[ff00fb]
$description[**$username** & **$username[$mentioned[1]]** is a $random[1;100]% match]
$argsCheck[1; {color:ff0000} {description:<:AR_redtick:786483262997790731> Please mention a user !}]
`
});