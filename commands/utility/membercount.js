module.exports = ({
    name: "membercount",
    aliases: ['member','members'],
    code: `$title[Membercount]




$description[<:AR_members:791205699627253771> Total Members : $membersCount[$guildID]
<:AR_online:791203098013335582> Online : $membersCount[$guildID;online]
<:AR_idle:791203438251868160> Idel : $membersCount[$guildID;Idle]
<:AR_dnd:791203725494452224> DND : $membersCount[$guildID;dnd]
<:AR_offline:791203633462378496> Offline : $membersCount[$guildID;offline]]
$color[00ffff]
   `
});