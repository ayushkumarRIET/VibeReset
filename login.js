import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "apikeyexample",
  authDomain: "vibereset-496dfa.firebaseapp.com",
  projectId: "vibereset-496dfa",
  storageBucket: "vibereset-496dfa.firebasestorage.app",
  messagingSenderId: "851266079273",
  appId: "1:851266079273:web:6a340e6d256f0b60a1aa38"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("google-login").onclick = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    console.log(user);

    window.location.href = "dashboard.html";

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

document.getElementById("login-form").addEventListener("submit", function(e){
  e.preventDefault();

  const username = document.getElementById("username").value;

  if(!username){
    alert("Enter username");
    return;
  }

  localStorage.setItem("userName", username);

  window.location.href = "dashboard.html";
});