const axios = require('axios'); // HTTP अनुरोधों के लिए

module.exports.config = {
  name: "FUNNY-JOKE", 
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "यह बॉट मजेदार चुटकुले भेजता है",
  commandCategory: "FUN",
  usages: "NO PREFIX",
  cooldowns: 5
};

let jokeApiUrl = 'https://api.api-ninjas.com/v1/joke?apikey=wqwLuNdoMbysgvcYILhBkosI76vPGPJSTQztdIBO'; // URL में API कुंजी जोड़ें

module.exports.handleEvent = async ({ api, event }) => {
  if (!event.body) return;
  var { threadID, messageID } = event;

  // अगर संदेश "setjoke" से शुरू होता है, तो URL और API कुंजी सेट करें
  if (event.body.toLowerCase().indexOf("setjoke") == 0) {
    const urlWithKey = event.body.slice(9).trim(); // कुंजी और URL को निकालें
    jokeApiUrl = urlWithKey; // जोक API URL सेट करें
    api.sendMessage("जोक API URL और कुंजी सेट कर दी गई है!", threadID, messageID);
    return;
  }

  // अगर संदेश "joke" से शुरू होता है
  if (event.body.toLowerCase().indexOf("joke") == 0) {
    try {
      // API से जोक प्राप्त करने के लिए अनुरोध
      const response = await axios.get(jokeApiUrl);
      
      const joke = response.data.joke; // जोक प्राप्त करें

      // जोक को संदेश के रूप में तैयार करना
      const randomMessage = `😂 यहाँ एक मजेदार चुटकुला है:\n\n${joke}`;

      // Message bhejna
      api.sendMessage(randomMessage, threadID, messageID);
    } catch (error) {
      console.error("Error fetching joke:", error.message);
      api.sendMessage("क्षमा करें, अभी मैं एक चुटकुला नहीं ले सका!", threadID, messageID);
    }
  }
};

module.exports.run = () => {};
