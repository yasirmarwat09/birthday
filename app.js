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
  "🎉 Happy Birthday to an amazing friend! Wishing you a day full of joy! 🎂",
  "🌟 May your birthday be as wonderful and inspiring as you are! 💫",
  "🍰 Sending you a mountain of good vibes and sweet moments! 🎈",
  "🎁 Hope your day is filled with laughter, cake, and lots of love! 💕",
  "🌸 You light up every room — have the best birthday ever! ✨",
  "🌻 Wishing you all the smiles and sunshine today! ☀️",
  "🎊 Cheers to more adventures and great memories ahead! 🥳",
  "📚 May this year bring new knowledge and fun surprises! 🎓",
  "🧁 You deserve a day filled with everything you love most! 💖",
  "🍭 You're one of the kindest souls I know. Have a sweet birthday! 🌈",
  "🪄 Here's to a magical birthday and an even better year ahead! 💫",
  "🎈 Keep being amazing, and enjoy every moment of your special day! 🥰",
  "☕ Let your birthday be full of cozy vibes and good company! 🧸",
  "🍀 You’re a blessing to everyone around you. Happy Birthday! 💝",
  "🌷 To a beautiful friend inside and out — have a wonderful birthday! 🌹",
  "🎶 Wishing you happiness, health, and your favorite tunes all day long! 🎧",
  "🧁 You make life sweeter. Enjoy every bite of your birthday cake! 🍰",
  "🌼 May your year be filled with blooming opportunities! 💐",
  "🎨 Keep painting the world with your bright energy! 🎨",
  "🍩 Friends like you are rare. I'm lucky to know you. Happy Birthday! 🎂",
  "📸 Hope your day is picture-perfect! Smile big! 😄",
  "🧃 Here's to a refreshing year full of dreams come true! 🍹",
  "🎯 May you hit all your goals this year with ease and grace! 🌟",
  "📝 Today is all about celebrating the wonderful story you are! 📖",
  "🎠 Life with you is more colorful. Happy Birthday, dear friend! 🌈",
  "🎵 May your heart sing and your spirit dance today! 🎶",
  "🐝 Bee happy, it's your birthday! Sending buzzes of love! 🐝",
  "🛍️ Today is all about you! Treat yourself to something special! 💝",
  "🏆 You’re a winner at life — keep shining! Happy Birthday! 🌟",
  "🎡 Let the fun begin — your birthday deserves all the joy! 🎠",
  "🌈 Hope your birthday brings you colors of happiness and peace! 🎨",
  "🍫 Life's sweeter with friends like you. Enjoy your day! 🍬",
  "🧩 You complete every circle with kindness and grace! 💛",
  "🎬 You’re the main character today. Have a blockbuster birthday! 🍿",
  "🐾 Paw-sitively wishing you the best birthday ever! 🐶",
  "🧸 Soft hugs, warm wishes, and happy moments to you today! 💌",
  "🍰 May every slice of cake bring a new smile to your face! 🎂",
  "🚀 Another year to reach for the stars! You’ve got this! 💫",
  "🎒 Wishing you learning, laughter, and lovely memories ahead! 📚",
  "💌 You’re truly appreciated and loved. Have a joyful birthday! 💐",
  "🎈 Blow out the candles and wish big — this year is yours! 🕯️",
  "🌊 May your journey this year be calm, fun, and adventurous! 🏖️",
  "🎮 Press start on another exciting level of life! Happy Birthday! 🕹️",
  "🌺 Hope your birthday is peaceful and full of smiles! 🌸",
  "🥗 Wishing you a fresh start to a beautiful new chapter! 🥒",
  "🍓 May your day be filled with sweetness and giggles! 🍒",
  "🧼 Wash away the past and celebrate all that lies ahead! ✨",
  "🎤 You’re the voice of kindness — keep being you! 🎶",
  "📖 A new page, a new year — make it your best chapter yet! 📝",
  "🎀 Happy Birthday to someone who brings joy to so many! 💝",
  "🌄 Wishing you mornings full of sunshine and evenings full of rest! ☕",
  "🎉 You deserve a standing ovation for being an amazing friend! 👏",
  "📦 Here’s a box full of love, laughter, and good vibes! 🎁",
  "🧃 May you sip joy and chew laughter all day long! 🍬",
  "🪁 Let your spirit soar — it's your special day! 🎈",
  "🌞 Wishing you light, laughter, and lazy afternoons today! 🧡",
  "🍦 Hope your day is cool, colorful, and full of treats! 🍨",
  "🧃 Pour yourself some fun — it's your time to shine! 🍹",
  "🌟 Keep glowing, friend. You inspire everyone around you! 💫",
  "🎯 Wishing you sharp focus, big dreams, and tiny worries! 🎯",
  "🌼 Your kindness grows wherever it goes. Happy Birthday! 🌻",
  "📅 A special date for an even more special soul! 💖",
  "🎶 May your day have the rhythm of joy and the melody of peace! 🎼",
  "🐾 A big cheer from this side of the world to your amazing soul! 🐾",
  "🌍 Happy Birthday to someone who makes the world a better place! 🌎",
  "🎊 Celebrating the kind, smart, and awesome person you are! 🥳",
  "🍁 Like seasons change, you keep getting better with time! 🍂",
  "🛋️ Put your feet up and relax — you deserve it all today! 💆‍♀️",
  "🧵 You thread love and joy into every heart you touch! 🪡",
  "🎨 Add more sparkle to the world — one birthday at a time! ✨",
  "🎡 Life is a ride — and you’re one joyful passenger! 🎠",
  "🍿 Sit back and enjoy the celebration you truly deserve! 🎬",
  "📸 Freeze today’s happiness and replay it all year long! 📷",
  "📚 You've got chapters of greatness ahead. Happy Birthday! 📖",
  "🧁 Birthdays come once a year — but your impact lasts forever! 💖",
  "🍭 Sending you sugar, spice, and everything nice! 🎉",
  "🎯 Another year, another goal to smash! You go, girl! 💪",
  "☁️ Float through your day with peace and happiness! 🕊️",
  "🌟 You're proof that kindness never goes out of style! 💕",
  "🍰 A slice of cake for the sweet friend who deserves the world! 🎂",
  "🧃 Drink in the joy of your day — it's all yours! 🍹",
  "🏆 You’re winning at being an awesome human! 🥇",
  "🎠 Hop on to your dreams — life’s a beautiful carousel! 🎡",
  "📦 Pack up the past and unwrap new blessings ahead! 🎁",
  "🍩 Here’s to donuts, dreams, and delightful memories! 🍩",
  "🧸 Sending you birthday comfort, joy, and warm wishes! 🧡",
  "🎉 May your birthday be peaceful, powerful, and perfect! 🌼",
  "🍓 Keep being bright, bold, and brilliant — that’s YOU! 🌈",
  "📖 Your story inspires. Can’t wait to read the next chapter! 💫",
  "🎁 You’re a gift to so many. Enjoy your day, lovely soul! 🎀",
  "🕯️ Light the candles, make a wish — your time is now! 🪄",
  "🌷 Stay true, stay kind, stay amazing! Happy Birthday! 💐",
  "🍵 May you be surrounded by warmth, love, and tea! 🫖",
  "💌 Thanks for being a friend who makes life extra special! 🎈",
  "🥳 Here’s to you — a wonderful friend and a beautiful soul! 🎉",
  "🎂 Let the candles sparkle as brightly as your spirit! 🕯️",
  "🌄 Hope your year ahead is calm, creative, and kind! 🌞",
  "🎉 From morning smiles to evening stars — make it magical! 🌙",
  "🌻 Wishing you peace in your heart and sunshine in your life! ☀️",
  "🎊 Happy Birthday to a true gem of a friend! 💎",
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
