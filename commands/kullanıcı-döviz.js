module.exports = [{
  name:"döviz",
  prototype:"slash",
  type:"interaction",
  code:`
$interactionFollowUp[;{newEmbed:{timestam   p:ms}{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{title:Güncel Döviz Kuru}{description:**İsim** \n $jsonRequest[https://zero-two.rodzen.repl.co/doviz/dolar;name]\n**Code**
$jsonRequest[https://zero-two.rodzen.repl.co/doviz/dolar;code]
**Alış**
📥 $jsonRequest[https://zero-two.rodzen.repl.co/doviz/dolar;buying]
**Satış**
📤 $jsonRequest[https://zero-two.rodzen.repl.co/doviz/dolar;selling]}}]
$interactionDefer
`
}  ,{
  name:"c-döviz",
  code:`
  $createApplicationCommand[$guildID;döviz;Döviz Kurunu Gösterir;true;slash]
  `
}]
