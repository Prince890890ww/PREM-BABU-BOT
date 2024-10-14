module.exports.config = {
    name: 'FESTIVAL-WISH',
    version: '1.0',
    hasPermssion: 0,
    credits: 'YOUR NAME',
    description: 'Automatically sends festival wishes in groups',
    commandCategory: 'AUTO SEND FESTIVALS',
    usages: '[AUTOMATIC]',
    cooldowns: 3
};

const festivals = [
    { date: '01-01', message: '🎉 नव वर्ष की शुभकामनाएँ! यह वर्ष आपके लिए खुशियाँ, स्वास्थ्य और सफलता लेकर आए!' },
    { date: '14-01', message: '🪁 मकर संक्रांति की शुभकामनाएँ! आपके जीवन में गर्मी और खुशियों की वर्षा हो!' },
    { date: '26-01', message: '🇮🇳 गणतंत्र दिवस की शुभकामनाएँ! स्वतंत्रता और एकता की भावना का जश्न मनाएँ!' },
    { date: '08-03', message: '🌷 अंतर्राष्ट्रीय महिला दिवस की शुभकामनाएँ! महिलाओं की ताकत और उपलब्धियों का जश्न मनाते हैं!' },
    { date: '15-08', message: '🇮🇳 स्वतंत्रता दिवस की शुभकामनाएँ! हमारे स्वतंत्रता सेनानियों की बलिदानों को याद करते हैं!' },
    { date: '02-10', message: '🙏 गांधी जयंती की शुभकामनाएँ! हमारे राष्ट्र के पिता को सम्मान दें!' },
    { date: '25-10', message: '🪔 दीपावली की शुभकामनाएँ! यह दीपों का त्योहार आपके जीवन को रोशन करे!' },
    { date: '14-11', message: '🎉 बाल दिवस की शुभकामनाएँ! बचपन की खुशी का जश्न मनाएँ!' },
    { date: '25-12', message: '🎄 क्रिसमस की शुभकामनाएँ! इस छुट्टियों के मौसम में शांति और खुशी की कामना करते हैं!' },
    { date: '04-03', message: '🌸 होली की शुभकामनाएँ! रंगों का त्योहार खुशियाँ लाए!' }, // होली
];

// यह फ़ंक्शन सभी समूहों में त्योहार की शुभकामनाएँ भेजता है
function sendFestivalWishes() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // जनवरी = 0
    const currentDate = `${dd}-${mm}`;

    festivals.forEach(festival => {
        if (festival.date === currentDate) {
            const message = festival.message;
            // सभी समूहों में भेजने का कोड यहाँ डालें
            // api.sendMessage(message, groupId); // समूह ID को यहाँ शामिल करें
            console.log(`Sending to all groups: ${message}`); // कंसोल में संदेश भेजें
        }
    });
}

// हर 12 घंटे में त्योहार की जांच करें
setInterval(sendFestivalWishes, 12 * 60 * 60 * 1000); // 12 घंटे = 12 * 60 * 60 * 1000 मिलीसेकंड

// प्रारंभ में एक बार चेक करें
sendFestivalWishes();
