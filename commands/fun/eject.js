module.exports = ({
    name: "eject",
    aliases: ['ej'],
    code: `https://vacefron.nl/api/ejected?name=$replaceText[$username[$mentioned[1;yes]]; ;%20;-1]&impostor=$randomText[True;False]&crewmate=$randomText[red;blue;green;purple;yellow;orange;black;brown;white;cyan]
$argsCheck[1;{color:ff0000} {description:<:AR_redtick:786483262997790731> Please mention someone!}]
`
});