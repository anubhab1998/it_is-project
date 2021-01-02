module.exports = ({
    name: "resetprefix",
    aliases: ['rprefix'],
    code: `$resetServerVar[prefix]
$onlyPerms[admin;Sorry you haven't enough permission .]
Prefix has been reset to \`$getVar[prefix]\`  by **$username**`
});