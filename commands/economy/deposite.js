module.exports = ({
	name: "deposite",
	aliases: ["dep", "deposit"],
	code: 
`
$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money];$replaceText[$replaceText[$checkCondition[$message==all];true;$getGlobalUserVar[Money]];false;$message[1]]]]
$setGlobalUserVar[Bank;$sum[$getGlobalUserVar[Bank];$replaceText[$replaceText[$checkCondition[$message==all];true;$getGlobalUserVar[Money]];false;$message[1]]]]

$author[$username;$authorAvatar]
$description[Successfully Deposited $getServerVar[ecocustom]$replaceText[$replaceText[$checkCondition[$message==all];true;$getGlobalUserVar[Money]];false;$message[1]] Cash Into The Bank!]
$color[GREEN]
$thumbnail[https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PayPal_Logo_Icon_2014.svg/666px-PayPal_Logo_Icon_2014.svg.png]

$onlyIf[$isNumber[$replaceText[$replaceText[$checkCondition[$message==all];true;$getGlobalUserVar[Money]];false;$message[1]]]==true; {author:$username, Thats Not A Number!:$authorAvatar} {color:RED} ]
$onlyIf[$getGlobalUserVar[Money]>0; {author:$username You Dont Have Cash!:$authorAvatar} {color:RED} ]
$thumbnail[https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PayPal_Logo_Icon_2014.svg/666px-PayPal_Logo_Icon_2014.svg.png]

$argsCheck[>1;{color:RED} {description:<:AR_redtick:786483262997790731> Amount can't be undefined . Usage: \`$getServerVar[prefix]dep Amount, or all\`}]
`
});