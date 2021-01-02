module.exports = ({
 name: "coinflip",
 code: `
$title[$username player coinflip!]
$thumbnail[$authorAvatar]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==$randomText[head;tail]];true;$message[2]];false;-$message[2]]]]
$description[You chose $replaceText[$replaceText[$toLowercase[$message[1]];head;heads];tail;tails] and the coin landed $randomText[head;tail], $replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==$randomText[head;tail]];true;You won $message[2]!];false;You lost $message[2]], 



Now you have: $sum[$getGlobalUserVar[Money];$replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==$randomText[head;tail]];true;$message[2]];false;-$message[2]]]]
$footer[Play again using $getServerVar[prefix]coinflip <head | tail> <bet>]
$color[RANDOM]
$onlyIf[$checkCondition[$message[2]<=$getGlobalUserVar[Money]]==true;:x: you can't bet more than what you have!Make Sure you have enough balance in your wallet .]
$onlyIf[$isNumber[$message[2]]==true;:x: Your bet must be a number!]
$onlyIf[$checkCondition[$toLowercase[$message[1]]==head]$checkCondition[$toLowercase[$message[1]]==tail]!=falsefalse;:x: Use: \`$getServerVar[prefix]coinflip <head | tail> <bet>\`]
$onlyIf[$checkCondition[$message[1]!=];:x: Use: \`$getServerVar[prefix]coinflip <head|tail> <bet>\`]
`
});


