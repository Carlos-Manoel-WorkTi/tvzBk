 const channels = [
    {
      nomeOfc: "Globo",
      nome: "rede-globo",
      logo: "https://cdn.mitvstatic.com/channels/globo_s.jpg",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/504",
      type: "livre",
    },
    {
      nomeOfc: "sbt",
      nome: "sbt",
      logo: "https://cdn.mitvstatic.com/channels/br_sbt_s.png",
      streamingUrl: "https://aovivo.maissbt.com/channel_360.m3u8",
      type: "livre",
    },
    {
      nomeOfc: "Record",
      nome: "record",
      logo: "https://cdn.mitvstatic.com/channels/record_s.jpg",
      streamingUrl:
        "http://tvconquistalrv.duckdns.org:8080/hls/tvconquistalrv.m3u8",
      type: "livre",
    },
    {
      nomeOfc: "Band",
      nome: "band",
      logo: "	https://cdn.mitvstatic.com/channels/br_bandeirantes_s.png",
      streamingUrl:
        "https://stmv1.paineltv.net/valeradiowebtv/valeradiowebtv/chunklist_w1873032931.m3u8",
      type: "livre",
    },
    {
      nomeOfc: "ESPN",
      nome: "espn",
      logo: "	https://cdn.mitvstatic.com/channels/br_espn-brasil_s.png",
      streamingUrl: "http://authxplus-2.xyz:2082/live/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/131.m3u8",
      type: "esporte",
    },
    {
      nomeOfc: "TNT",
      nome: "tnt",
      logo: "https://cdn.mitvstatic.com/channels/br_tnt_s.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/313",
      type: "serie",
    },
    {
      nomeOfc: "Discovery",
      nome: "discovery",
      logo: "https://cdn.mitvstatic.com/channels/br_discovery_m.png",
      streamingUrl:
        "https://cdn-5.nxplay.com.br/DISCOVERY_CHANNEL_NX/tracks-v1a1/mono.m3u8",
      type: "aventura",
    },
    {
      nomeOfc: "Nickelodeon",
      nome: "nickelodeon",
      logo: "https://cdn.mitvstatic.com/channels/br_nickelodeon_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/768  ",
      type: "desenho",
    },
    {
      nomeOfc: "Sportv",
      nome: "sportv",
      logo: "https://cdn.mitvstatic.com/channels/br_sportv_s.png",
      streamingUrl: "http://gzcdn.vood.top:80/hls/547_.m3u8",
      type: "esporte",
    },
    {
      nomeOfc: "Rede tv",
      nome: "rede-tv-belem-hd",
      logo: "https://cdn.mitvstatic.com/channels/br_rede-tv_s.png",
      streamingUrl:
        "https://cdn.jmvstream.com/w/AVJ-15235/playlist/chunklist.m3u8",
      type: "livre",
    },
    {
      nomeOfc: "Warner chaneel",
      nome: "warner-channel",
      logo: "https://cdn.mitvstatic.com/channels/br_warner_m.png",
      streamingUrl:
        "http://voz.one:80/alexfnt_ogdY18ACDE/y3QsKwdd0cjSfs1HwJTf/479",
      type: "comedia",
    },
    {
      nomeOfc: "Comedy Central",
      nome: "comedy-central",
      logo: "https://cdn.mitvstatic.com/channels/br_comedy-central_m.png",
      streamingUrl:
        "http://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/5f357e91b18f0b00073583d2/master.m3u8?deviceType=samsung-tvplus&deviceMake=samsung&deviceModel=samsung&deviceVersion=unknown&appVersion=unknown&deviceLat=0&deviceLon=0&deviceDNT=%7BTARGETOPT%7D&deviceId=%7BPSID%7D&advertisingId=%7BPSID%7D&us_privacy=1YNY&samsung_app_domain=%7BAPP_DOMAIN%7D&samsung_app_name=%7BAPP_NAME%7D&profileLimit=&profileFloor=&embedPartner=samsung-tvplus",
      type: "comedia",
    },
    {
      nomeOfc:"Tv animais",
      nome: "Tv animais",
      logo: "https://images.pluto.tv/channels/6474aa984cfc2c0008883a92/colorLogoPNG.png",
      streamingUrl:
        "http://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/6474aa984cfc2c0008883a92/master.m3u8?deviceType=samsung-tvplus&deviceMake=samsung&deviceModel=samsung&deviceVersion=unknown&appVersion=unknown&deviceLat=0&deviceLon=0&deviceDNT=%7BTARGETOPT%7D&deviceId=%7BPSID%7D&advertisingId=%7BPSID%7D&us_privacy=1YNY&samsung_app_domain=%7BAPP_DOMAIN%7D&samsung_app_name=%7BAPP_NAME%7D&profileLimit=&profileFloor=&embedPartner=samsung-tvplus",
      type: "natureza",
    },
    {
      nomeOfc: "Pluto filmes",
      nome: "Pluto filmes",
      logo: "https://images.pluto.tv/channels/6479ff764f5ba5000878dfe2/colorLogoPNG.png",
      streamingUrl:
        "http://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/6479ff764f5ba5000878dfe2/master.m3u8?deviceType=samsung-tvplus&deviceMake=samsung&deviceModel=samsung&deviceVersion=unknown&appVersion=unknown&deviceLat=0&deviceLon=0&deviceDNT=%7BTARGETOPT%7D&deviceId=%7BPSID%7D&advertisingId=%7BPSID%7D&us_privacy=1YNY&samsung_app_domain=%7BAPP_DOMAIN%7D&samsung_app_name=%7BAPP_NAME%7D&profileLimit=&profileFloor=&embedPartner=samsung-tvplus",
      type: "filme",
    },
    {
      nomeOfc: "HBO",
      nome: "hbo",
      logo: "https://cdn.mitvstatic.com/channels/3230fdb1-1bdd-4155-a842-d9461066c4a4_m.jpg",
      streamingUrl:
        "http://voz.one:80/alexfnt_ogdY18ACDE/y3QsKwdd0cjSfs1HwJTf/601",
      type: "filme",
    },
    {
      nomeOfc: "Max prime",
      nome: "max-prime",
      logo: "https://cdn.mitvstatic.com/channels/br_max-prime_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/267",
      type: "filme",
    },
    {

      nomeOfc: "HBO Plus",
      nome: "hbo-plus-1",
      logo: "https://cdn.mitvstatic.com/channels/br_hbo-plus-1_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/24",
      type: "filme",
    },
    {
      nomeOfc: "Universal",
      nome: "universal",
      logo: "https://cdn.mitvstatic.com/channels/br_universal_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/319",
      type: "serie",
    },
    {

      nomeOfc: "Disney",
      nome: "disney",
      logo: "https://cdn.mitvstatic.com/channels/br_disney_m.png",
      streamingUrl:
        "http://s1.1-cup.net:2095/solucao111hgfgh77hu78/xplus1111XXhjgyu87/3",
      type: "desenho",
    },
    {
      nomeOfc: "CineMax",
      nome: "cinemax",
      logo: "https://cdn.mitvstatic.com/channels/br_cinemax-basic_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/240",
      type: "filme",
    },
    {
      nomeOfc: "Megapix HD",
      nome: "megapix-hd",
      logo: "https://cdn.mitvstatic.com/channels/br_megapix_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/998",
      type: "filme",
    },
    {
      nomeOfc: "Star channel",
      nome: "fox-hd",
      logo: "https://cdn.mitvstatic.com/channels/br_fox-hd_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/281",
      type: "filme",
    },
    {
      nomeOfc: "Sony Channel",
      nome: "sony",
      logo: "https://cdn.mitvstatic.com/channels/br_sony_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/238",
      type: "serie",
    },
    {
      nomeOfc: "Sony Movie",
      nome: "Sony Movies",
      logo: "https://imgur.com/Bv0MLFU.png",
      streamingUrl: "https://cdn-1.nxplay.com.br/SONY_MOVIES/index.m3u8",
      type: "filme",
    },
    {
      nomeOfc: "FOX",
      nome: "fox",
      logo: "https://cdn.mitvstatic.com/channels/br_sony_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/244",
      type: "filme",
    },
    {
      nomeOfc: "Telecine Fun",
      nome:"telecine-fun",
      logo: "https://cdn.mitvstatic.com/channels/br_telecine-fun_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/301",
      type: "filme",
    },
    {
      nomeOfc: "Telecine Cult",
      nome: "telecine-cult",
      logo: "https://cdn.mitvstatic.com/channels/br_telecine-cult-1_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/298",
      type: "filme",
    },
    {
      nomeOfc: "Telecine Touch",
      nome: "telecine-touch",
      logo: "https://cdn.mitvstatic.com/channels/br_telecine-touch_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/310",
      type: "filme",
    },
    {
      nomeOfc: "Telecine Premium",
      nome: "telecine-premium",
      logo: "https://cdn.mitvstatic.com/channels/br_telecine-premium-1_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/307",
      type: "filme",
    },
    {
      nomeOfc: "Telecine Pipoca",
      nome: "telecine-pipocaa",
      logo: "https://cdn.mitvstatic.com/channels/br_telecine-pipoca_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/304",
      type: "filme",
    },
    {
      nomeOfc: "Telecine Action",
      nome: "telecine-action",
      logo: "https://cdn.mitvstatic.com/channels/br_telecine-action-1_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/295",
      type: "filme",
    },
    {
      nomeOfc: "Paromount",
      nome: "paramount-brasil-hd",
      logo: "https://cdn.mitvstatic.com/channels/br_paramount-brasil_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/276",
      type: "filme",
    },
    {
      nomeOfc: "AXN",
      nome: "axn",
      logo: "https://cdn.mitvstatic.com/channels/co_axn_m.png",
      streamingUrl:
        "https://cdn-5.nxplay.com.br/AXN_TK/tracks-v2a1/mono.m3u8",
      type: "filme",
    },
    {
      nomeOfc: "A&E",
      nome: "a-e",
      logo: "https://cdn.mitvstatic.com/channels/br_a-e_m.png",
      streamingUrl:
        "https://cdn-2.nxplay.com.br/AeE_BRASIL_TK/tracks-v1a1/mono.m3u8",
      type: "filme",
    },
    {
      nomeOfc: "Space",
      nome: "space",
      logo: "https://cdn.mitvstatic.com/channels/br_space_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/278",
      type: "filme",
    },
    {
      nomeOfc: "Sony Novelas",
      nome: "Sony Novelas",
      logo: "https://i.imgur.com/mqEHDE1.png",
      streamingUrl:
        "https://spt-novelas-1-us.lg.wurl.tv/playlist.m3u8",
      type: "novela",
    },
    {
      nomeOfc: "Pluto Tv Doc..",
      nome: "Pluto TV Documentários",
      logo: "https://images.pluto.tv/channels/5f1ef1a8cec6be00072a7ac9/colorLogoPNG.png",
      streamingUrl:
        "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f1ef1a8cec6be00072a7ac9/master.m3u8?advertisingId={PSID}&appVersion=unknown&deviceDNT={TARGETOPT}&deviceId={PSID}&deviceLat=0&deviceLon=0&deviceMake=samsung&deviceModel=samsung&deviceType=samsung-tvplus&deviceVersion=unknown",
      type: "documentario",
    },
    {
      nomeOfc: "Arquivos FBI",
      nome: "Os Arquivos do FBI",
      logo: "https://images.pluto.tv/channels/620d12a82e8ac50007c269c3/colorLogoPNG.png",
      streamingUrl:
        "http://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/620d12a82e8ac50007c269c3/master.m3u8?deviceType=samsung-tvplus&deviceMake=samsung&deviceModel=samsung&deviceVersion=unknown&appVersion=unknown&deviceLat=0&deviceLon=0&deviceDNT=%7BTARGETOPT%7D&deviceId=%7BPSID%7D&advertisingId=%7BPSID%7D&us_privacy=1YNY&samsung_app_domain=%7BAPP_DOMAIN%7D&samsung_app_name=%7BAPP_NAME%7D&profileLimit=&profileFloor=&embedPartner=samsung-tvplus",
      type: "documentario",
    },
    {
      nomeOfc: "Rakuten",
      nome: "Rakuten",
      logo: "https://i.imgur.com/QwPiPlI.png",
      streamingUrl:
        "https://rakuten-documentaries-14-pt.samsung.wurl.tv/playlist.m3u8",
      type: "documentario",
    },
    {
      nomeOfc: "Multishow ",
      nome: "multishow",
      logo: "https://cdn.mitvstatic.com/channels/br_multishow_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/423",
      type: "livre",
    },
    {
      nomeOfc: "UOL",
      nome: "UOL",
      logo: "https://imgur.com/dC2p8J1.png",
      streamingUrl:
        "https://d19fe0yjxkxylf.cloudfront.net/index.m3u8",
      type: "noticia",
    },
    {
      nomeOfc: "TV Senado",
      nome: "tv-senado",
      logo: "https://cdn.mitvstatic.com/channels/br_tv-senado-1_m.png",
      streamingUrl:
        "https://cdn-1.nxplay.com.br/TV_SENADO/index.m3u8",
      type: "noticia",
    },
    {
      nomeOfc: "JP NEWS",
      nome: "JP NEWS",
      logo: "https://i.imgur.com/MWGAfvV.png",
      streamingUrl:
        "https://d6yfbj4xxtrod.cloudfront.net/out/v1/7836eb391ec24452b149f3dc6df15bbd/index_10.m3u8",
      type: "noticia",
    },
    {
      nomeOfc: "Premiere 7 ",
      nome: "premiere-7",
      logo: "https://cdn.mitvstatic.com/channels/br_premiere-2_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/160",
      type: "esporte",
    },
    {
      nomeOfc: "Premiere 6 ",
      nome: "premiere-6",
      logo: "https://cdn.mitvstatic.com/channels/br_premiere-2_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/158",
      type: "esporte",
    },
    {
      nomeOfc: "Premiere 5 ",
      nome: "premiere-5",
      logo: "https://cdn.mitvstatic.com/channels/br_premiere-2_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/156",
      type: "esporte",
    },
    {
      nomeOfc: "Premiere 4 ",
      nome: "premiere-4",
      logo: "https://cdn.mitvstatic.com/channels/br_premiere-2_m.png",
      streamingUrl:
        "http://s1.1-cup.net:2095/solucao111hgfgh77hu78/xplus1111XXhjgyu87/4",
      type: "esporte",
    },
    {
      nomeOfc: "Premiere 3",
      nome: "premiere-3",
      logo: "https://cdn.mitvstatic.com/channels/br_premiere-2_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/153",
      type: "esporte",
    },
    {
      nomeOfc: "Premiere 2",
      nome: "premiere-2",
      logo: "https://cdn.mitvstatic.com/channels/br_premiere-2_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/150",
      type: "esporte",
    },
    {
      nomeOfc: "Premiere",
      nome: "premiere",
      logo: "https://cdn.mitvstatic.com/channels/br_premiere-2_m.png",
      streamingUrl:
        "http://voz.one:80/alexfnt_ogdY18ACDE/y3QsKwdd0cjSfs1HwJTf/720",
      type: "esporte",
    },
    {
      nomeOfc: "Band Sports",
      nome: "bandsports",
      logo: "https://cdn.mitvstatic.com/channels/br_bandsports_m.png",
      streamingUrl:
        "https://cdn-2.nxplay.com.br/BAND_SPORTS/index.m3u8",
      type: "esporte",
    },
    {
      nomeOfc: "Pluto Anime",
      nome: "Pluto TV Anime",
      logo: "https://images.pluto.tv/channels/604b79c558393100078faeef/solidLogoPNG.png",
      streamingUrl:
        "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5f12136385bccc00070142ed/master.m3u8?advertisingId=&appName=web&appVersion=5.12.0-a87d76d6acd214757f3f9ce727615cd3be3397a8&app_name=web&clientDeviceType=0&clientID=eabb34b1-5995-4c43-8147-d3f8d09696f2&clientModelNumber=na&deviceDNT=false&deviceId=eabb34b1-5995-4c43-8147-d3f8d09696f2&deviceLat=-10.0000&deviceLon=-55.0000&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=87.0.4280.88&marketingRegion=BR&serverSideAds=true&sessionID=30971196-4529-11eb-b866-0242ac110002&sid=30971196-4529-11eb-b866-0242ac110002&userId=",
      type: "desenho",
    },
    {
      nomeOfc: "Loading",
      nome: "loading",
      logo: "https://cdn.mitvstatic.com/channels/br_loading_m.png",
      streamingUrl:
        "https://stmv1.srvif.com/loadingtv/loadingtv/playlist.m3u8",
      type: "desenho",
    },
    {
      nomeOfc: "Animes TV",
      nome: "Animes TV",
      logo: "https://imgur.com/K4IrU99.png",
      streamingUrl:
        "https://stmv1.srvif.com/animetv/animetv/playlist.m3u8",
      type: "desenho",
    },
    {
      nomeOfc: "Cartoonito",
      nome: "boomerang",
      logo: "https://cdn.mitvstatic.com/channels/br_boomerang_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/345",
      type: "desenho",
    },
    {
      nomeOfc: "Nick jr.",
      nome: "nick-jr",
      logo: "https://cdn.mitvstatic.com/channels/br_nick-junior-brazil_m.png",
      streamingUrl:
        "http://186.226.215.132:80/carlos123/carlos123/500",
      type: "desenho",
    },
    {
      nomeOfc: "FOX kids",
      nome: "FOX kids",
      logo: "https://cdn.mitvstatic.com/channels/br_nick-junior-brazil_m.pnghttps://imgur.com/9X7XBlD.png",
      streamingUrl:
        "https://stmv1.srvif.com/emlsilva/emlsilva/playlist.m3u8",
      type: "desenho",
    },
    {
      nomeOfc: "RETRO CARTOON",
      nome: "RETRO CARTOON",
      logo: "https://i.imgur.com/x33MwPN.png",
      streamingUrl:
        "https://stmv1.srvif.com/retrotv/retrotv/playlist-480p.m3u8",
      type: "desenho",
    },
    {
      nomeOfc: "Gloobinho",
      nome: "gloobinho-hd",
      logo: "https://cdn.mitvstatic.com/channels/br_gloobinho-hd_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/360",
      type: "desenho",
    },
    {
      nomeOfc: "Tv Ra-tim-bum",
      nome: "tv-ra-tim-bum-hd",
      logo: "https://cdn.mitvstatic.com/channels/br_tv-ra-tim-bum-hd_m.png",
      streamingUrl:
        "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/557",
      type: "desenho",
    },
    {
      nomeOfc: "DreamWorks",
      nome: "DreamWorks",
      logo: "https://www.dreamworks.com/images/favicon/android-icon-192x192.png",
      streamingUrl:
        "https://cdn-2.nxplay.com.br/DREAMWORKS/tracks-v2a1/mono.m3u8",
      type: "desenho",
    },
    {
      nomeOfc: "Animal Planet",
      nome: "animal-planet",
      logo: "https://cdn.mitvstatic.com/channels/br_animal-planet_m.png",
      streamingUrl:
        "http://xciptv.8888play.one:80/live/228463308/r576049x/22305.ts",
      type: "natureza",
    },
    {
      nomeOfc: "History",
      nome: "history-channelt",
      logo: "https://cdn.mitvstatic.com/channels/br_history-channel_m.png",
      streamingUrl:
        "http://xciptv.8888play.one:80/live/228463308/r576049x/59173.ts",
      type: "documentario",
    },
    {
      nomeOfc: "Disc. Science",
      nome: "discovery-science",
      logo: "https://cdn.mitvstatic.com/channels/br_discovery-science-brazil_m.png",
      streamingUrl:
        "https://cdn-2.nxplay.com.br/DISCOVERY_SCIENCE_NX/index.m3u8",
      type: "documentario",
    },
  ];

// const channels = [
//   {
//     nomeOfc: "Globo",
//     nome: "rede-globo",
//     logo: "https://cdn.mitvstatic.com/channels/globo_s.jpg",
//     streamingUrl:
//       "http://authxplus-2.xyz:2082/Tourobox1-APhnnJ6sQS/7nAiGmzfNG/504",
//     type: "livre",
//   },
//   {
//     nomeOfc: "sbt",
//     nome: "sbt",
//     logo: "https://cdn.mitvstatic.com/channels/br_sbt_s.png",
//     streamingUrl: "https://aovivo.maissbt.com/channel_360.m3u8",
//     type: "livre",
//   }
// ]
  export default channels;