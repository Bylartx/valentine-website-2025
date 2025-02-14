// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Anni",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Quieres ser mi San Valentin? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Me quieres?",                                    // First interaction
            yesBtn: "Si",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "No te quiero, TE AMO! ❤️"           // Secret hover message
        },
        second: {
            text: "Que tanto me amas?",                          // For the love meter
            startText: "Asi de tanto!",                                   // Text before the percentage
            nextBtn: "Siguiente ❤️"                                         // Text for the next button
        },
        third: {
            text: "Serias mi San Valentin mañana? 🌹", // The big question!
            yesBtn: "SI!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW ASI DE TANTO ME AMAS?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "Al infinito y mas alla! 🚀💝",              // Shows when they go past 1000%
        normal: "Un poquito mucho 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "CAISTE! Esta es un acta de matrimonio 🎉💝💖💝💓",
        message: "Gracias por ser la mejor novia del mundo, TE AMO",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "10s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.7s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 2.0         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dgqe3qbkx/video/upload/v1739492913/grfsn7mrcd14eounxnvu.mp3", // Music streaming URL
        startText: "🎵 Would you fall in love with me again?",        // Button text to start music
        stopText: "🔇 Dejar de escuchar esta obra maestra",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
