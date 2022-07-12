module.exports = [{
  name:"kick",
  type:"interaction",
  prototype:"slash",
  code:`
  $kick[$slashOption[kullanıcı];$guildID;$slashOption[sebep]]
  $interactionReply[;{newEmbed:{color:$getVar[hex]}{timestamp:ms}{thumbnail:$userAvatar[$slashOption[kullanıcı]]}{author:Bir Kullanıcı Banlandı:$authorAvatar}{description:
    **Atılan Kullanıcı**: \`\$username[$slashOption[kullanıcı]]\`\ \n
 **Atılma Sebebi**: \`\$slashOption[sebep] $djsEval[ let sebep = "$slashOption[sebep]" 
 sebep.replace("","Bir Sebep Girilmemiş");no]\`\ \n
 **Atan Yetkili**:\`\$username[$authorID]\`\
}};;;;;no]
$sendDm[{newEmbed:{color:$getVar[hex]}{thumbnail:$serverIcon}{title:$serverName[$guildID] Adlı Sunucudan Atıldın}{description: \`\Sebep\`\: \`\$slashOption[sebep]\`\}};$slashOption[kullanıcı];no]
$onlyPerms[kick;{ "content":"$getVar[cross] Bunu Kullanmak İçin \`\Kick\`\ Yetkisine Sahip Olmalısın","ephemeral": true, "options":{ "interaction": true}}]
$onlyBotPerms[kick;{"content":"$getVar[cross] Bu Komutu Bu Sunucuda Kullanmam İçin \`\Kick\`\ Yetkisine Sahip Olmalıyım","ephemeral":true,"options":{
"interaction":true}}]

$onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$slashOption[kullanıcı]]];{"content":"$getServerVar[cross] <@$authorID>, rolünden üstte veya eşit birini sunucudan atamazsın","ephemeral":true,"options":{
"interaction":true}}]

  `
 },{
   name:"c-kick",
   code:`
   o7
   $createApplicationCommand[$guildID;kick;Bir Kullanıcıyı Sunucudan Atarsınız;true;slash; kullanıcı:Lütfen Birini Etiketleyin:true:6;sebep: Lütfen Bir Sebep Girin:true:3]
   `
   }]