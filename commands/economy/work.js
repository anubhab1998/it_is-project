module.exports = ({
    name: "work",
    code: `$globalCooldown[10s; **You are tired** and therefore have to wait %time% to work again!] 
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money;$authorID];$random[20;200]];$authorID] 
$author[$username;$authorAvatar] 
$description[You Worked as $randomText[YouTuber; Plumber;Scientist;Photographer;Receptionist;Technician;Tailor;Teacher;Barber;Dentist;Doctor;Lawyer;Technician;Accountant;Actor;Actress;Air traffic controller;Architect;Artist;Attorney;Bank Manager;Bartender;Barber;Bookkeeper;Builder;Businessperson;Butcher;Carpenter;Cashier;Chief;Coach;Dental Hygienist;Dentist;Designer;Developer;Dietician;Doctor;Economist;Editor;Electrician;Engineer], and earned $getServerVar[ecocustom]**$random[20;200]** !
$color[45f542]]
$addTimestamp
$footer[$username worked | Protip: Deposit all the money in the bank so that no one can rob you . ]
$thumbnail[https://cdn.discordapp.com/attachments/716583846468124688/776182596279336990/work-icon-png-18.jpg]`
});