const express = require("express");
const app = express();
app.use(express.json());

app.post("/get-suggestions", (req, res) => {
  const usage = req.body.usage || [
    { app: "YouTube", minutes: 150 },
    { app: "Instagram", minutes: 75 },
    { app: "WhatsApp", minutes: 45 }
  ];

  const suggestions = [];
  const totalMinutes = usage.reduce((a,b)=>a+b.minutes,0);

  if(totalMinutes>240)
    suggestions.push("You’re over your healthy screen limit today. Take a 10-min break.");

  usage.forEach(u=>{
    if(u.app==="YouTube" && u.minutes>120)
      suggestions.push("YouTube usage is high! Consider switching to a productive app for 30 min.");
    if(u.app==="Instagram" && u.minutes>60)
      suggestions.push("Instagram usage is high! Try a short walk or breathing exercise.");
  });

  res.json({ suggestions });
});

app.listen(3000, ()=>console.log("Server running on port 3000"));