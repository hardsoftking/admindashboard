
/*=== 
import removeLeftnav() from "./leftsideMenu.js"
===*/

  let mainContainer_src = document.body.querySelector("#main-container");

/*===== Notification =====*/
  let notiIcon = document.body.querySelector(".notificationIcon");
  let notiBox = document.body.querySelector(".notificationBox");
  
/*===== Search =====*/
  let searchIcon = document.body.querySelector(".searchIcon");
  let searchBox = document.body.querySelector(".searchBox");

  /*===== function for Toggle Search =====*/
    function handleSearch(targetIcon,targetElem,targetClass){
      targetIcon.addEventListener("click",()=>{
        removeLeftnav()
        removeNotification()
        targetElem.classList.toggle(`${targetClass}`)
      })
    }
    handleSearch(searchIcon,searchBox,"activeSearch")
   
   function removeSearch(){
      searchBox.classList.remove("activeSearch")
    }
   /*close searchBox when click inside the main-container*/
    closeBox(searchBox,"activeSearch")
   
   
  /*=====function for Toggle Notification =====*/
    function handleNotification(targetIcon,targetElem,targetClass){
     targetIcon.addEventListener("click",()=>{
        removeLeftnav()
        removeSearch()
        targetElem.classList.toggle(`${targetClass}`)
      })
    }
    handleNotification(notiIcon,notiBox,"activeNotiBox")
    
    function removeNotification(){
      notiBox.classList.remove("activeNotiBox")
    }
   /*close notiBox when click inside the main-container*/ 
    closeBox(notiBox,"activeNotiBox")
    
    
    
 /*=== function for Close box when click inside main-container ===*/
   function closeBox(targetElem,targetClass){
     mainContainer_src.addEventListener("click",()=>{
       targetElem.classList.remove(`${targetClass}`);
     })
   }
   
   
