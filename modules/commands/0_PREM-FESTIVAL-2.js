module.exports.config = {
    name: 'FESTIVAL-WISH',
    version: '1.0',
    hasPermssion: 0,
    credits: 'YOUR NAME',
    description: 'THIS BOT IS MADE BY PREM BABU',
    commandCategory: 'AUTO SEND FESTIVALS',
    usages: '[AUTOMATIC]',
    cooldowns: 3
};

// 1. आवश्यक मॉड्यूल आयात करें (यदि कोई हो)
// const { sendMessage } = require('./messageSender'); // संदेश भेजने के लिए आपकी विधि

// 2. पूर्णिमा और मकर संक्रांति की सूची
const festivals = [
    {
        date: '01-14', // मकर संक्रांति
        message: '🌞 मकर संक्रांति की शुभकामनाएं! आपकी जिंदगी में सुख और समृद्धि की फसल लहराए! 🌾'
    },
    {
        date: '01-05', // जनवरी पूर्णिमा
        message: '🌕 जनवरी की पूर्णिमा की शुभकामनाएं! इस दिन आपके जीवन में सुख और समृद्धि की वृद्धि हो। 🌕'
    },
    {
        date: '02-05', // फरवरी पूर्णिमा
        message: '🌕 फरवरी की पूर्णिमा की शुभकामनाएं! इस दिन आपके जीवन में सुख और समृद्धि की वृद्धि हो। 🌕'
    },
    {
        date: '03-06', // मार्च पूर्णिमा
        message: '🌕 मार्च की पूर्णिमा की शुभकामनाएं! इस दिन आपके जीवन में सुख और समृद्धि की वृद्धि हो। 🌕'
    },
    {
        date: '04-05', // अप्रैल पूर्णिमा
        message: '🌕 अप्रैल की पूर्णिमा की शुभकामनाएं! इस दिन आपके जीवन में सुख और समृद्धि की वृद्धि हो। 🌕'
    },
    {
        date: '05-05', // मई पूर्णिमा
        message: '🌕 मई की पूर्णिमा की शुभकामनाएं! इस दिन आपके जीवन में सुख और समृद्धि की वृद्धि हो। 🌕'
    },
    {
        date: '06-03', // जून पूर्णिमा
        message: '🌕 जून की पूर्णिमा की शुभकामनाएं! इस दिन आपके जीवन में सुख और समृद्धि की वृद्धि हो। 🌕'
    },
    {
        date: '07-03', // जुलाई पूर्णिमा
        message: '🌕 जुलाई की पूर्णिमा की शुभकामनाएं! इस दिन आपके जीवन में सुख और समृद्धि की वृद्धि हो। 🌕'
    },
    {
        date: '08-01', // अगस्त पूर्णिमा
        message: '🌕 अगस्त की पूर्णिमा की शुभकामनाएं! इस दिन आपके जीवन में सुख और समृद्धि की वृद्धि हो। 🌕'
    },
    {
        date: '09-29', // सितंबर पूर्णिमा
        message: '🌕 सितंबर की पूर्णिमा की शुभकामनाएं! इस दिन आपके जीवन में सुख और समृद्धि की वृद्धि हो। 🌕'
    },
    {
        date: '10-29', // अक्टूबर पूर्णिमा
        message: '🌕 अक्टूबर की पूर्णिमा की शुभकामनाएं! इस दिन आपके जीवन में सुख और समृद्धि की वृद्धि हो। 🌕'
    },
    {
        date: '11-27', // नवंबर पूर्णिमा
        message: '🌕 नवंबर की पूर्णिमा की शुभकामनाएं! इस दिन आपके जीवन में सुख और समृद्धि की वृद्धि हो। 🌕'
    },
    {
        date: '12-26', // दिसंबर पूर्णिमा
        message: '🌕 दिसंबर की पूर्णिमा की शुभकामनाएं! इस दिन आपके जीवन में सुख और समृद्धि की वृद्धि हो। 🌕'
    }
];

// 3. उपयोगकर्ता द्वारा निर्धारित समय
const scheduledTime = '10:30'; // यहाँ आप एक ही समय सेट करें

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
