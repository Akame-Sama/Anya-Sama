module.exports = [{
  name:"meslek",
  type:"interaction",
  prototype:"slash",
  code:`
  $interactionReply[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{timestamp:ms}{author:Bir Meslek Seçiniz:$userAvatar[$clientID]}{field:1-Gizli Polis: Yor'un Biricik Kardeşi Yuri Briar O Bir Gizli Polis Fakat Biricik Ablasını Dışişlerinde Çalıştığı Yalanıyla Kandırıyor Ve Onun Maaşı 3000 Bin Anya Dolarcığı
    :yes}{field:2-Büyük İş Adamı : Desmond Şirketi Tüm Macera Aslında Desmondlar İçin? ve Çok Bir Büyük Şirketleri Var Fakat Anya-Sama Onların Aslında Kötü Şeyler Yaptığını Biliyor Bu Yüzden  Maaşları 5000 Bin Anya Dolarcığı
    :yes}{field:3-Seri Katil: Yor Mükemmel Bir Seri Katil Anya-Sama'nında Sahte Annesi Anya-Sama'da Onun Maaşını 10.000 Bin Anya Dolarcığı Yapmış 
    :yes}{field:4-Ajan: Loid Forger(Alacakaranlık)  O Mükemmel Ötesi Bir Ajan Anya-Sama nın Sahte Babası Anya Ona Hayran Desmomda Suikast Uygulamak İçin Tüm Bu Tantana Ve Anyacık  Onun Maaşı 15.000 Bin Anya Dolarcığı Olarak Belirlemiş 
    :yes}{field:5-Telepat: Anya-Samanın Önünde Diz Çök Sonsuz Anya'nın Şöhretini Tat
    :yes}};{actionRow:{button:➡️:1:go1:no}{button:⬅️:2:come5:no}}
 ]
  `
},{
  name:"go1",
  type:"interaction",
  prototype:"button",
  code:`
  $interactionUpdate[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{author:Gizli Polis:$userAvatar[$clientID]}{timestamp:ms}{description:
  ➡️ Bir Sonraki Mesleği Görüntülersiniz \n
  ⬅️ Bir Önceki Mesleği Görüntületsiniz \n
  🔴 Mesleği Seçersiniz \n
  $getVar[cross] İşlemi İptal Edersiniz \n
  
 -------------------------------------------------
 $customEmoji[yuri] Gizli Polis Mesleği Başlangıç İçin Güzel Seçim 15.000 Anya Doları İle Bu Mesleği Alabilirsin
  }};{actionRow:{button:Yuri:1:yuri:no:<:yuri:995616570233597962>}{button:İleri:2:go2:no:➡️}{button:Geri:3:come5:no:⬅️}{button:İptal:4:iptal:no:$getVar[cross]}};;;;;no]
  `
  },{
  name:"go2",
  type:"interaction",
  prototype:"button",
  code:`
  $interactionUpdate[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{author:Gizli Polis:$userAvatar[$clientID]}{timestamp:ms}{description:
  ➡️ Bir Sonraki Mesleği Görüntülersiniz \n
  ⬅️ Bir Önceki Mesleği Görüntületsiniz \n
  $customEmoji[desmond] Mesleği Seçersiniz \n
  $getVar[cross] İşlemi İptal Edersiniz \n
  
 -------------------------------------------------
 $customEmoji[desmond] İş Adamı Mesleği Güzel Seçim 25.000 Anya Doları İle Bu Mesleği Alabilirsin
  }};{actionRow:{button:$customEmoji[desmond]:1:desmond:no}{button:➡️:2:go3:no}{button:⬅️:3:come1:no}{button:$getVar[cross]:4:iptal:no}};;;;;no]
  `
  },{
  name:"go3",
  type:"interaction",
  prototype:"button",
  code:`
  $interactionUpdate[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{author:Gizli Polis:$userAvatar[$clientID]}{timestamp:ms}{description:
  ➡️ Bir Sonraki Mesleği Görüntülersiniz \n
  ⬅️ Bir Önceki Mesleği Görüntületsiniz \n
  $customEmoji[yor] Mesleği Seçersiniz \n
  $getVar[cross] İşlemi İptal Edersiniz \n
  
 -------------------------------------------------
 $customEmoji[yor] Seri Katil Ha Anya-Sama'nın Düşmanlarına Ölüm 50.000 Anya Doları İle Bu Mesleği Alabilirsin
  }};{actionRow:{button:$customEmoji[yor]:1:yor:no}{button:➡️:2:go4:no}{button:⬅️:3:come2:no}{button:$getVar[cross]:4:iptal:no}};;;;;no]
  `
  },{
  name:"go4",
  type:"interaction",
  prototype:"button",
  code:`
  $interactionUpdate[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{author:Gizli Polis:$userAvatar[$clientID]}{timestamp:ms}{description:
  ➡️ Bir Sonraki Mesleği Görüntülersiniz \n
  ⬅️ Bir Önceki Mesleği Görüntületsiniz \n
  $customEmoji[loid] Mesleği Seçersiniz \n
  $getVar[cross] İşlemi İptal Edersiniz \n
  
 -------------------------------------------------
 $customEmoji[loid] Gizli Polis Mesleği Başlangıç İçin Güzel Seçim 75.000 Anya Doları İle Bu Mesleği Alabilirsin
  }};{actionRow:{button:$customEmoji[loid]:1:loid:no}{button:➡️:2:go5:no}{button:⬅️:3:come3:no}{button:$getVar[cross]:4:iptal:no}};;;;;no]
  `
  },{
  name:"go5",
  type:"interaction",
  prototype:"button",
  code:`
  $interactionUpdate[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{author:Gizli Polis:$userAvatar[$clientID]}{timestamp:ms}{description:
  ➡️ Bir Sonraki Mesleği Görüntülersiniz \n
  ⬅️ Bir Önceki Mesleği Görüntületsiniz \n
  $customEmoji[anya] Mesleği Seçersiniz \n
  $getVar[cross] İşlemi İptal Edersiniz \n
  
 -------------------------------------------------
 $customEmoji[yuri] Senki Yüceler Yücesi Anya-Sama'nın Kutdal Mesleğine Erişebileceğinimi Sandın 100 Bin Milyon Trilyon Frilyon  Anya Doları İle Bu Mesleği Alabilirsin
  }};{actionRow:{button:$customEmoji[anya]:1:anya:no}{button:➡️:2:go1:no}{button:⬅️:3:come4:no}{button:$getVar[cross]:4:iptal:no}};;;;;no]
  `
  },{
  name:"come1",
  type:"interaction",
  prototype:"button",
  code:`
  $interactionUpdate[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{author:Gizli Polis:$userAvatar[$clientID]}{timestamp:ms}{description:
  ➡️ Bir Sonraki Mesleği Görüntülersiniz \n
  ⬅️ Bir Önceki Mesleği Görüntületsiniz \n
  $customEmoji[yuri] Mesleği Seçersiniz \n
  $getVar[cross] İşlemi İptal Edersiniz \n
  
 -------------------------------------------------
 $customEmoji[yuri] Gizli Polis Mesleği Başlangıç İçin Güzel Seçim 15.000 Anya Doları İle Bu Mesleği Alabilirsin
  }};{actionRow:{button:$customEmoji[yuri]:1:yuri:no}{button:➡️:2:go2:no}{button:⬅️:3:come5:no}{button:$getVar[cross]:4:iptal:no}};;;;;no]
  `
  },{
  name:"come2",
  type:"interaction",
  prototype:"button",
  code:`
  $interactionUpdate[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{author:Gizli Polis:$userAvatar[$clientID]}{timestamp:ms}{description:
  ➡️ Bir Sonraki Mesleği Görüntülersiniz \n
  ⬅️ Bir Önceki Mesleği Görüntületsiniz \n
  $customEmoji[desmond] Mesleği Seçersiniz \n
  $getVar[cross] İşlemi İptal Edersiniz \n
  
 -------------------------------------------------
 $customEmoji[desmond] İş Adamı Mesleği Güzel Seçim 25.000 Anya Doları İle Bu Mesleği Alabilirsin
  }};{actionRow:{button:$customEmoji[desmond]:1:desmond:no}{button:➡️:2:goq3:no}{button:⬅️:3:come1:no}{button:$getVar[cross]:4:iptal:no}};;;;;no]
  `
  },{
  name:"come3",
  type:"interaction",
  prototype:"button",
  code:`
  $interactionUpdate[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{author:Gizli Polis:$userAvatar[$clientID]}{timestamp:ms}{description:
  ➡️ Bir Sonraki Mesleği Görüntülersiniz \n
  ⬅️ Bir Önceki Mesleği Görüntületsiniz \n
  $customEmoji[yor] Mesleği Seçersiniz \n
  $getVar[cross] İşlemi İptal Edersiniz \n
  
 -------------------------------------------------
 $customEmoji[yor] Seri Katil Ha Anya-Sama'nın Düşmanlarına Ölüm 50.000 Anya Doları İle Bu Mesleği Alabilirsin
  }};{actionRow:{button:$customEmoji[yor]:1:yor:no}{button:➡️:2:go4:no}{button:⬅️:3:come2:no}{button:$getVar[cross]:4:iptal:no}};;;;;no]
  `
  },{
  name:"come4",
  type:"interaction",
  prototype:"button",
  code:`
  $interactionUpdate[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{author:Gizli Polis:$userAvatar[$clientID]}{timestamp:ms}{description:
  ➡️ Bir Sonraki Mesleği Görüntülersiniz \n
  ⬅️ Bir Önceki Mesleği Görüntületsiniz \n
  $customEmoji[loid] Mesleği Seçersiniz \n
  $getVar[cross] İşlemi İptal Edersiniz \n
  
 -------------------------------------------------
 $customEmoji[loid] Gizli Polis Mesleği Başlangıç İçin Güzel Seçim 75.000 Anya Doları İle Bu Mesleği Alabilirsin
  }};{actionRow:{button:$customEmoji[loid]:1:loid:no}{button:➡️:2:go5:no}{button:⬅️:3:come3:no}{button:$getVar[cross]:4:iptal:no}};;;;;no]
  `
  },{
  name:"come5",
  type:"interaction",
  prototype:"button",
  code:`
  $interactionUpdate[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{author:Gizli Polis:$userAvatar[$clientID]}{timestamp:ms}{description:
  ➡️ Bir Sonraki Mesleği Görüntülersiniz \n
  ⬅️ Bir Önceki Mesleği Görüntületsiniz \n
  $customEmoji[anya] Mesleği Seçersiniz \n
  $getVar[cross] İşlemi İptal Edersiniz \n
  
 -------------------------------------------------
 $customEmoji[anya] Senki Yüceler Yücesi Anya-Sama'nın Kutdal Mesleğine Erişebileceğinimi Sandın 100 Bin Milyon Trilyon Frilyon  Anya Doları İle Bu Mesleği Alabilirsin
  }};{actionRow:{button:$customEmoji[anya]:1:anya:no}{button:➡️:2:go1:no}{button:⬅️:3:come4:no}{button:$getVar[cross]:4:iptal:no}};;;;;no]
  `
  },{
    name:"iptal",
    prototype:"button",
    type:"interaction",
    code:`
    $interactionDelete
    `
    },{
      name:"yuri",
      prototype:"button",
      type:"interaction",
      "$if":"v4",
      code:`
      $interactionUpdate[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{timestamp:ms}{author: Artık Bir Gizli Polis'sin :$authorAvatar}{description: $getVar[ekotu] | Babacıkla Karşı Karşıya Anya Heyecanlı}}]
     $setUserVar[anyadolar;$math[$getUserVar[anyadolar;$authorID]-15000]]
   $setUserVar[meslek;Gizli Polis;$authorID]
    $if[$getUserVar[anyadolar;$authorID]<15000]
    $interactionUpdate[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{timestamp:ms}{author:Anya Paracıkları Korudu:$authorAvatar}{description:$getVar[eac] | O Kadar Paran Yokki Şapşik Sanırım Şu Anki Paranın Üstüne Para Eklemen Lazım}}]
    $endif
   
      `
      },{
        name:"desmond",
        prototype:"button",
        type:"interaction",
        "$if":"v4",
        code:`
          $interactionUpdate[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{timestamp:ms}{author: Artık Bir İş Adamısın :$authorAvatar}{description: $getVar[ekotu] | Babacığın Düşmanı Suiakst Düzenlenmesin Dikkat Et}}]
     $setUserVar[anyadolar;$math[$getUserVar[anyadolar;$authorID]-25000]]
   $setUserVar[meslek;Gizli Polis;$authorID]
    $if[$getUserVar[anyadolar;$authorID]<25000]
    $interactionUpdate[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{timestamp:ms}{author:Anya Paracıkları Korudu:$authorAvatar}{description:$getVar[eac] | O Kadar Paran Yokki Şapşik Sanırım Şu Anki Paranın Üstüne Eklemen Gerek Para \`\$math[25000-$getUserVar[anyadolar;$authorID]]\`\ Anya Dolarcığı}}]
    $endif
        `
      },{
        name:"yor",
        prototype:"button",
        type:"interaction",
        "$if":"v4",
        code:`
          $interactionUpdate[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{timestamp:ms}{author: Artık Bir Seri Katilsin :$authorAvatar}{description: $getVar[ekotu] | Çok Havalı Bitirici Vuruş  Anya Heyecanlı}}]
     $setUserVar[anyadolar;$math[$getUserVar[anyadolar;$authorID]-50000]]
   $setUserVar[meslek;Gizli Polis;$authorID]
    $if[$getUserVar[anyadolar;$authorID]<50000]
    $interactionUpdate[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{timestamp:ms}{author:Anya Paracıkları Korudu:$authorAvatar}{description:$getVar[eac] | O Kadar Paran Yokki Şapşik Sanırım Şu Anki Paranın Üstüne Eklemen Gerek Para \`\$math[50000-$getUserVar[anyadolar;$authorID]]\`\ Anya Dolarcığı}}]
    $endif
        `
      },{
        name:"loid",
        prototype:"button",
        type:"interaction",
        "$if":"v4",
        code:`
          $interactionUpdate[;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{timestamp:ms}{author: Artık Bir Casussun :$authorAvatar}{description: $getVar[ekotu] | Babacıkla Meslektaş Uha Uha Öldür Onu}}]
     $setUserVar[anyadolar;$math[$getUserVar[anyadolar;$authorID]-75000]]
   $setUserVar[meslek;Casus;$authorID]


    $onlyIf[$getUserVar[meslek;$authorID]!=Casus;{"content":"Zaten Bu Mesleğe Sahipsin",
    "ephemeral":true,
    "options":{
    "interaction":true
    }}]
    $onlyIf[$getUserVar[anyadolar;$authorID]<=75000;
    {"content":"O Kadar Paran Yok!",
    "ephemeral":true,
    "options":{
     "interaction":true,
    }
    
        `
      }]