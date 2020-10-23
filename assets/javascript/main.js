var menu=document.querySelector(".menu__big");
var button=document.querySelector(".header__menu");
var listOne=document.querySelector(".menu__list");
var listTwo=document.querySelector(".menu__mini--item");
var check=0;
var main=document.querySelector(".main");
button.onclick=function()
{
    if(check==0)
    {
        listTwo.style.display="none"; 
        //menu.style.transform="translateX(0rem)"; 
        listOne.style.display="block";
        menu.style.width="25rem"; 
       // main.style.transform="translateX(0rem)";
        console.log(check);
        check=1;
    }else if(check==1)
    {
        listOne.style.display="none"; 
       // menu.style.transform="translateX(-18rem)";   
        listTwo.style.display="block";
        menu.style.width="6rem"; 
      //  main.style.transform="translateX(-18rem)";
        console.log(check);
        check=0;
    }
}