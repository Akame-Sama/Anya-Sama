module.exports = [{
  name:"çal",
  type:"interaction",
  prototype:"slash",
  "$if":"v4",
  code:`
  $if[$slashOption[miktar]<$getUserVar[anyadolar;$slashOption[kullanıcı]]]
  $interactionReply[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$slashOption[kullanıcı]]}{timestamp:ms}{author:$slashOption[miktar] Anya Doları Çaldınız:$authorAvatar}{description:
  <@$slashOption[kullanıcı]> Adlı Kullanıcının Anya Dolarcıkları Uçtu
  }};;;;;no]
  $setUserVar[anyadolar;$sum[$getUserVar[anyadolar;$authorID];$slashOption[miktar]];$authorID]
  $setUserVar[anyadolar;$sub[$getUserVar[anyadolar;$slashOption[kullanıcı]];$slashOption[miktar]];$slashOption[kullanıcı]]
  $endif
  $if[$slashOption[miktar]> $getUserVar[anyadolar;$slashOption[kullanıcı]]]
  $interactionReply[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{author:Anya Hırsızlığına Engel Oldu:$authorAvatar}{description:
  \`\ Sebep : $userTag[$slashOption[kullanıcı]] Adlı Arkadaşın Fakrilik Sorunları Var \`\
  }};;;;;no]
  
  $endif
  $if[$getUserVar[anyakoruma;$slashOption[kullanıcı]]==aktif]
  $interactionReply[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{author:Anya Dolarcıkları Korudu:$authorAvatar}{description:
  Anyacık Dolarları Korumak İçin Önlem Almış Saldırı Geri Püskürtüldü.
  }};;;;;no]
  $endif
  `
 },{
   name:"c-çal",
   code:`
   o7
   $createApplicationCommand[$guildID;çal;Anyanın Dolarlarını Çalarsınız;true;slash;kullanıcı:Lütfen Birini Etiketleyin:true:6;miktar:Lütfen Çalacağınız Miktarda Para Girin:true:4]
   `
   }]