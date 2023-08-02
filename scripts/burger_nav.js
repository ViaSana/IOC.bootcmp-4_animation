// First we define our js variables 
const burgerButton = document.querySelector('.burger-button')
const burgerMenu = document.querySelector('.burger-menu')

let tl = gsap.timeline({ duration:0.5, }
    ).to(burgerMenu, {width: "14rem", opacity: 1, padding: '0 5px',}
    ).to('.burger-menu a', {opacity: 1,
    //stagger:.35
    })

tl.pause();

// then we start righting our new function
function toggleBurgerMenu() {

  // here we check to see if the burger button has the class of active
    if (burgerButton.classList.contains("active")){
        // more consle.log for testing
        console.log('Burger Button is active, DEACTIVATE')
        
        // remove the class of active
        burgerButton.classList.remove("active")

        tl.reverse()

    } else {
        // console for more testing
        console.log('Burger Button ACTIVATE')
        
        // re-adds the class for tracking
        burgerButton.classList.add("active")
        // opens up the burger menu and does the opsite of the close
        tl.play()
    }
}

// finally link it to the click action of the burger button
burgerButton.addEventListener('click', toggleBurgerMenu)