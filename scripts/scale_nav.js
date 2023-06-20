const circleNav = document.querySelectorAll(".circle-over")

//.navpoint is .doted-nav
//navPoints is circleNav
//subPoints is circles
//.sub-points is .circle-over

console.log('circleNav')

circleNav.forEach(object => {

    object.style.setProperty('--dotheight', `${object.offsetWidth}px`)
    object.style.setProperty('--dotbottom', `-${(object.offsetWidth - object.offsetHeight) / 2 }px`)
    

})