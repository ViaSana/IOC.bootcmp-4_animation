const circleNav = document.querySelectorAll(".circle-over")

circleNav.forEach(object => {

    object.style.setProperty('--dotheight', `${object.offsetWidth}px`)
    object.style.setProperty('--dotbottom', `-${(object.offsetWidth - object.offsetHeight) / 2 }px`)

})