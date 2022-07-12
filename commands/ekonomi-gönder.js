module.exports = [{
  name:"dolar-gönder",
  type:"interaction",
  prototype:"slash",
  "$if":"v4",
  code:`
  $setUserVar[anyadolar;$sub[$getUserVar[anyadolar;$authorID];$slashOption[miktar]];$authorID]
 $setUserVar[anyadolar;$sum[$getUserVar[anyadolar;$slashOption[kullanıcı]];$slashOption[miktar]];$slashOption[kullanıcı]]
 $interactionReply[;{newEmbed:{footer: Şapşik Dolarlarını Uçurdun}{color:$getVar[hex]}{timestamp:ms}{thumbnail:$userAvatar[$clientID]}{author:Anya-Dolarlar Uçuyor:$authorAvatar}{description:<@$authorID> Cömert Abi <@$slashOption[kullanıcı]> Adlı Arkadaşa \`\$slashOption[miktar] Adet Dolar Uçurdu}};;;;;no]
 $if[$slashOption[miktar] > $getUserVar[anyadolar;$authorID]]
 $interactionReply[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{timestamp:ms}{author:O Kadar Paran Mı Var Şapsık:$authorAvatar}{description:
 Şu Anki Paran => $getUserVar[anyadolar;$authorID]
 }};;;;;no]
 $endif
  `
  },{
    name:"c-dolar-gönder",
    code:`
    $createApplicationCommand[$guildID;dolar-gönder;Anyacıgın Dolarların Başka Bir Kullanıcıya Gönderirsiniz;true;slash;kullanıcı:Lütfen Birini Etiketle:true:6;miktar:Göndereceğin Miktarı Yaz:true:4]
    `
    }]