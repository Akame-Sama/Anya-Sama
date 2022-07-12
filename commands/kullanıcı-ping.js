module.exports = [{
  name:"ping",
  prototype:"slash",
  type:"interaction",
  code:`
  $interactionReply[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{timestamp:ms}{title: Mesaj Hızım}{description:$pingms}};;;;;no]
  `
},{
  name:"c-ping",
  code:`
  o7
  $createApplicationCommand[$guildID;ping;Botun Mesaj Hızını Gösterir;true;slash]
  $onlyForIDs[$botOwnerID;😑]
  `
  }]