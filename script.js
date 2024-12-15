const button = document.getElementById('infiniteButton');
const message = document.getElementById('message');
const lightMode = document.getElementById('lightMode');
const darkMode = document.getElementById('darkMode');

let clickCount = 0;

const messages = [
 "Why did you click?",
 "Why did you click?",
  "Still clicking?",
  "There's no point, you know.",
  "You must be really curious!",
  "Are you expecting something?",
  "This will never end!",
  "Persistence is key!",
  "Okay, keep going!",
  "What are you hoping for?",
  "The button isn't magic.",
  "Just one more click?",
  "Or maybe ten more?",
  "Getting tired yet?",
  "I hope you're having fun!",
  "Why are you still here?",
  "Nothing has changed, right?",
  "Maybe something will happen?",
  "Or maybe not...",
  "Aren't you curious?",
  "Or are you just stubborn?",
  "This could go on forever...",
  "I admire your dedication!",
  "Still waiting for something?",
  "How long will you click?",
  "What if this never ends?",
  "The suspense is real, huh?",
  "Are you expecting a reward?",
  "Spoiler: There isn't one.",
  "But who knows...",
  "Maybe you're on to something?",
  "What if there's a secret?",
  "Or maybe it's a trap!",
  "You decide!",
  "Keep going, if you dare!",
  "You've clicked this many times?",
  "Wow, you're persistent!",
  "The button likes you now.",
  "Or does it?",
  "Only you can decide.",
  "Is this button hypnotic?",
  "You're making history here!",
  "No one's clicked as much as you!",
  "Or maybe they have...",
  "The button isn't talking.",
  "What if it could?",
  "Now you're thinking...",
  "How far will you go?",
  "I bet you'll click again.",
  "Just once more?",
  "Okay, now for real...",
  "What if you don't click?",
  "Nah, you'll click anyway!"
];

button.addEventListener('click', () => {
  clickCount++;
  button.textContent = messages[clickCount % messages.length];
  message.textContent = `You've clicked ${clickCount} times!`;
  
  if (clickCount % 50 === 0) {
    // Trigger a celebratory animation or effect
    alert("Congratulations on 50 clicks!");
  }
});

lightMode.addEventListener('click', () => {
  document.body.style.background = "#f0f8ff";
  document.body.style.color = "#333";
});

darkMode.addEventListener('click', () => {
  document.body.style.background = "#333";
  document.body.style.color = "#f0f8ff";
});
