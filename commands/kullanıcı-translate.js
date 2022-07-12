module.exports = [{
  name:"çevir",
  type:"interaction",
  prototype:"slash",
  code:`
$interactionReply[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$authorID]}{timestamp:ms}{title:Translate İşlemi Başarılı}{description:$slashOption[msg] Adlı Mesajı $slashOption[dil] Kodlu Dile Çevirdiniz İşte Kelime/Cümle **-->** $jsonRequest[https://api.popcat.xyz/translate?to=$slashOption[dil]&text=$slashOption[msg];translated;Bilinmeyen Bir Hata Oluştu]}}]
`
},{
  name:"c-translate",
  code:`
  $createApplicationCommand[$guildID;translate;Anya Dil Çeviriyor;true;slash]
  `
}]