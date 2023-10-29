const quotes = [
    "Make the decision, make another. Remake one past, you cannot.",
    "I think beauty comes from actually knowing who you are. That’s real beauty to me.",
    "Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you don’t take the shot. Wayne Gretzky",
    "You are the shuckiest shuck faced shuck in the world! ― James Dashner, The Maze Runner",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The future depends on what you do today. - Mahatma Gandhi",
    "Memories, pressed between the pages of my mind. Memories, sweetened through the ages just like wine. Elvis Presley",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Remember to focus on goals that are within your control.Tony Dungy, The One Year Uncommon Life Daily Challenge",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
  ];
  
  const quoteText = document.getElementById("quoteText");
  const generateButton = document.getElementById("generateButton");
  
  generateButton.addEventListener("click", generateQuote);
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
  }
  
  generateQuote(); // Generate an initial quote on page load
  