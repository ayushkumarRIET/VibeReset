// dashboard.js

// Example app usage (can change values to simulate)
const usage = [
  { app: "YouTube", minutes: 180 },
  { app: "Instagram", minutes: 200 },
  { app: "WhatsApp", minutes: 45 }
];

// Generate suggestions based on usage
function getSuggestions(usageData) {
  const suggestions = [];
  const totalMinutes = usageData.reduce((sum, app) => sum + app.minutes, 0);

  // Total screen time rule
  if (totalMinutes > 240) {
    suggestions.push("💡 You’re over your healthy screen limit today. Take a 10-min break.");
  }

  // Individual app usage rules
  usageData.forEach(app => {
    if (app.app === "YouTube" && app.minutes > 120) {
      suggestions.push("💡 YouTube usage is high! Consider switching to a productive app for 30 min.");
    }
    if (app.app === "Instagram" && app.minutes > 60) {
      suggestions.push("💡 Instagram usage is high! Try a short walk or breathing exercise.");
    }
    if (app.app === "WhatsApp" && app.minutes > 60) {
      suggestions.push("💡 WhatsApp usage is high! Limit notifications for better focus.");
    }
  });

  // Default suggestion if nothing triggered
  if (suggestions.length === 0) {
    suggestions.push("💡 Great job! Your app usage is within healthy limits today.");
  }

  return suggestions;
}

// Display suggestions in HTML
function displaySuggestions(suggestions) {
  const container = document.querySelector(".suggestions");
  container.innerHTML = ""; // clear previous
  suggestions.forEach(s => {
    const div = document.createElement("div");
    div.classList.add("suggestion");
    div.innerText = s;
    container.appendChild(div);
  });
}

// Run after page load
window.addEventListener("load", () => {
  const suggestions = getSuggestions(usage);
  displaySuggestions(suggestions);
});
document.addEventListener("DOMContentLoaded", () => {
  const updateBtn = document.getElementById("update-btn");

  // Initialize with 0 minutes
  updateSuggestions({ youtube: 0, instagram: 0, whatsapp: 0 });

  // Update suggestions when user clicks the button
  updateBtn.addEventListener("click", () => {
    const usage = {
      youtube: parseInt(document.getElementById("youtube-input").value) || 0,
      instagram: parseInt(document.getElementById("instagram-input").value) || 0,
      whatsapp: parseInt(document.getElementById("whatsapp-input").value) || 0
    };
    updateSuggestions(usage);
  });
});

// Function to update card and suggestions
function updateSuggestions(usage) {
  // Update Digital Wellbeing card
  document.getElementById("youtube-time").innerText = usage.youtube + " min";
  document.getElementById("instagram-time").innerText = usage.instagram + " min";
  document.getElementById("whatsapp-time").innerText = usage.whatsapp + " min";

  // Create array for rule checking
  const usageArray = [
    { app: "YouTube", minutes: usage.youtube },
    { app: "Instagram", minutes: usage.instagram },
    { app: "WhatsApp", minutes: usage.whatsapp }
  ];

  const suggestions = getSuggestions(usageArray);
  displaySuggestions(suggestions);
}

// Rule-based suggestion generator
function getSuggestions(usageData) {
  const suggestions = [];
  const totalMinutes = usageData.reduce((sum, app) => sum + app.minutes, 0);

  if (totalMinutes > 240)
    suggestions.push("💡 You’re over your healthy screen limit today. Take a 10-min break.");

  usageData.forEach(app => {
    if (app.app === "YouTube" && app.minutes > 120)
      suggestions.push("💡 YouTube usage is high! Consider switching to a productive app for 30 min.");
    if (app.app === "Instagram" && app.minutes > 60)
      suggestions.push("💡 Instagram usage is high! Try a short walk or breathing exercise.");
    if (app.app === "WhatsApp" && app.minutes > 60)
      suggestions.push("💡 WhatsApp usage is high! Limit notifications for better focus.");
  });

  if (suggestions.length === 0)
    suggestions.push("💡 Great job! Your app usage is within healthy limits today.");

  return suggestions;
}

// Display suggestions in HTML
function displaySuggestions(suggestions) {
  const container = document.querySelector(".suggestions");
  container.innerHTML = "";
  suggestions.forEach(s => {
    const div = document.createElement("div");
    div.classList.add("suggestion");
    div.innerText = s;
    container.appendChild(div);
  });
}