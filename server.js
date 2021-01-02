const dbd = require('dbd.js');

const bot = new dbd.Bot({
	token: process.env.TOKEN ,
	prefix: ["$getServerVar[prefix]","e!","<@775067396485546005>"]
});

bot.onMessage();

//commands

const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
aliases: command.aliases,
code: command.code
})
} 
}

//Dev cmds

bot.readyCommand({
 channel: "785227253700100096",
 code: `
<@&792271085789118505> 
$log[Ready! Watching $serverCount and $allMembersCount Members!]
$description[Restarting Bot . Please be patient . ]
$color[ff000]


$editIn[10s;{title:Bot Restarted} {description:
Bot restarted due to a crash update  .
**Watching $serverCount Servers!**
**Watching $allMembersCount Members!**
**Watching $commandsCount commands!**} {color:ff000} {timestamp} {footer:PING- $pingms:}
]

`
});



//No prefix Command

bot.command({
  name: "<@782851016634400769>",
  code: `$author[$username[782851016634400769];$userAvatar[782851016634400769]]
$thumbnail[$userAvatar[782851016634400769]]
$color[ff0000]
$addField[SUPPORT SERVER LINK;[Support Server\\]($getServerInvite[777177349887361064])]
$addField[BOT INVITE LINK;[Invite Me\\](https://discord.com/oauth2/authorize?client_id=782851016634400769&scope=bot&permissions=2146958847)]
$addField[FOR HELP;\`$getServerVar[prefix]help\`]
$addField[BOT'S SERVER PREFIX;\`$getServerVar[prefix]\`]
$addField[BOT'S GLOBAL PREFIX;\`$getVar[prefix]\`]
$footer[Bot developed by $username[765917032281276426]#$discriminator[765917032281276426];$userAvatar[765917032281276426]]
$addTimestamp`,
nonPrefixed: true
})

//status

bot.status({
  text: '!help | $pingms ping',
  type: 'LISTENING',
  time: 12
});

bot.status({
  text: '$serverCount servers & $allMembersCount members',
  type: 'WATCHING',
  time: 12
});

bot.status({
  text: 'Version 2',
  type: 'LISTENING',
  time: 12
});

bot.status({
	text: 'Version 2 have some bug | Found a bug feel free to report it',
	type: 'PLAYING',
	time: 12
});

bot.status({
	text: 'High quality music',
	type: 'STREAMING',
	time: 12
}); 

bot.status({
  text: 'Your suggestions (=suggest)',
  type: 'WATCHING',
  time: 12
});





//variables

bot.variables({
	prefix: '!', //bot prefix
	wchannel: '', //welcome
  wtitle: 'WELCOME TO THE SERVER', //welcome
  wdescription: 'Hey {username} , Just joined . And we have now {server(members)} .',
  wthumbnail: 'https://cdn.discordapp.com/attachments/680365781023719454/722026155292622939/64606986881607.5da714d2001f6.gif',
  wimage: 'https://cdn.discordapp.com/attachments/785919679399067699/786270220888309760/images_3.jpeg',
  ecocustom: '$', //economy
  Money: '0', //economy
  Bank: '0', //economy
  user_ID: '',     //snipe
  user_message: '',  //snipe
  warn: '0', // mod warn
  
});


//help

bot.command({
name: "help",
code: `$reactionCollector[$splitText[1];$authorID;1h;🔄,1️⃣,2️⃣,3️⃣,4️⃣,5️⃣;awaitReaction1,awaitReaction2,awaitReaction3,awaitReaction4,awaitReaction5,awaitReaction6;yes]
$textSplit[$sendMessage[{title: Help} {description:Help Command Pages:
1️⃣ - Moderation Related Commands
2️⃣ - Fun Related Commands
3️⃣ - Music Related Commands
4️⃣ - Economy Related Commands
5️⃣ - Utility Related Commands

} {field:Useful Links:[Invite Bot\\]($getBotInvite) | [Support Server\\]($getServerInvite[777177349887361064]) | [Upvote Bot\\](https://top.gg/bot/775067396485546005/vote)} {color:RANDOM};yes]; ]`
});

