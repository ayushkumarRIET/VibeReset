
// function scrollToSection(){

// window.scrollTo({
// top:600,
// behavior:"smooth"
// })

// }

// function openPrototype(){

// alert("Prototype dashboard will open here in the final version.");

// }
function scrollToPrototype(){

const section = document.getElementById("prototype")

section.scrollIntoView({
behavior:"smooth"
})

}

function openPrototype(){

alert("Prototype dashboard will open here.")

}
function toggleMenu(){
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('show');
}

/* Smooth Scroll for Nav Pills */
document.querySelectorAll('.nav-pill[href^="#"]').forEach(btn => {
  btn.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      target.scrollIntoView({behavior:"smooth"});
    }
  });
});
    
  // Grab the elements
const dropBtn = document.querySelector('.dropbtn');
const dropContent = document.querySelector('.dropdown-content');

// Toggle dropdown on click
dropBtn.addEventListener('click', () => {
  dropContent.style.display = dropContent.style.display === 'block' ? 'none' : 'block';
});

// Optional: Close dropdown if clicked outside
window.addEventListener('click', function(e) {
  if (!dropBtn.contains(e.target) && !dropContent.contains(e.target)) {
    dropContent.style.display = 'none';
  }
});