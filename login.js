document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  function goToDashboard(userName) {
    const targetUrl = new URL("dashboard.html", window.location.href);
    targetUrl.searchParams.set("userName", userName);
    window.location.href = targetUrl.toString();
  }

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      alert("Enter both username and password");
      return;
    }

    localStorage.setItem("userName", username);
    localStorage.removeItem("userPhoto");

    goToDashboard(username);
  });
});