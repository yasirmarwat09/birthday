// === POPUP CONTROL ===
const backgroundMusic = document.getElementById("backgroundMusic");
const lovePopup = document.getElementById("lovePopup");
const startBtn = document.getElementById("startBtn");

document.body.classList.add("blur-active");

startBtn.addEventListener("click", () => {
  backgroundMusic.currentTime = 20;
  backgroundMusic
    .play()
    .then(() => {
      console.log("🎵 Music started");
    })
    .catch((err) => {
      console.log("❌ Audio error:", err);
    });

  lovePopup.style.display = "none";
  document.body.classList.remove("blur-active");
});

// === FLOATING ELEMENTS ===
const floatingElementsList = [
  "💖",
  "🌟",
  "✨",
  "💫",
  "🎂",
  "🌹",
  "💐",
  "🎈",
  "🎁",
  "💝",
];

function createFloatingElement() {
  const el = document.createElement("div");
  el.classList.add("floating-element");
  el.innerHTML =
    floatingElementsList[
      Math.floor(Math.random() * floatingElementsList.length)
    ];
  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = Math.random() * 1.5 + 1 + "rem";
  el.style.animationDelay = Math.random() * 2 + "s";
  el.style.animationDuration = Math.random() * 10 + 15 + "s";

  document.querySelector(".floating-elements").appendChild(el);
  setTimeout(() => el.remove(), 25000);
}

setInterval(createFloatingElement, 200);
for (let i = 0; i < 15; i++) {
  setTimeout(createFloatingElement, i * 150);
}

