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

// 1. आवश्यक मॉड्यूल आयात करें (यदि कोई हो)
// const { sendMessage } = require('./messageSender'); // संदेश भेजने के लिए आपकी विधि

// 2. त्योहारों की सूची
const festivals = [{
    date: '01-01', // नया साल
    message: '🎉 नया साल मुबारक हो! 🎉\nइस नए साल में खुशियों और सफलता की भरपूर बारिश हो!'
},
{
    date: '14-01', // मकर संक्रांति
    message: '🪁 मकर संक्रांति की शुभकामनाएं! 🪁\nसूरज की नई किरणें आपके जीवन में सुख और समृद्धि लाए।'
},
{
    date: '15-08', // स्वतंत्रता दिवस
    message: '🇮🇳 स्वतंत्रता दिवस की शुभकामनाएं! 🇮🇳\nहमारे देश के वीर सिपाहियों को याद करें।'
},
// अन्य त्योहार जोड़ें
];

// 3. उपयोगकर्ता द्वारा निर्धारित समय
const scheduledTime = '10:00'; // यहाँ आप एक ही समय सेट करें

// 4. त्योहार की जांच करने का फ़ंक्शन
function checkFestival(currentTime) {
    const currentDate = currentTime.toLocaleDateString('en-GB'); // दिन/महीना
    const festival = festivals.find(f => f.date === currentDate);
    
    if (festival) {
        // त्योहार का संदेश भेजें
        return festival.message;
    }
    return null;
}

// 5. मुख्य चक्र जो समय की जांच करता है
setInterval(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    const [hour, minute] = scheduledTime.split(':');
    if (currentHour === parseInt(hour) && currentMinute === parseInt(minute)) {
        // त्योहार की जांच करें
        const festivalMessage = checkFestival(currentTime);
        if (festivalMessage) {
            // त्योहार का संदेश भेजें
            console.log(festivalMessage); // यहाँ आप इसे भेजने की फ़ंक्शन में बदलें
        } else {
            // यदि त्योहार नहीं है तो कोई और सामान्य संदेश भेज सकते हैं
            console.log('आज कोई त्योहार नहीं है।'); // यहाँ आप इसे भेजने की फ़ंक्शन में बदलें
        }
    }
}, 60000); // हर मिनट चेक करें
