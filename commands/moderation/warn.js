module.exports = ({
 name: "warn",
 code: `

$sendDM[$findUser[$message[1]];{title:You received a warn from $serverName} {description: Reason-$sliceMessage[1] 

It is your $sum[$getUserVar[warn;$findUser[$message[1]]];1] no. warn .} {footer: Moderator- $userTag[$authorID] | ID- $authorID} {color:ff4545}]

$color[36ff75]
$description[<:AR_greentick:786483228756148265> **$userTag[$findUser[$message[1]]] warned | Reason:** $sliceMessage[1] ]

$setUserVar[warn;$sum[$getUserVar[warn;$findUser[$message[1]]];1];$findUser[$message[1]]]
$onlyIf[$checkContains[$message;check]==false;]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{description:<:AR_redtick:786483262997790731> That user is higher or same as me on role position} {color:ff0000}]
$onlyIf[$findUser[$message[1]]!=$authorID;{description:You can't use this to a server owner} {color:ff0000}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{description:<:AR_redtick:786483262997790731> That user is higher than you on role position.} {color:ff0000}]
$onlyIf[$findUser[$message[1]]!=$ownerID;{description:You can't use this to a server owner} {color:ff0000}]
$onlyIf[$userExists[$findUser[$message[1]]]==true; {description:<:AR_redtick:786483262997790731> Please give a valid user id .Usage- $getServerVar[prefix]warn (user) (reason)} {color:ff0000}]
$onlyPerms[manageroles;kick;{color:ff0000} {description:<:AR_redtick:786483262997790731> You don't have \` MANAGE_ROLES\` or \`KICK\` permission . You cannot use this command . }]
$argsCheck[>2;{color:ff0000} {description: Invalid Usage . Usage- \`$getServerVar[prefix]warn (user) (reason)]

`
});

 