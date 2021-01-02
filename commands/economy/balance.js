module.exports = ({
    name: "balance",
    aliases: ['bal'],
    code: `
$thumbnail[https://cdn0.iconfinder.com/data/icons/infographic-orchid-vol-1/256/Balance-512.png]



$color[2ee3f0]

$addField[🏛 Bank; $getServerVar[ecocustom]$getGlobalUserVar[Bank;$findUser[$message]]]

$addField[💸 Wallet; $getServerVar[ecocustom]$getGlobalUserVar[Money;$findUser[$message]]]


$footer[Protip: Deposit all the money in the bank so that no one can rob you .]

$author[$username[$findUser[$message]]#$discriminator[$findUser[$message]];$userAvatar[$findUser[$message]]]
$addTimestamp`
});