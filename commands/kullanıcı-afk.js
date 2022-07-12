module.exports = [{
  name:"afk",
  type:"interaction",
  prototype:"slash",
  code:`
  $interactionReply[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$authorID]}{title: Başarıyla Afk Oldun }{timestamp:ms}{description:🍄 • Başarıyla Afk Oldun}};;;;yes]
  $setGlobalUserVar[afksebep;$slashOption[reason]]
  $setGlobalUserVar[afk;evet]
  $setGlobalUserVar[afks;$dateStamp]
`},{
  name:"$alwaysExecute",
  code:`
$deleteIn[15s]
$setGlobalUserVar[afkmsj;$message;$mentioned[1]]
$setGlobalUserVar[afket;$sum[$getGlobalUserVar[afket;$mentioned[1]];1];$mentioned[1]]
$reply[$messageID;yes]
$description[1;🤨 • Etiketlediğiniz Kişi \`\$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$math[$dateStamp-$getglobaluservar[afks;$mentioned[1]]];time];and;ve;1];seconds;Saniye;1];minutes;Dakika;1];hours;Saat;1];days;Gün;1];weeks;Hafta;1];months;Ay;1];years;Yıl;1];second;Saniye;1];minute;Dakika;1];hour;Saat;1];day;Gün;1];week;Hafta;1];month;Ay;1];year;Yıl;1]\`\ süredir afk.

    
🤨 • Etiketlediginiz Kişi $getGlobalUserVar[afksebep;$mentioned[1]] Sebebiyle afk.
]
$color[1;$getVar[hex]]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$addTimestamp[1]
$onlyIf[$getGlobalUserVar[afk;$mentioned[1;no]]==evet;]
`},{
  name:"$alwaysExecute",
  code:`
  $color[1;$getVar[hex]]
  $thumbnail[1;$userAvatar[$authorID]]
  $addTimestamp[1]
  $resetGlobalUserVar[afksebep]
  $resetGlobalUserVar[afk]
  $resetGlobalUserVar[afks]
  $resetGlobalUserVar[afkmsj]
  $setGlobalUserVar[afket;0]
   $description[1;🤨 • \`\$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$math[$dateStamp-$getglobaluservar[afks;$mentioned[1]]];time];and;ve;1];seconds;Saniye;1];minutes;Dakika;1];hours;Saat;1];days;Gün;1];weeks;Hafta;1];months;Ay;1];years;Yıl;1];second;Saniye;1];minute;Dakika;1];hour;Saat;1];day;Gün;1];week;Hafta;1];month;Ay;1];year;Yıl;1]\`\ süredir afk idin .
    
🤨 •  $getGlobalUserVar[afksebep;$mentioned[1]] Sebebiyle afk idin.

🤨 • Toplam \`\$getGlobalUserVar[afket]\`\ Kere Etiketlendin

🤨 • En Son Etiketlendigin Mesaj : \`\$getGlobalUserVar[afkmsj]\`\


]
   $onlyIf[$getGlobalUserVar[afk]==evet]
  `
  },{
    name:"c-afk",
    code:`
    o7
$createApplicationCommand[$guildID;afk;Afk Kalırsınız;true;slash;reason:Lütfen Bir Sebep Giriniz:false:3]
$onlyForIDs[$botOwnerID;😑]
    `
  }]