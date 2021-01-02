module.exports = ({
    name: "addmoney",
    code: `
   $title[• Successfully added $getServerVar[ecocustom]$message[2] to $username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] Wallet . 
• They have now $getServerVar[ecocustom]$getGlobalUserVar[Money;$findUser[$message[1]]]]
   
   
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money;$findUser[$message[1]];$message[2]]]];$findUser[$message[1]]]


$onlyForIDs[765917032281276426;{description:You can't use this command}]
`
});