// Enhanced Birthday Wishes with Emojis
const wishes = [
  "💕 No one loves you more than I do. Happy Birthday, my heart! 💖",
  "🌟 You are my everything, today and always. Happy Birthday! ✨",
  "🌹 May your day be as beautiful and special as you are to me. 💝",
  "💫 Every moment with you is a treasure. Happy Birthday, love! 🎂",
  "😢 I missed you so much when we weren't talking. Let's never be apart again. 💞",
  "🤧 Sorry for the late wish, I was unwell, but my love for you is always strong. 💪💕",
  "👫 Together forever, my love. Happy Birthday! 🎉",
  "💡 You light up my life like the candles on your cake. 🕯️✨",
  "😊 Your smile is the most beautiful gift I could ever receive. 🎁💖",
  "🌍 Happy Birthday to the person who makes my world complete! 🌎💕",
  "🎊 Every day with you feels like a celebration. Happy Birthday! 🎈",
  "👯‍♀️ You're not just my best friend, you're my soulmate. Happy Birthday! 💝",
  "🌈 May this new year bring you endless joy and love. 🎂✨",
  "👸 You deserve all the happiness in the world. Happy Birthday, beautiful! 💖",
  "💓 My heart beats for you today and always. Happy Birthday! 🎵",
  "✨ You make every ordinary moment feel magical. Happy Birthday! 🪄",
  "🙏 I'm so grateful to have you in my life. Happy Birthday, sweetheart! 💕",
  "📅 Your birthday is a reminder of how blessed I am to know you. 🌟",
  "📸 Here's to another year of making beautiful memories together! 🎞️💖",
  "💘 You're the reason I believe in love. Happy Birthday, my darling! 🌹",
  "🎂 May your special day be filled with love, laughter, and cake! 🍰",
  "⭐ You're more precious to me than all the stars in the sky. 🌌",
  "🚀 Happy Birthday to my favorite person in the entire universe! 🌟",
  "🙌 Thank you for being the amazing person you are. Happy Birthday! 🎉",
  "📝 I love you more than words can express. Happy Birthday, my love! 💌",
  "🎵 You're the melody to my heart's song. Happy Birthday! 🎶",
  "🦋 Like a butterfly, you bring beauty wherever you go. Happy Birthday! 🌺",
  "🌸 Blossoming with love for you on your special day! 🌻",
  "🎯 You're my target of love, and I never miss! Happy Birthday! 💕",
  "🎪 Life with you is like a beautiful circus of joy. Happy Birthday! 🎠",
  "🌙 Even the moon is jealous of how you light up my nights. Happy Birthday! 🌟",
  "☀️ Your love shines brighter than the sun. Happy Birthday, sunshine! 🌞",
  "🌊 My love for you is as endless as the ocean. Happy Birthday! 🏖️",
  "🍫 You're sweeter than chocolate and more precious than gold. Happy Birthday! 💎",
  "🎨 You add color to my life in ways no one else can. Happy Birthday! 🌈",
  "📚 Our love story is my favorite book. Happy Birthday, my love! 💑",
  "🧩 You complete me like the perfect puzzle piece. Happy Birthday! 🧩",
  "🎭 You're the star of my life's theater. Happy Birthday! 🌟",
  "🏰 You're my fairytale come true. Happy Birthday, princess! 👑",
  "⚓ You're my safe harbor in life's storms. Happy Birthday! ⛵",
  "🌻 You turn my face toward the sun even on cloudy days. Happy Birthday! ☀️",
  "🍀 I'm the luckiest person to have you in my life. Happy Birthday! 🎰",
  "🎄 Every day with you feels like Christmas. Happy Birthday! 🎁",
  "🕊️ Your love gives me peace like nothing else. Happy Birthday! ☮️",
  "🎠 Life with you is a magical carousel ride. Happy Birthday! 🎡",
  "🏆 You're the champion of my heart. Happy Birthday! 🥇",
  "🍷 I'll keep falling in love with you year after year. Happy Birthday! 🥂",
  "🧳 Let's travel through life together forever. Happy Birthday! ✈️",
  "🎣 You caught my heart and I never want to be released. Happy Birthday! 💘",
  "💖 Every time you smile, my heart skips a beat. Happy Birthday, love! 💫",
  "💞 I didn’t believe in fate until I found you. Happy Birthday, my destiny! 🌠",
  "❤️ You are my forever and always. Happy Birthday, my everything. 🥰",
  "🥹 I fall deeper for you every single day. Happy Birthday, soulmate. 🌹",
  "🎇 You make my life brighter than fireworks. Happy Birthday, my spark! 💥",
  "🪷 You’re the calm in my chaos, the peace in my heart. Happy Birthday, angel. 👼",
  "💝 My heart is full of you. Wishing you a birthday as beautiful as your soul. 🌷",
  "Happy Birthday, my moonlight 💘 — your love lights up even my darkest nights.",
  "With every heartbeat 💞, I love you more. Wishing you the happiest birthday! 🎉",
  "The world got brighter when you were born ✨. Happy Birthday, my light 💕!",
  "You're the dream I never want to wake up from 🎂. Happy Birthday, my love! 🩷",
  "You are my favorite chapter in the book of life 📖. Happy Birthday! 💘",
  "Happy Birthday to the soul that completes mine 💖. Forever yours! 💞",
  "I didn't know what true love meant until I met you 💘. Happy Birthday! 🥳",
  "Every second spent with you is a blessing 💕. Happy Birthday, my angel! 🎂",
  "I fall in love with you all over again every day 🥰. Happy Birthday! 💫",
  "Your voice is my favorite melody 🎵. Happy Birthday, sweetheart 💝!",
  "You're my home, my peace, my person 💘. Happy Birthday, my love! 🏡",
  "Happy Birthday to the one who holds my heart 💓 and makes it dance 💃.",
  "Your happiness is my mission 💌. Happy Birthday, love of my life! 🩷",
  "You are the poetry my soul always searched for 📜. Happy Birthday! 💖",
  "I’ll always be your biggest fan 💘. Wishing you endless smiles today 🎈!",
  "Loving you is my favorite thing to do 💞. Happy Birthday, soulmate ✨!",
  "You shine brighter than any star in the sky 🌟. Happy Birthday, my galaxy 💫!",
  "You're my forever and then some 💘. Happiest of birthdays to you 🎉!",
  "Every moment spent with you is pure magic 🪄. Happy Birthday, love ✨!",
  "Just being with you feels like home 🏡. Happy Birthday, darling 💖!",
  "You're the beat of my heart and the smile on my face 💕. Happy Birthday! 🎂",
  "Here’s to many more sunsets together 🌅. Happy Birthday, my everything 💘!",
  "The best decision I ever made was loving you 💖. Happy Birthday, angel 👼!",
  "Your love makes me fearless 💪. Happy Birthday, my brave heart 💞!",
  "You are the only one who makes my heart whisper and scream at once 💘. Happy Birthday 💓!",
  "You're the light at the end of all my tunnels 🌟. Happy Birthday, my hope 💕!",
  "Loving you makes every day feel like spring 🌸. Happy Birthday, my bloom 💖!",
  "You're not just loved—you are deeply, endlessly adored 💘. Happy Birthday 🌹!",
  "I want to make all your dreams come true 💝. Happy Birthday, dream girl ✨!",
  "You're not a wish come true—you’re the whole sky 🌌. Happy Birthday, my universe 💘!",
  "Even forever wouldn’t be enough with you 🕰️. Happy Birthday, eternity 💞!",
  "You're the rhythm to my soul’s song 🎶. Happy Birthday, my melody 💓!",
  "🫶 In your arms, I find my home. Happy Birthday, my forever place 💞!",
  "💌 You’re the reason I believe love is written in the stars. Happy Birthday, my destiny 🌠!",
  "🪄 Every moment with you feels like a fairytale. Happy Birthday, my magic 💖!",
  "🫰 You make love feel effortless and beautiful. Happy Birthday, my heartbeat 💓!",
  "🌷 You are my morning calm, my midnight muse. Happy Birthday, my everything 🥰!",
  "💞 Your presence is my peace, your smile my paradise. Happy Birthday, my soul 💘!",
  "🔥 You set my soul on fire in the softest way. Happy Birthday, my flame 🔥!",
  "🎀 You are the gift I never knew I needed. Happy Birthday, my forever present 💝!",
  "💭 You live in my heart, rent-free, forever. Happy Birthday, my daydream 💘!",
  "💎 You're rarer than diamonds and dearer than dreams. Happy Birthday, my precious 💖!",
  "🕊️ In your love, I’ve found wings to fly. Happy Birthday, my freedom 💞!",
  "💘 If I could write you in the sky, every star would say 'I love you'. Happy Birthday, my sky full of love 🌌!",
];

