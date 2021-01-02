module.exports = ({
    name: "rip",
    code: `$deletecommand

$title[RIP $username[$mentioned[1]]]
$color[ff2050]
$image[https://vacefron.nl/api/grave?user=$userAvatar[$mentioned[1]]]

$footer[Ripped by $username#$discriminator[$authorID];$authorAvatar]
$argsCheck[>1;{color:ff0000} {description:<:AR_redtick:786483262997790731> Please mention a User . \`Usase: $getServerVar[prefix]rip @user\`}]
`
});