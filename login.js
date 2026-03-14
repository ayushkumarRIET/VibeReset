const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent actual submission

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if(username === "" || password === "") {
    alert("Please fill in all fields");
    return;
  }

  // For now, just a dummy check
  if(username === "admin" && password === "1234") {
    alert("Login successful!");
    // redirect to dashboard/main page
    window.location.href = "index.html"; 
  } else {
    alert("Invalid username or password");
  }
});