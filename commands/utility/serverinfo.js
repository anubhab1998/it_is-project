module.exports = ({
    name: "serverinfo",
    code: `$author[$serverName[$guildID] Information;$serverIcon]
    $thumbnail[$serverIcon]





$addField[Server Icon:;[Download Server Icon\\]($serverIcon)]
$addField[Server's Features:;$serverFeatures]
$addField[Verification Level:;$serverVerificationLevel]
$addField[Total Boosts:;$serverBoostCount]
$addField[Total Emojis:;$emojiCount/100]
$addField[Total Roles:;$roleCount]
$addField[Total Channels:;<:AR_textchannel:785904503614210089>$channelCount[text]
<:AR_voicechannel:785904608928333834>$channelCount[voice]]
$addField[Total Members:;$membersCount[$guildID]]
$addField[Server Region:;$serverRegion]
$addField[Server Owner:;$username[$ownerID]#$discriminator[$ownerID]]
$addField[Created On:;$creationDate[$guildID]]
$addTimestamp
$color[00FFFF]
$footer[ID: $guildID]
`
});