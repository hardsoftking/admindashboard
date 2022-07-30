/*=== 
import removeLeftnav() from "./leftsideMenu.js"
===*/

  let mainContainer_src = document.body.querySelector("#main-container");
/*==== flag ====*/
 let flagIcon = document.body.querySelector(".flagIcon")
 let flagBox = document.body.querySelector(".flagBox")
 
/*==== profile ====*/
 let profileIcon = document.body.querySelector(".user-profileIcon")
 let profileBox = document.body.querySelector(".profileBox")

/*==== settingIcon ====*/
 let settingIcon = document.body.querySelector(".settingIcon")
 let settingBox = document.body.querySelector(".setting-container")

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
        removeFlagBox()
        removeProfileBox()
        removeSettingBox()
        
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
        removeFlagBox()
        removeProfileBox()
        removeSettingBox()
        
        targetElem.classList.toggle(`${targetClass}`)
      })
    }
    handleNotification(notiIcon,notiBox,"activeNotiBox")
    
    function removeNotification(){
      notiBox.classList.remove("activeNotiBox")
    }
   /*close notiBox when click inside the main-container*/ 
    closeBox(notiBox,"activeNotiBox")
    
    
   /*=====function for Toggle Flag =====*/
    function handleFlagBox(targetIcon,targetElem,targetClass){
     targetIcon.addEventListener("click",()=>{
        removeLeftnav()
        removeSearch()
        removeProfileBox()
        removeSettingBox()
        removeNotification()
        
        targetElem.classList.toggle(`${targetClass}`)
      })
    }
    handleFlagBox(flagIcon,flagBox,"activeFlagBox")
    
    function removeFlagBox(){
      flagBox.classList.remove("activeFlagBox")
    }
   /*close notiBox when click inside the main-container*/ 
    closeBox(flagBox,"activeFlagBox")
    
    
   /*=====function for Toggle profileBox =====*/
    function handleProfileBox(targetIcon,targetElem,targetClass){
     targetIcon.addEventListener("click",()=>{
        removeLeftnav()
        removeSearch()
        removeFlagBox()
        removeNotification()
        removeSettingBox()
        
        targetElem.classList.toggle(`${targetClass}`)
      })
    }
    handleProfileBox(profileIcon,profileBox,"activeProfileBox")
    
    function removeProfileBox(){
      profileBox.classList.remove("activeProfileBox")
    }
   /*close notiBox when click inside the main-container*/ 
    closeBox(profileBox,"activeProfileBox")
    
    
   /*=====function for Toggle Setting =====*/
    function handleSettingBox(targetIcon,targetElem,targetClass){
     targetIcon.addEventListener("click",()=>{
        removeLeftnav()
        removeSearch()
        removeProfileBox()
        removeFlagBox()
        removeNotification()
        
        targetElem.classList.toggle(`${targetClass}`)
      })
    }
    handleSettingBox(settingIcon,settingBox,"activeSettingBox")
    
    function removeSettingBox(){
      settingBox.classList.remove("activeSettingBox")
    }
   /*close notiBox when click inside the main-container*/ 
    closeBox(settingBox,"activeSettingBox")
    
    
    
 /*=== function for Close box when click inside main-container ===*/
   function closeBox(targetElem,targetClass){
     mainContainer_src.addEventListener("click",()=>{
       targetElem.classList.remove(`${targetClass}`);
     })
   }
   
   