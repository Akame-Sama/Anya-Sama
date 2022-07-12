module.exports = [{
  name:"günlük",
  type:"interaction",
  prototype:"slash",
  code:`
  $setUserVar[anyadolar;$sum[$getUserVar[anyadolar;$authorID];$random[1;1000]];$authorID]

  $interactionReply[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{timestamp:ms}{author:Beleş Anya Dolarcıkları:$authorAvatar}{description:
  $getVar[emutlu] | \`\ $random[1;1000] \`\  Anyacık Doları Kazandın 
  }};;;;;no]
  `
  },{
    name:"c-günlük",
    code:`
   o7
  $createApplicationCommand[$guildID;günlük;Günlük Olarak Anyacık Size Ödüller Verir;true;slash]
    `
    }]
