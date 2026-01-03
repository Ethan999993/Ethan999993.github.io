let hamb = document.getElementById('hamburger');
let menu = document.getElementById('mobileMenu');
let isOpen = false;

hamb.addEventListener('click', showHide);

let links = document.querySelectorAll('.menuItem'); // This will give me an ARRAY of values
links.forEach(link => { // We will go through that array one by one, temporarily calling each item 'link' while it is being looked at
    link.addEventListener('click', function(){ // adds the same event listener to each one
        showHide(); // runs the callback function we define below
    })
})

function showHide(){
    if (isOpen){
        menu.style.maxHeight = '0px';
        menu.style.opacity = '0';
        console.log('Menu is closed.');
    } else {
        menu.style.maxHeight = '100vh';
        menu.style.opacity = '1';
        console.log('Menu is open.');
        
    }
    isOpen = !isOpen;

}

const linuxAnimation = document.querySelector('.linux_animation');
const animationText = document.getElementById('animationText');
let hasAnimated = false;

linuxAnimation.addEventListener('click', () => {
  if (hasAnimated) return;
  hasAnimated = true;

  animationText.textContent = 'Linux';
  linuxAnimation.classList.add('move-right');

  setTimeout(() => {
    linuxAnimation.classList.add('move-down');
  }, 600);

  setTimeout(() => {
    linuxAnimation.classList.add('move-left');
  }, 1200);

  setTimeout(() => {
    animationText.textContent = 'YOU CANNOT GET RID OF ME THAT EASILY MERE MORTAL! I AM THE ALL POWERFUL TUX!';
    linuxAnimation.classList.add('move-up');
  }, 15200); // 15s delay after third animation
});


