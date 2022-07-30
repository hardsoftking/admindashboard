/*=== 
import removeSearch() from "./topNav.js"
import removeNotification from "./topNav.js"
===*/

let mainContainer = document.body.querySelector("#main-container");
let btn_menuBar = document.body.querySelector(".openMenu");
let leftsideMenu =document.body.querySelector(".left-navbar");

/*=== Toggle Leftside menu ===*/
btn_menuBar.addEventListener("click", ()=>{
  removeSearch()
  removeNotification()
  leftsideMenu.classList.toggle("show_left-navbar")
})

function removeLeftnav(){
      leftsideMenu.classList.remove("show_left-navbar")
    }

mainContainer.addEventListener("click", ()=>{
  leftsideMenu.classList.remove("show_left-navbar")
})



/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.left-nav__link')
function colorLink(){
  linkColor.forEach(l=> l.classList.remove('active'))
  this.classList.add('active')
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))


/*===== COLLAPSE MENU  =====*/ 
let linkCollapse = document.body.querySelectorAll('.collaps_link')

var i;

for(i=0;i<linkCollapse.length;i++){
  
  linkCollapse[i].addEventListener('click', function(){
    
    const collapseMenu = this.nextElementSibling
    collapseMenu.classList.toggle('showCollaps')
    
    const rotate = collapseMenu.previousElementSibling
    const rot= rotate.lastElementChild
    rot.classList.toggle('rotate')
    
  })
}


/*=== Collapse sub menu ===*/
 let collapseSubMenuLinks = document.body.querySelectorAll('.collaps_submenu')
 
var j;

for(j=0; j<collapseSubMenuLinks.length; j++){
  
  collapseSubMenuLinks[j].addEventListener('click', function(){
    
    const collapseSubMenu = this.nextElementSibling
    collapseSubMenu.classList.toggle('showSubMenu')
    
    const rotate = collapseSubMenu.previousElementSibling
    const rot= rotate.lastElementChild
    rot.classList.toggle('rotate')
    
  })
}


/*=== no rotate when click form left nav link===*/
let notRotate = document.body.querySelector(".not-rotate")
let formBadge = document.body.querySelector(".formBadge")

notRotate.addEventListener("click",()=>{
  console.log("not rotate ")
  formBadge.classList.add("notRotate")
})

