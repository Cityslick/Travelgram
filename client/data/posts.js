const posts = [
   {
      "code":"BAcyDyQwcXX",
      "caption":"Lunchtime in Porto #Portugal",
      "likes":56,
      "id":"1161022966406956503",
      "display_src":"https://i.redditmedia.com/qcvHvrz7pk43Qmq_iMK1dBh0f0aypddPBLzD7BC5QxY.jpg?w=614&s=241882c2c47586a1e132dd4ee1a61704"
   },
   {
      "code":"BAcJeJrQca9",
      "caption":"Sunrise from the summit in Mt. Fuji. #sunrise #japan #10hrclimb ",
      "likes":59,
      "id":"1160844458347054781",
      "display_src":"https://i.imgur.com/anI2b75.jpg"
   },
   {
      "code":"BAF_KY4wcRY",
      "caption":"Batsu Caves in Malaysia. #kualalumpur #murugan #temple ",
      "likes":79,
      "id":"1154606670337393752",
      "display_src":"https://i.redditmedia.com/VaIu43V6RJczj_kO3HOWRfAlr4x3wo26V1ABurgfoHQ.jpg?w=768&s=47c32593227bf3e04fa91b9376347cc3"
   },
   {
      "code":"BAPIPRjQce9",
      "caption":"Had a long weekend, so took a trip...#malaysia #kualaTerengganu",
      "likes":47,
      "id":"1157179863266871229",
      "display_src":"https://i.redditmedia.com/10Y5ReIxb4-MiTqv1fL1NsV0kcuwHx2tAVvq-ehXrX4.jpg?w=1024&s=1b7815a25fb438f9528e8b025d8f66ec"
   },
   {
      "code":"-hZh6IQcfN",
      "caption":"Look who decided to join me for tea! #petra #jordan #cafe",
      "likes":66,
      "id":"1126293663140399053",
      "display_src":"https://i.imgur.com/8vDCLQn.jpg"
   },
   {
      "code":"-B3eiIwcYV",
      "caption":"Exploring the ruins, feels like a real life Temple Run. #cambodia #angkor",
      "likes":33,
      "id":"1117418173361145365",
      "display_src":"https://i.redditmedia.com/F1yuN3T_gEWc3ST44FBcJODru4c9ROzMqA38mH_SKJQ.jpg?w=1024&s=d8536ec83585fda3279b7239f2812eab"
   },
   {
      "code":"BAhvZrRwcfu",
      "caption":"When in Rome... #roma #italia #pantheon",
      "likes":30,
      "id":"1162418651480049646",
      "display_src":"https://i.redditmedia.com/QKi9R1Xkub_HLQfBD5uZT4hZTG7QydLKjAqsPdZsV_Q.jpg?w=646&s=7bab4eaa1cecbec6ee038f9dfc604fcc"
   },
   {
      "code":"BAAJqbOQcW5",
      "caption":"Niagra Falls #upstateny #thesix #buffalo",
      "likes":40,
      "id":"1152964002473690553",
      "display_src":"https://i.redditmedia.com/ka-jublhzLnHTnamCdJHyQfjF9Mzxk-0scERFtowsMo.jpg?w=943&s=a3fa537d7df73d54c4e9d96fba32f2e7"
   },
   {
      "code":"_4jHytwcUA",
      "caption":"Bellows Beach. #hawaii",
      "likes":62,
      "id":"1150824171912152320",
      "display_src":"https://i.redditmedia.com/CEsLg3GEjmNk5vY9ItKakNNC3bt9EBn5Acqfq1D8MMM.jpg?w=576&s=98fe17b3b91fad2c8eef46888f610329"
   },
   {
      "code":"_zbaOlQcbn",
      "caption":"Midnight in Norway",
      "likes":52,
      "id":"1149382879529256679",
      "display_src":"https://i.imgur.com/Q2Vfdij.jpg"
   },
   {
      "code":"_rmvQfQce8",
      "caption":"Egypt...",
      "likes":35,
      "id":"1147180903383025596",
      "display_src":"https://i.redditmedia.com/rKr5X0mXh0pk11UNaJmcVkNWuzJSA7XnI-xK9iTPY00.jpg?w=1024&s=5759e66648835b02ff750b06e9815145"
   },
   {
      "code":"_ep9kiQcVy",
      "caption":"Luzern, Switzerland",
      "likes":64,
      "id":"1143535906423162226",
      "display_src":"https://i.redditmedia.com/4V2nWaMY2Zomtzjv9qCcO6ez3QGQGvhlepP7qSqQHYM.jpg?w=1024&s=ee8436b5e544647cfca30d4fd52f1280"
   },
   {
      "code":"_XpJcrwcSn",
      "caption":"Kyoto at night",
      "likes":74,
      "id":"1141561999742846119",
      "display_src":"http://i.imgur.com/VL7jnET.jpg"
   },
   {
      "code":"_KnU7MwceA",
      "caption":"Day trip to Phnom Kulen #cambodia",
      "likes":54,
      "id":"1137894817632733056",
      "display_src":"http://i.imgur.com/pAJ9ove.jpg"
   },
   {
      "code":"_HMejJQcY5",
      "caption":"Sunset in Amsterdam!",
      "likes":18,
      "id":"1136932306813044281",
      "display_src":"https://i.redditmedia.com/yVWRHjwN7mQiDEJXKLmecLtwBtwz6ZZAZ_tFtwvlBMg.jpg?w=1024&s=0a1ed22bffc3f5bfccfea3ec5f9e5c0c"
   },
   {
      "code":"_Fq2zmwcaz",
      "caption":"Bangkok, Thailand",
      "likes":48,
      "id":"1136502965197194931",
      "display_src":"https://i.redditmedia.com/w7xx3oeudDpXUWRvrHX9cTxXrG5GK0Tmqmlob22SfAU.jpg?w=1024&s=b1d880cc3f6a204bef0ffc3952de0d53"
   },
   {
      "code":"_A2r0aQcfD",
      "caption":"A beautiful view from Cap-Haitien #haiti",
      "likes":57,
      "id":"1135147611821557699",
      "display_src":"https://i.redditmedia.com/jhfoIOH7QF9SS-cJctGIyVQeUGVBX1n8meqeFhp-9_o.jpg?w=1024&s=8c2f619aa88b3fb36017971a5883bec3"
   },
   {
      "code":"-1rhFawccs",
      "caption":"River running through Colorado #blackhawk",
      "likes":39,
      "id":"1132002270913873708",
      "display_src":"https://i.redditmedia.com/XYje2gkXBfBHo-yL5iloVkjhWX67ic6-O3ufKHkPhYc.jpg?w=614&s=1e8564f0ab45e445e6b2b755434031e3"
   }
];


export default posts;
