module.exports = [{
  name:"cf",
  prototype:"slash",
  type:"interaction",
  "$if":"v4",
  code:`
  $let[e;$randomText[false;false;true]]
  $if[$get[e]==false]
  $interactionReply[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{author:Kaybettiniz...:$authorAvatar}{description:
  $getVar[ekotu] | \`\$slashOption[miktar]\`\ Anya Dolarcığı Kaybettiniz
  }}]
  $setUserVar[anyadolar;
  $endif
  `
}]