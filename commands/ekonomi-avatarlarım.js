module.exports=[{
name:"avatarlarım", 
type:"interaction", 
prototype:"slash", 
code:`
$interactionReply[;{newEmbed:{author:1. Avatar:$userAvatar[$authorID]}{description:  Yuri Briar \n

$replaceText[$replaceText[$getUserVar[avatar1];aktif;$getVar[emutlu] Sende Bulunuyor ];kapalı;$getVar[ekotu] Sende Bulunmuyor]}

{image:https://media.discordapp.net/attachments/987629023813333012/995360293536419880/8133641e-cb7c-4c6f-a953-5fb6655ae621.jpeg}{color:FFFFFF}};{actionRow:{button:➡️:1:ileri2:no}{button:⬅️:2:geri5:no}}] 
`},{
name:"ileri1", 
type:"interaction", 
prototype:"button", 
code:`
$interactionUpdate[;{newEmbed:{author:1. Avatar:$userAvatar[$authorID]}{description:  Yuri Briar \n

$replaceText[$replaceText[$getUserVar[avatar1];aktif;$getVar[emutlu] Sende Bulunuyor ];kapalı;$getVar[ekotu] Sende Bulunmuyor]}

{image:https://media.discordapp.net/attachments/987629023813333012/995360293536419880/8133641e-cb7c-4c6f-a953-5fb6655ae621.jpeg}{color:FFFFFF}};{actionRow:{button:➡️:1:ileri2:no}{button:⬅️:2:geri5:no}}] 
`},{
name:"ileri2", 
type:"interaction", 
prototype:"button", 
code:`
$interactionUpdate[;{newEmbed:{author:2. Avatar:$userAvatar[$authorID]}

{description: Damian Desmond \n

$replaceText[$replaceText[$getUserVar[avatar2];aktif;$getVar[emutlu] Sende Bulunuyor ];kapalı;$getVar[ekotu] Sende Bulunmuyor]}

{image:https://media.discordapp.net/attachments/987629023813333012/995360267099709450/Spy_x_Family_.jpeg}[$authorID]}{color:FFFFFF}};{actionRow:{button:➡️:1:ileri3:no}{button:⬅️:2:geri1:no}}]
  `
},{
name:"ileri3", 
type:"interaction", 
prototype:"button", 
code:`
$interactionUpdate[;{newEmbed:{author:3. Avatar:$userAvatar[$authorID]}

{description: Yor Forger \n

$replaceText[$replaceText[$getUserVar[avatar3];aktif;$getVar[emutlu] Sende Bulunuyor ];kapalı;$getVar[ekotu] Sende Bulunmuyor]}

{image:https://media.discordapp.net/attachments/987629023813333012/995360277946179644/9abab80c-4879-41c9-ac73-689f74011ac5.jpeg}{color:FFFFFF}};{actionRow:{button:➡️:1:ileri4:no}{button:⬅️:2:geri2:no}}] 
`},{
name:"ileri4", 
type:"interaction", 
prototype:"button", 
code:`
$interactionUpdate[;{newEmbed:{author:4. Avatar:$userAvatar[$authorID]}

{description: Loid Forger \n

$replaceText[$replaceText[$getUserVar[avatar4];aktif;$getVar[emutlu] Sende Bulunuyor ];kapalı;$getVar[ekotu] Sende Bulunmuyor]}

{image:https://media.discordapp.net/attachments/987629023813333012/995360285017780224/e030d4ba-92c4-4701-8da6-a9adf8f27996.jpeg}{color:FFFFFF}};{actionRow:{button:➡️:1:ileri5:no}{button:⬅️:2:geri3:no}}]
  `
},{
name:"ileri5", 
type:"interaction", 
prototype:"button", 
code:`
$interactionUpdate[;{newEmbed:{author:5. Avatar:$userAvatar[$authorID]}

{description: Anya-Sama  \n

$replaceText[$replaceText[$getUserVar[avatar5];aktif;$getVar[emutlu] Sende Bulunuyor ];kapalı;$getVar[ekotu] Sende Bulunmuyor]}

{image:https://media.discordapp.net/attachments/987629023813333012/995360443184971857/3729cf16-1381-4ebf-928b-427e280f3f58.jpeg}{color:FFFFFF}};{actionRow:{button:➡️:1:ileri1:no}{button:⬅️:2:geri4:no}}] 
`},{
name:"geri1", 
type:"interaction", 
prototype:"button", 
code:`
$interactionUpdate[;{newEmbed:{author:1. Avatar:$userAvatar[$authorID]}

{description: Yuri Briar \n

$replaceText[$replaceText[$getUserVar[avatar1];aktif;$getVar[emutlu] Sende Bulunuyor ];kapalı;$getVar[ekotu] Sende Bulunmuyor]}

{image:https://media.discordapp.net/attachments/987629023813333012/995360293536419880/8133641e-cb7c-4c6f-a953-5fb6655ae621.jpeg}{color:FFFFFF}};{actionRow:{button:➡️:1:ileri2:no}{button:⬅️:2:geri5:no}}]
  `
},{
name:"geri2", 
type:"interaction", 
prototype:"button", 
code:`
$interactionUpdate[;{newEmbed:{author:2. Avatar:$userAvatar[$authorID]}

{description: Damian Desmond \n

$replaceText[$replaceText[$getUserVar[avatar2];aktif;$getVar[emutlu] Sende Bulunuyor ];kapalı;$getVar[ekotu] Sende Bulunmuyor]}

{image:https://media.discordapp.net/attachments/987629023813333012/995360267099709450/Spy_x_Family_.jpeg}{color:$getVar[hex]}};{actionRow:{button:➡️:1:ileri3:no}{button:⬅️:2:geri1:no}}] 
`},{
name:"geri3", 
type:"interaction", 
prototype:"button", 
code:`
$interactionUpdate[;{newEmbed:{author:3. Avatar:$userAvatar[$authorID]}

{description: Yor Forger \n

$replaceText[$replaceText[$getUserVar[avatar3];aktif;$getVar[emutlu] Sende Bulunuyor ];kapalı;$getVar[ekotu] Sende Bulunmuyor]}

{image:https://media.discordapp.net/attachments/987629023813333012/995360277946179644/9abab80c-4879-41c9-ac73-689f74011ac5.jpeg}{color:FFFFFF}};{actionRow:{button:➡️:1:ileri4:no}{button:⬅️:2:geri2:no}}]
  `
},{
name:"geri4", 
type:"interaction", 
prototype:"button", 
code:`
$interactionUpdate[;{newEmbed:{author:4. Avatar:$userAvatar[$authorID]}

{description: Loid Forger \n

$replaceText[$replaceText[$getUserVar[avatar4];aktif;$getVar[emutlu] Sende Bulunuyor ];kapalı;$getVar[ekotu] Sende Bulunmuyor]}

{image:https://media.discordapp.net/attachments/987629023813333012/995360285017780224/e030d4ba-92c4-4701-8da6-a9adf8f27996.jpeg}{color:FFFFFF}};{actionRow:{button:➡️:1:ileri5:no}{button:⬅️:2:geri3:no}}] 
`},{
name:"geri5", 
type:"interaction", 
prototype:"button", 
code:`
$interactionUpdate[;{newEmbed:{author:5. Avatar:$userAvatar[$authorID]}

{description: Anya-Sama  \n

$replaceText[$replaceText[$getUserVar[avatar5];aktif;$getVar[emutlu] Sende Bulunuyor ];kapalı;$getVar[ekotu] Sende Bulunmuyor]}

{image:https://media.discordapp.net/attachments/987629023813333012/995360443184971857/3729cf16-1381-4ebf-928b-427e280f3f58.jpeg}{color:FFFFFF}};{actionRow:{button:➡️:1:ileri1:no}{button:⬅️:2:geri4:no}}] 
`}]



