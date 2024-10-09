const emojiResponses = {
  "🧐": {
    "MALE": [
      "भाई, इतनी गहराई से क्यों देख रहे हो? क्या खोज रहे हो? 🧐",
      "क्या मस्त ध्यान दे रहे हो, कोई खजाना मिला क्या? 🧐",
      "ये क्या मीनू की तरह घूर रहे हो? 🧐",
      "इतनी गंभीरता से देख रहे हो, कहीं प्रेम पत्र तो नहीं देख रहे? 🧐",
      "हिम्मत कर, पलकें झपकाओ, आँखें बर्न नहीं होंगी 🧐",
      "🫣🫣🫣🫣🫣"
    ],
    "FEMALE": [
      "बेबी, इतनी देर से क्यों देख रही हो? कोई दिल की बात है? 🧐",
      "क्या देख रही हो, कुछ खास? 🧐",
      "बेबी, तुम्हारी निगाहों का जादू तो कमाल है 🧐",
      "इतना ध्यान से देखना, कहीं और नजर तो नहीं लग रही? 🧐",
      "क्या आँखों का टेस्ट ले रही हो? 🧐",
      "🙈🙈🙈🙈🙈"
    ]
  },
  "😎": {
    "MALE": [
      "ओह, कूलनेस का सैलाब आ गया 😎",
      "तू कूल नहीं, आइसक्रीम भी पिघल जाएगी 😎",
      "कूलनेस की दुनिया का बादशाह 😎",
      "इतनी कूलनेस तो एयर कंडीशनर में भी नहीं 😎",
      "इतनी ठंडी हवा आ रही है, बर्फ बन जाओगे 😎",
      "😝😝😝😝😝"
    ],
    "FEMALE": [
      "ओह, कूलनेस की देवी 😎",
      "तुम्हारी कूलनेस से सब पिघल जाएगा 😎",
      "तुम कूलनेस की मिसाल हो 😎",
      "इतनी कूल हो, जैसे तुम आर्कटिक से आई हो 😎",
      "तुमसे कूल कोई नहीं 😎",
      "😗😗😗😗😗"
    ]
  },
  "😂": {
    "MALE": [
      "हंसी के फव्वारे छूट रहे हैं 😂",
      "हंसते हंसते पेट में दर्द हो गया 😂",
      "हंसने की तुम्हारी स्पीड तो वर्ल्ड रिकॉर्ड तोड़ देगी 😂",
      "हंसी की ऊँचाई इतनी कि छत छू रही है 😂",
      "हंसते हंसते लोटपोट हो गए 😂",
      "🙄🙄🙄🙄🙄"
    ],
    "FEMALE": [
      "तुम्हारी हंसी सुनकर दिल खुश हो गया 😂",
      "हंसते हंसते मैं भी थक गया 😂",
      "तुम्हारी हंसी तो सबकी दवा है 😂",
      "हंसते हंसते हालत खराब 😂",
      "इतनी हंसी, आँखों में आंसू भी आ गए 😂",
      "🤔🤔🤔🤔🤔"
    ]
  },
  "🔥": {
    "MALE": [
      "इतनी आग लगा दी कि फायर ब्रिगेड भी पास आ रही है 🔥",
      "तेरी हॉटनेस से सब जल रहा है 🔥",
      "आग लगाना तुझसे सीखा है 🔥",
      "इतनी गर्मी, पंखा भी फेल 🔥",
      "तू तो असली आग का शो है 🔥"
    ],
    "FEMALE": [
      "तुम्हारी हॉटनेस से सब जल रहा है 🔥",
      "आग लगाना तुझसे ही सीखा 🔥",
      "इतनी हॉटनेस, बर्फ भी पिघल जाए 🔥",
      "तुमसे ज्यादा गरम तो कुछ भी नहीं 🔥",
      "इतनी आग, सबके दिल धड़क रहे हैं 🔥"
    ]
  },
  "🥺": {
    "MALE": [
      "इतनी मासूमियत दिखा रहे हो, दिल पिघल रहा है 🥺",
      "इस प्यारी सी शक्ल पर तो दिल आ जाएगा 🥺",
      "मासूमियत से दिल जीत रहे हो 🥺",
      "इतना क्यूट, दिल नहीं मानता 🥺",
      "आँखों में चमक देख, दिल तो पिघल ही जाएगा 🥺",
      "😀😀😀😀😀"
    ],
    "FEMALE": [
      "इतनी प्यारी शक्ल से दिल बेताब हो गया 🥺",
      "इतनी मासूमियत, सबका दिल पिघला दिया 🥺",
      "तुम तो दिल को छूने वाली हो 🥺",
      "इतना प्यारा भाव, दिल को छू गया 🥺",
      "मासूमियत की मूरत हो, दिल बेताब हो गया 🥺",
      "😐😐😐😐😐"
    ]
  }
};

module.exports.config = {
  name: "emojiReply",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "THIS BOT IS MADE BY PREM BABU",
  commandCategory: "IMOGI REPLY",
  cooldowns: 0,
};

module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, senderID, body } = event;
  const emojis = Object.keys(emojiResponses);

  // Convert the message body to lowercase
  const lowercaseBody = body.toLowerCase();

  for (const emoji of emojis) {
    if (lowercaseBody.includes(emoji)) {
      const userInfo = await api.getUserInfo(senderID);
      const userName = userInfo[senderID].name;

      // Fetch user's gender correctly
      const ThreadInfo = await api.getThreadInfo(threadID);
      const user = ThreadInfo.userInfo.find(user => user.id === senderID);
      const gender = user ? (user.gender === "MALE" ? "MALE" : "FEMALE") : "MALE";

      // Randomly select a response from the appropriate array based on gender
      const emojiResponsesList = emojiResponses[emoji][gender] || emojiResponses[emoji]["MALE"];
      const randomResponse = emojiResponsesList[Math.floor(Math.random() * emojiResponsesList.length)];

      const msg = {
        body: randomResponse.replace("naam", userName),
      };
      api.sendMessage(msg, threadID, messageID);
      break;  // Exit the loop once a match is found
    }
  }
};

module.exports.run = function() {};
