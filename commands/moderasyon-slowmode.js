module.exports = [
  {
    name:"slowmode",
    type:"interaction",
    prototype:"slash",
    code:`
    $slowmode[$slashOption[süre]s;$slashOption[kanal]]
    $interactionReply[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{timestamp:ms}{author:Kanala Yavaş Mod Ayarlandı:$authorAvatar}
{description:
   Slowmode Kanalı : <#$slashOption[kanal]> \n
   Slowmode Süresi : \`\$slashOption[süre]\`\ \n
}};;;;;yes]
    $onlyPerms[managechannel;{"options":"$getVar[cross] Bu Komudu Kullanmak İçin \`\Kanalları_Yönet\`\ Yetkinizin Bulunması Lazım","ephemeral":true,"options":{

"interaction":true

}

}]

$onlyBotPerms[managechannel;{"options":"$getVar[cross] Bu Komudu Kullanmak İçin \`\Kanallari_Yönet\`\ Yetkimin Bulunması Lazım","ephemeral":true,"options":{

"interaction":true

}

}]
    `
},{
  name:"c-slowmode",
  code:`
  o7
  $createApplicationCommand[$guildID;slowmode;Kanala Yavaş Mod Eklersiniz;true;slash;kanal:Lütfen Bir Kanal Etiketleyin:true:7;süre:Lütfen Bir Süre Girin(Sadece Sayı Belirtin):true:4]
  `
  }]