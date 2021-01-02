module.exports = ({
 name: "purge",
 code: `
$deletecommand
$clear[$message]
$cooldown[10s;**Cool down, Try again in  %time% to Purge again**]
$onlyPerms[admin;**Only Admin Can Use This**]
$argsCheck[>1;**Put How Many Messages you want to Purge**]
$onlyIf[$isNumber[$message]==true;**<:AR_redtick:786483262997790731> Access Denied Type Numbers Not Messages. Usage: \`$getServerVar[prefix]purge <number_of_messages >\`**]
$description[<:AR_greentick:786483228756148265> Successfully Purged $message[1] messages .]
$color[GREEN] 
$deleteIn[2s]`
});