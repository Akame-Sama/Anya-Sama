module.exports = [{
  name:"anya-avlan",
  type:"interaction",
  prototype:"slash",
  "$if":"v4",
  code:`
  $if[$randomText[1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;2;2;2;2;2;2;2;2;2;2;2;2;2;2;2;2;2;2;2;2;3;3;3;3;3;3;3;3;3;3;3;4;4;4;4;4;4;4;4;4;5]==1]
  $interactionReply[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{author:Anya-Farm'a Hoşgeldin:$authorAvatar}{description:
**$userName** Avlandın Ve $getVar[emutlu]   
\`\$randomText[$random[1;5];$random[1;2];$random[3;5];$random[2;3]]\`\ Adet Mutlu Anyacık Kazandın
}};;;;;no]
$setUserVar[mutlu_anya;$sum[$getGlobalUserVar[mutlu_anya];$randomText[$random[1;5];$random[1;2];$random[3;5];$random[2;3]]];$authorID]
 $endif
  $if[$randomText[1;1;1;1;1;1;1;1;1;1;1;1;2;2;2;2;2;2;2;2;3;3;3;3;3;3;3;3;3;3;4;4;4;4;4;4;4;4;4;5;5]==2]
   $interactionReply[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{author:Anya-Farm'a Hoşgeldin:$authorAvatar}{description:
   **$userName** Avlandın Ve $getVar[eyakalanmis]   
\`\$randomText[$random[1;5];$random[1;2];$random[3;5];$random[2;3]]\`\ Adet Yemek Yerken Yakalanan Anyacık Kazandın
}};;;;;no]
$setUserVar[yakalanan_anya;$sum[$getGlobalUserVar[yakalanan_anya];$randomText[$random[1;5];$random[1;2];$random[3;5];$random[2;3]]];$authorID]
 
  $endif
  $if[$randomText[1;1;1;1;1;1;1;1;1;1;1;1;2;2;2;2;2;2;2;2;3;3;3;3;3;3;3;3;3;3;4;4;4;4;4;4;4;4;4;5;5]==3]
 $interactionReply[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{author:Anya-Farm'a Hoşgeldin:$authorAvatar}{description:
 **$userName** Avlandın Ve $getVar[ekotu]   
\`\$randomText[$random[1;5];$random[1;2];$random[3;5];$random[2;3]]\`\ Adet Kötü Anyacık Kazandın
}};;;;;yes]
$setUserVar[kötü_anya;$sum[$getGlobalUserVar[kötü_anya];$randomText[$random[1;5];$random[1;2];$random[3;5];$random[2;3]]];$authorID]
  $endif
  $if[$randomText[1;1;1;1;1;1;1;1;1;1;1;1;2;2;2;2;2;2;2;2;3;3;3;3;3;3;3;3;3;3;4;4;4;4;4;4;4;4;4;5;5]==4]
   $interactionReply[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{author:Anya-Farm'a Hoşgeldin:$authorAvatar}{description:
   **$userName** Avlandın Ve $getVar[esaskin]   
\`\$randomText[$random[1;5];$random[1;2];$random[3;5];$random[2;3]]\`\ Adet Şaşkın Anyacık Kazandın
}};;;;;no]
$setUserVar[saskin_anya;$sum[$getGlobalUserVar[saskin_anya];$randomText[$random[1;5];$random[1;2];$random[3;5];$random[2;3]]];$authorID]
  $endif
  $if[$randomText[1;1;1;1;1;1;1;1;1;1;1;1;2;2;2;2;2;2;2;2;3;3;3;3;3;3;3;3;3;3;4;4;4;4;4;4;4;4;4;5;5]==5]
   $interactionReply[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{author:Anya-Farm'a Hoşgeldin:$authorAvatar}{description:
**$userName** Avlandın Ve $getVar[eac]   
\`\$randomText[$random[1;5];$random[1;2];$random[3;5];$random[2;3]]\`\ Adet Acıkmış Anyacık Kazandın
}};;;;;no]
$setUserVar[ac_anya;$sum[$getGlobalUserVar[ac_anya];$randomText[$random[1;5];$random[1;2];$random[3;5];$random[2;3]]];$authorID]
 
  $endif

  `
  } ,{
    name:"c-anyafarm",
    code:`
    o7
    $createApplicationCommand[$guildID;anya-avlan;Anya Çiftliğinden Anya Alırsınız;true;slash]
    `
    }]
