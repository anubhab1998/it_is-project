module.exports = ({
 name: "withdraw",
 aliases: ['with'], 
 code: `
$author[$username#$discriminator;$authorAvatar]
$description[You withdrawn successfully your **$replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==all];true;$getGlobalUserVar[Money]];false;$message[1]]**  out of the bank.]
$color[RANDOM]

$setGlobalUserVar[Bank;$sub[$getGlobalUserVar[Bank];$replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==all];true;$getGlobalUserVar[Money]];false;$message[1]]]]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==all];true;$getGlobalUserVar[Money]];false;$message[1]]]]

$onlyIf[$replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==all];true;$getGlobalUserVar[Money]];false;$message[1]]>0;{description: You can't withdraw negative or non existing money, that's against the rules.}{color: ff0000}{author: ❌ Invalid amount.}]
$onlyIf[$replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==all];true;$getGlobalUserVar[Money]];false;$message[1]]<=$getGlobalUserVar[Bank];{description: You don't have that much money on your bank to withdraw.}{color: ff0000}{author: ❌ Invalid amount}]
$onlyIf[$isNumber[$replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==all];true;$getGlobalUserVar[Money]];false;$message[1]]]==true;{description: You did not provide a valid amount, you can select 'all' or a number.}{color: ff0000}{author: ❌ Invalid amount}]
`
});
