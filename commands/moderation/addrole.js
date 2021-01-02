module.exports = ({
  name: "addrole",
  aliases: ['giverole'],
  code: `
    $giveRoles[$findUser[$message[1]];$findRole[$message[2]]]
    
    $description[<:AR_greentick:786483228756148265> Added $roleName[$findRole[$message[2]]] to \`$userTag[$findUser[$message[1]]]\`]
    $color[36F4A2]
    
    $onlyIf[$roleExists[$findRole[$message[2]]]==true;{description:<:AR_redtick:786483262997790731> Please  give a valid role id.Usage- $getServerVar[prefix]addrole (user) (role)} {color:ff0000}]
    
    
    $onlyIf[$userExists[$findUser[$message[1]]]==true; {description:<:AR_redtick:786483262997790731> Please give a valid user id .Usage- $getServerVar[prefix]addrole (user) (role)} {color:ff0000}]
    
    $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{description:<:AR_redtick:786483262997790731> That user is higher or same as me on role position} {color:ff0000}]
    
    $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{description:<:AR_redtick:786483262997790731> That user is higher than you on role position.} {color:ff0000}]
    
    $argsCheck[2; {description:<:AR_redtick:786483262997790731>Please mention user and role . Usage- $getServerVar[prefix]addrole (user) (role)} {color:ff0000}]
    
    
    $onlyIf[$message[2]!=;{description:<:AR_redtick:786483262997790731> Please mention the role . Usage- $getServerVar[prefix]addrole (user) (role)} {color:ff0000}]
    
    $onlyIf[$message[1]!=;{description:<:AR_redtick:786483262997790731> Please mention the user . Usage- $getServerVar[prefix]addrole (user) (role)} {color:ff0000}]
    $onlyIf[$findUser[$message[1]] !=$ownerID;{description:You can't use this to a server owner} {color:ff0000}]
    
    $onlyPerms[manageserver;manageroles;{description:<:AR_redtick:786483262997790731> You don't have \`MANAGE_ROLES\` perms .} {color:ff0000}]
    
    `
});                                         

