module.exports = ({
    name: "stop",
    aliases: ['dc'],
    code: `$addCmdReactions[⏹️] $stopSong
$onlyIf[$voiceID!=;To stop music, please join a VC.]`
});
