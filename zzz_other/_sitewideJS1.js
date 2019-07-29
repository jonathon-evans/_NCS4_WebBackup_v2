//Onload functions
var path = window.location.pathname;
var nav = {};
navlist = document.getElementsByClassName('navbar-nav')[0].getElementsByTagName("li");

//initialize selectors for active
for(var i=0; i<navlist.length; i++){
  //console.log(navlist[i].getElementsByTagName("span")[0].innerHTML.toLowerCase())
  if(navlist[i].getElementsByTagName("span")[0].innerHTML.toLowerCase() == "about") nav.A = navlist[i];
  if(navlist[i].getElementsByTagName("span")[0].innerHTML.toLowerCase() == "knowledge") nav.K = navlist[i];
  if(navlist[i].getElementsByTagName("span")[0].innerHTML.toLowerCase() == "training") nav.T = navlist[i];
    if(navlist[i].getElementsByTagName("span")[0].innerHTML.toLowerCase() == "research") nav.R = navlist[i];
      if(navlist[i].getElementsByTagName("span")[0].innerHTML.toLowerCase() == "lab") nav.L = navlist[i];
  if(navlist[i].getElementsByTagName("span")[0].innerHTML.toLowerCase() == "professional development") nav.PD = navlist[i];


}



$(document).ready(function(){  //change color of navbar back to normal if not on homepage

//set lab portal colors
 if(path.includes("/labportal")){
      $('div #NAV').addClass('changeColorH_Lab');
  }

//set the active page tab at the top navigation to active
if(path.includes("/knowledgeportal")){  //keep tab active on subpages of a portal
  if(!nav.K.classList.contains("active")){
        nav.K.classList.add("active");
        nav.K.classList.add("current-page");
      }
} else if(path.includes("/trainingportal")){
  if(!nav.T.classList.contains("active")){
        nav.T.classList.add("active");
        nav.T.classList.add("current-page");
      }
  } else if(path.includes("/professionaldevportal")){
  if(!nav.PD.classList.contains("active")){
        nav.PD.classList.add("active");
        nav.PD.classList.add("current-page");
      }
  } else if(path.includes("/researchportal")){
  if(!nav.R.classList.contains("active")){
        nav.R.classList.add("active");
        nav.R.classList.add("current-page");
      }
  } else if(path.includes("/aboutncs4")){
  if(!nav.A.classList.contains("active")){
        nav.A.classList.add("active");
        nav.A.classList.add("current-page");
      }
}else if(path.includes("/labportal")){
  if(!nav.L.classList.contains("active")){
        nav.L.classList.add("active");
        nav.L.classList.add("current-page");
      }
  }
// if someone tries to access site from outdated IE, display message
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');
    if (msie > 0 || trident > 0) {  // IE 10 or older || IE 11
        if(typeof(Storage) !== "undefined"){  //if browser has localstorage (most do)
          if(localStorage.getItem("IE_OneAlert") !== "true"){
              // $("#IEAlert").css("visibility", "visible");
              alert("NOTICE:  This website is not yet fully optimized for Internet Explorer 11 and earlier. You may experience some visual issues that will hinder your experience.  \n\nPlease consider downloading a browser that is still supported by it's publisher, such as... \nMicrosoft Edge/Internet Explorer 12+ (Windows 10 default browser)\nGoogle Chrome\nMozilla Firefox\nSafari (Apple products)\n\nThese browsers are faster and much more secure than this version of Internet Explorer.\n\n If you would like to report any bugs with this browser, please go to the bottom of the website and click on \"Report Website Issue\".");
              localStorage.setItem("IE_OneAlert", "true");
          }
        }
    }

//set navbar edge dimensions so that it is adaptive and easier to maintain (make room for logo & login/profile buttons)
    if(document.getElementsByClassName("home")[0] != null) $(".navbar").addClass("athome") //if not at home
    if(document.getElementById("Welcome_Content") != null ) $(".navbar").addClass("logged")  //if logged in

});
