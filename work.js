// Lyrics for flowers
const lyrics = [
    "A virtual flower for you 🌸",
    "Soch zara jaane ja hum to tujhe kitna chahte hain💮",
    "Rote hain humbhi agr teri aaknhon mein aansu aate hain! 😊",
    "Gaana to aata hai hi nhi magr fir bhi hum gaate hain 😭💗",
    "Hey dhuli maan kabhi kabhi saare jahan mein andhera hota hai😼🌸",
"Lekin raat ke baad hi to savera hota hi! 🌷🌼"
];

let lyricIndex = 0;
let apologyLevel = 0;

// Different apology levels
const apologies = [
    "Plz maaf krde, ab nhi karunga  😭🙏",
    "Theek na dubara soch le 🥺💖",
    "Pakka nhi baat krni na  😭💗",
    "Acha last baar to soch le 💘",
    "Aage code nhi karunga dimag ka bhosda ho gya itna hi likhne mein 💕"
];

function addflowers() {
    const flowerContainer = document.querySelector(".flower-container");
    const lyricsContainer = document.querySelector(".lyrics-container");

    if (lyricIndex < lyrics.length) {
        // Add a new lyric
        const newLyric = document.createElement("p");
        newLyric.textContent = lyrics[lyricIndex];
        lyricsContainer.appendChild(newLyric);
        lyricIndex++; // Move to the next lyric
    }

    // Create the flower
    const flower = document.createElement("div");
    flower.classList.add("flower");

    const flowers = ["🌸", "🌼", "🌻", "🌷", "💐"];
    flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

    // Position the flower randomly inside the box
    const randomX = Math.random() * 80 + 10; // 10% to 90% width
    flower.style.left = `${randomX}%`;
    flower.style.top = "0px"; // Start from the top

    flowerContainer.appendChild(flower);

    // Animate flower falling down
    flower.animate(
        [{ transform: "translateY(0px)" }, { transform: "translateY(100px)" }],
        { duration: 1500, easing: "ease-in-out" }
    );

    // Remove flower after animation
    setTimeout(() => {
        flower.remove();
    }, 1500);
}

// When "Yes" is clicked
function acceptApology() {
    document.getElementById("apology").textContent =
    "Thankeww maaf krne ke liye 😭💗🎀";
    document.querySelector(".button-container").style.display = "none"; // Hide buttons
}

// When "No" is clicked, make the apology funnier
function denyApology() {
    if (apologyLevel < apologies.length) {
        document.getElementById("apology").textContent = apologies[apologyLevel];
        apologyLevel++;
    } else {
        document.getElementById("apology").textContent = "Okay... ab mai chup ho jata hu 😭💔";
        document.querySelector(".button-container").style.display = "none"; // Hide buttons after max attempts
    }
}