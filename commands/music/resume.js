module.exports = ({
    name: "resume",
    aliases: ['Resume'],
    code: `$resumeSong $addCmdReactions[▶️]
$onlyIf[$voiceID!=;To resume music, please join VC.]`
});
