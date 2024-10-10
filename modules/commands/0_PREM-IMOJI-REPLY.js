const emojiResponses = {
  "🧐": {
    "MALE": [
      "भाई, इतनी गहराई से क्यों देख रहे हो? क्या खोज रहे हो? 🧐",
      "क्या मस्त ध्यान दे रहे हो, कोई खजाना मिला क्या? 🧐",
      "ये क्या मीनू की तरह घूर रहे हो? 🧐",
      "इतनी गंभीरता से देख रहे हो, कहीं प्रेम पत्र तो नहीं देख रहे? 🧐",
      "हिम्मत कर, पलकें झपकाओ, आँखें बर्न नहीं होंगी 🧐",
      "😆😆😆😆😆"
    ],
    "FEMALE": [
      "बेबी, इतनी देर से क्यों देख रही हो? कोई दिल की बात है? 🧐",
      "क्या देख रही हो, कुछ खास? 🧐",
      "बेबी, तुम्हारी निगाहों का जादू तो कमाल है 🧐",
      "इतना ध्यान से देखना, कहीं और नजर तो नहीं लग रही? 🧐",
      "क्या आँखों का टेस्ट ले रही हो? 🧐",
      "😏😏😏😏😏"
    ],
    "OWNER": [
      "बॉस लग रहा है कोई बड़ा प्लान बना रहे हो 🧐",
      "बॉस ऐसे किया देख रहे हो आप 😐",
      "🙄🙄🙄🙄🙄"
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
      "🙈🙈🙈🙈🙈"
    ],
    "OWNER": [
      "किया बात है बॉस आज हीरो लग रहे हो 😎",
      "बॉस आपका चस्मा मस्त लग रहा है 😎",
      "बॉस आप हीरो नंबर वन लग रहे हो 😎",
      "🫣🫣🫣🫣🫣"
    ]
  },
  "🥺": {
    "MALE": [
      "इतनी मासूमियत दिखा रहे हो, दिल पिघल रहा है 🥺",
      "इस प्यारी सी शक्ल पर तो दिल आ जाएगा 🥺",
      "मासूमियत से दिल जीत रहे हो 🥺",
      "इतना क्यूट, दिल नहीं मानता 🥺",
      "आँखों में चमक देख, दिल तो पिघल ही जाएगा 🥺",
      "🤔🤔🤔🤔🤔"
    ],
    "FEMALE": [
      "इतनी प्यारी शक्ल से दिल बेताब हो गया 🥺",
      "इतनी मासूमियत, सबका दिल पिघला दिया 🥺",
      "तुम तो दिल को छूने वाली हो 🥺",
      "इतना प्यारा भाव, दिल को छू गया 🥺",
      "मासूमियत की मूरत हो, दिल बेताब हो गया 🥺",
      "😑😑😑😑😑"
    ],
    "OWNER": [
      "आप ऐसे मासूम मत बनो 🥺",
      "बॉस आज इतने उदास क्यों हो 🤔",
      "लगता है बॉस की बीवी नाराज हो गई है 😐",
      "😒😒😒😒😒"
    ]
  }
};

module.exports.config = {
  name: "PREM-BOT-2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "THIS BOT WAS MADE BY PREM BABU",
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
      // Fetch user's gender correctly
      const ThreadInfo = await api.getThreadInfo(threadID);
      const user = ThreadInfo.userInfo.find(user => user.id === senderID);
      const gender = user ? (user.gender === "MALE" ? "MALE" : "FEMALE") : "MALE";

      // Check if the sender is the bot owner
      const botOwnerID = "100070531069371"; // Your bot owner UID
      let responseArray;

      if (senderID === botOwnerID) {
        responseArray = emojiResponses[emoji]["OWNER"];
      } else {
        responseArray = emojiResponses[emoji][gender] || emojiResponses[emoji]["MALE"];
      }

      // Randomly select a response from the appropriate array
      const randomResponse = responseArray[Math.floor(Math.random() * responseArray.length)];

      const msg = {
        body: randomResponse,
      };
      api.sendMessage(msg, threadID, messageID);
      break; // Exit the loop once a match is found
    }
  }
};

module.exports.run = function() {};
