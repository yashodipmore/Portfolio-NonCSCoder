/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>
{
    const toggle = document.getElementById(toggleId) , nav = document.getElementById(navId)

    if(toggle && nav)
    {
        toggle.addEventListener('click', ()=>
        {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')


/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction()
{
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal(
{
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});


/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 


/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 


/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});


/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 


// Function to get the view count from local storage
function getViewCount() {
    const storedViews = localStorage.getItem('profileViews');
    return storedViews ? parseInt(storedViews, 10) : 0;
  }
  
  // Function to update the view count in local storage
  function updateViewCount() {
    const profileViews = getViewCount() + 1;
    localStorage.setItem('profileViews', profileViews.toString());
  
    // Update the view count display
    const viewCountElement = document.getElementById('profile-views-count');
    if (viewCountElement) {
      viewCountElement.textContent = profileViews.toLocaleString(); // Format the number with commas
    }
  }
  
  // Call the function to update the view count
  updateViewCount();
  
