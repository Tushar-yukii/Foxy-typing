const words = 
  "in one good real one not school set they state number word about after need much open also change dolor sit amet consectetur adipisicing elit. Id vel vitae ipsum commodi earum in, voluptates consequatur ratione! Expedita corrupti ut dolor sit reicilon and go will to school"
  .split(" "); // Split into words instead of letters

const wordscount = words.length;

function randomword() {
  const randomindex = Math.floor(Math.random() * wordscount); // Use floor to avoid out of range
  return words[randomindex];
}

function formatword(word) {
  // Create HTML with letters wrapped in <span>
  const lettersHTML = word.split("").map(letter => `<span class="letter">${letter}</span>`).join("");
  return `<div class="word">${lettersHTML}</div>`;
}

function newgame() {
  const wordsContainer = document.getElementById("words");
  wordsContainer.innerHTML = ""; // clear old words
  for (let i = 0; i < 200; i++) {
    wordsContainer.innerHTML += formatword(randomword());
  }
}

// listening to keypress for typing
document.getElementById("game").addEventListener("keyup", (ev) => {
  const key = ev.key;
  console.log("Key pressed:", key); 
});

newgame();