//Return Home Page

 bot.awaitedCommand({
 name: "awaitReaction1",
 code: `$editMessage[$message[1];{title:Help} {description:Help Command Pages:
1️⃣ - Moderation Related Commands
2️⃣ - Fun Related Commands
3️⃣ - Music Related Commands
4️⃣ - Economy Related Commands
5️⃣ - Utility Related Commands} {field:Useful Links:[Invite Bot\\]($getBotInvite) | [Support Server\\]($getServerInvite[777177349887361064]) | [Upvote Bot\\](https://top.gg/bot/775067396485546005/vote)} {color:RANDOM}
]
`});

//page 1

bot.awaitedCommand({
 name: "awaitReaction2",
 code: `
 $editMessage[$message[1];{title:Moderation Commands} {description:
  \`$getServerVar[prefix]addrole\` (user/user ID) (role/role ID)
 \`$getServerVar[prefix]checkwarns\` (user)
 \`$getServerVar[prefix]purge\` (No. of message to be purged)
 \`$getServerVar[prefix]removeWarn\` (No. of warns to be removed)
 \`$getServerVar[prefix]removerole\` (user/user ID) (role/role ID)
 \`$getServerVar[prefix]warn\` (user) (reason)
 } {color:00ff55} 
{field:Useful Links:[Invite Bot\\]($getBotInvite) | [Support Server\\]($getServerInvite[777177349887361064]) | [Upvote Bot\\](https://top.gg/bot/775067396485546005/vote)}
{footer:🔄 - Return to home page}
]
 `
});

//Page 2

bot.awaitedCommand({
 name: "awaitReaction3",
 code: `
 $editMessage[$message[1];{footer:🔄 - Return to home page}
{title:Fun Commands} {description:\`$getServerVar[prefix]3000\`
\`$getServerVar[prefix]Clyde\` (text)
\`$getServerVar[prefix]baby\` (user)
\`$getServerVar[prefix]caution\` (text)
\`$getServerVar[prefix]chalk\` (text)
\`$getServerVar[prefix]changemymind\` (text)
\`$getServerVar[prefix]choco\` (user)
\`$getServerVar[prefix]draw\` (user)
\`$getServerVar[prefix]eject\` (user)
\`$getServerVar[prefix]feed\` (user)
\`$getServerVar[prefix]ferbtv\` (user)
\`$getServerVar[prefix]foodbrake\` (user)
\`$getServerVar[prefix]forfivehours\` 
\`$getServerVar[prefix]genie\` ()
\`$getServerVar[prefix]glass\` (user)
\`$getServerVar[prefix]heart\` (user)
\`$getServerVar[prefix]hug\` (user)
\`$getServerVar[prefix]iftheyknow\` (text)
\`$getServerVar[prefix]joke\`
\`$getServerVar[prefix]kiss\` (user)
\`$getServerVar[prefix]lookwhatkarenhave\`
\`$getServerVar[prefix]meme\`
\`$getServerVar[prefix]minecraft\` (text)
\`$getServerVar[prefix]respect\` (user)
\`$getServerVar[prefix]rip\` (user)
\`$getServerVar[prefix]shoot\` (user)
\`$getServerVar[prefix]slap\` (user)
\`$getServerVar[prefix]spongeburn\` (text)
\`$getServerVar[prefix]tableflip\` (user)
\`$getServerVar[prefix]tatto\` (user)
\`$getServerVar[prefix]thisguy\` (user)
\`$getServerVar[prefix]thuglife\` (user)
\`$getServerVar[prefix]tickle\` (user)
\`$getServerVar[prefix]tinder\` (user)
\`$getServerVar[prefix]waste\` (user)
\`$getServerVar[prefix]water\` (text)
\`$getServerVar[prefix]wide\` (user)
\`$getServerVar[prefix]worthless\` (user)
\`$getServerVar[prefix]youtubecomment\` (your comment here)} 
{field:Useful Links:[Invite Bot\\]($getBotInvite) | [Support Server\\]($getServerInvite[777177349887361064]) | [Upvote Bot\\](https://top.gg/bot/775067396485546005/vote)}
{color:00ff55} 
]
 `
});

