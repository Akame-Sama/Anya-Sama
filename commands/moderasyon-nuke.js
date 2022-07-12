module.exports = [{
  name:"nuke",
  prototype:"slash",
  type:"interaction",
  code:`
    

  $deleteChannels[$slashOption[kanal]]

  

$let[kanal;$cloneChannel[$slashOption[kanal];$channelName[$slashOption[kanal]];yes]]
$wait[5s]
  $interactionReply[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{timestamp:ms}{author:Bu Kanal Nukelendi:$authorAvatar}{description:
  Nukeleyen Kişi:\`\$authorID\`\ \n
  Nukelenen Kanal:\`\$slashOption[kanal]\`\ \n
  Nukelenme Tarihi: \`\$sum[3;$hour]:$minute/$day/$month/$year\`\

  }};;;;;yes]

$onlyPerms[managechannel;{"options":"$getVar[cross] Bu Komudu Kullanmak İçin \`\Kanallari_Sil\`\ Yetkinizin Bulunması Lazım","ephemeral":true,"options":{
"interaction":true
}
}]
$onlyBotPerms[managechannel;{"options":"$getVar[cross] Bu Komudu Kullanmak İçin \`\Kanallari_Sil\`\ Yetkimin Bulunması Lazım","ephemeral":true,"options":{

"interaction":true

}

}]
  `
  },{
    name:"c-nuke",
    code:`
    o7
    $createApplicationCommand[$guildID;nuke;Bir Kanal Nukelersiniz;true;slash;kanal:Bir Kanal Etiketleyin:true:7]
    
    `
    }]