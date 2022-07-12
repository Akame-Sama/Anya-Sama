module.exports = [{
  name:"anya-farm",
  type:"interaction",
  prototype:"slash",
  code:`
  $interactionReply[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{timestamp:ms}{author: İşte Senin Anya Çiftliğin:$authorAvatar}{description:
 • $getVar[eac] Yemek Yiyen Anya **-->** \`\$getUserVar[ac_anya;$authorID]\`\ \n
 • $getVar[esaskin] Şaşkın Anya **-->** \`\$getUserVar[saskin_anya;$authorID]\`\ \n
 • $getVar[eyakalanmis] Yemek Yerken Yakalanmış Anya **-->** \`\$getUserVar[yakalanan_anya;$authorID]\`\ \n
 • $getVar[emutlu] Mutlu Anya **-->** \`\$getUserVar[mutlu_anya;$authorID]\`\ \n
 • $getVar[ekotu] Kötü Anya **-->** \`\$getUserVar[kötü_anya;$authorID]\`\
  }};;;;;no]
  

  `
  },{
    name:"c-anya-farm",
    code:`
    o7
    $createApplicationCommand[$guildID;anya-farm;Sahip Olduğunuz Anyacıkları Gösterir;true;slash]
 `
    }]