let currentWishIndex = 0;
let autoAdvance;

const currentWishElement = document.getElementById("currentWish");
const currentIndexElement = document.getElementById("currentIndex");
const totalWishesElement = document.getElementById("totalWishes");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

totalWishesElement.textContent = wishes.length;

function updateWish() {
  currentWishElement.classList.remove("active");

  setTimeout(() => {
    currentWishElement.textContent = wishes[currentWishIndex];
    currentIndexElement.textContent = currentWishIndex + 1;
    currentWishElement.classList.add("active");
  }, 400);
}

function startAutoAdvance() {
  autoAdvance = setInterval(() => {
    currentWishIndex = (currentWishIndex + 1) % wishes.length;
    updateWish();
  }, 6000);
}

function stopAutoAdvance() {
  clearInterval(autoAdvance);
}

prevBtn.addEventListener("click", () => {
  stopAutoAdvance();
  currentWishIndex = (currentWishIndex - 1 + wishes.length) % wishes.length;
  updateWish();
  setTimeout(startAutoAdvance, 3000);
});

nextBtn.addEventListener("click", () => {
  stopAutoAdvance();
  currentWishIndex = (currentWishIndex + 1) % wishes.length;
  updateWish();
  setTimeout(startAutoAdvance, 3000);
});

// Arrow key controls
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") prevBtn.click();
  else if (e.key === "ArrowRight") nextBtn.click();
});

// Touch swipe
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  if (Math.abs(touchStartX - touchEndX) > 50) {
    if (touchStartX > touchEndX) nextBtn.click();
    else prevBtn.click();
  }
});

// Pause auto advance on hover
document
  .querySelector(".wish-container")
  .addEventListener("mouseenter", stopAutoAdvance);
document.querySelector(".wish-container").addEventListener("mouseleave", () => {
  setTimeout(startAutoAdvance, 1000);
});

startAutoAdvance();