//Page 3

bot.awaitedCommand({
 name: "awaitReaction4",
 code: `
 $editMessage[$message[1];{footer:🔄 - Return to home page}
{author:Page 3} {title: Music Commands} {description:\`$getServerVar[prefix]play\` :- For  play a song
\`$getServerVar[prefix]pause\` :- For pause a song
\`$getServerVar[prefix]resume\` :- To resume a song
\`$getServerVar[prefix]skip\` :- To skip a song
\`$getServerVar[prefix]stop\` :- To stop a song
\`$getServerVar[prefix]volume\` :- To set volume
\`$getServerVar[prefix]np\` :- To Check a Now Playing Song
\`$getServerVar[prefix]queue\` :- To check the queue
\`$getServerVar[prefix]lyrics\` :- To Check lyrics of a song } 
{field:Useful Links:[Invite Bot\\]($getBotInvite) | [Support Server\\]($getServerInvite[777177349887361064]) | [Upvote Bot\\](https://top.gg/bot/775067396485546005/vote)}
{color:00ff55} 
]
 `
});

//Page 4

bot.awaitedCommand({
 name: "awaitReaction5",
 code: `
 $editMessage[$message[1];{footer:🔄 - Return to home page}
{title:Page 4} {description:Hello again! New Page! Edit Here!} 
{field:Useful Links:[Invite Bot\\]($getBotInvite) | [Support Server\\]($getServerInvite[777177349887361064]) | [Upvote Bot\\](https://top.gg/bot/775067396485546005/vote)}
{color:00ff55} 
]
 `
});


//Page 5 

bot.awaitedCommand({
 name: "awaitReaction6",
 code: `
 $editMessage[$message[1];{footer:🔄 - Return to home page}
{title:Page 5} {description:Hello again! New Page! Edit Here!} 
{field:Useful Links:[Invite Bot\\]($getBotInvite) | [Support Server\\]($getServerInvite[777177349887361064]) | [Upvote Bot\\](https://top.gg/bot/775067396485546005/vote)}
{color:00ff55} 
]
 `
});

//Welcome 

bot.joinCommand({
        channel: "$getServerVar[wchannel]", 
        code: `<@$authorID>
$title[$getServerVar[wtitle]]
$thumbnail[$getServerVar[wthumbnail]]
$description[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[wdescription]{mention};<@$authorID>]{server};
$serverName]{user(proper)};$username[$authorID]#$discriminator[$authorID]]{server(members)};$membersCount]{username};$username]]
$color[RANDOM]
`
})
bot.onJoined()






//Call back Command

bot.onMessageDelete()

bot.deletedCommand({
 channel: "$channelID",
 code: `
$setChannelVar[user_message;$message]
$setChannelVar[user_ID;$authorID]
`
});

// Bot on new guild

bot.botJoinCommand({
channel: "794558162165301248",
code:`
$title[Bot Added]
$addField[**Server Location**;$serverRegion]
$addField[**Server Member**;$membersCount]
$addField[**Server Owner**;$userTag[$ownerID] ($ownerID)]
$addField[**Server Name**;$serverName ($guildID)]
$color[GOLD]
$addTimestamp`
})
bot.onGuildJoin()

// Bot on guild delete


bot.botLeaveCommand({
channel: "794558279211548672",
code:`
$title[Bot Removed]
$addField[**Server Location**;$serverRegion]
$addField[**Server Member**;$membersCount]
$addField[**Server Owner**;$userTag[$ownerID] ($ownerID)]
$addField[**Server Name**;$serverName ($guildID)]
$color[RED]
$addTimestamp`
})
bot.onGuildLeave()


// bot on join greetings













//test


bot.command({
name: 'youtube',
code: `
Search: $message
Title: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;title]
URL: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;url]
Thumbnail: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail]
Duration: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration]
Uploaded: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploaded]
Views: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;views]
Uploader: 
$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploader_name]
`})



