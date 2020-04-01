
var morning = 11;
var afternoon = 15;
var evening = 21;
var noon = 12;
var wakeupTime = 7;
var lunchTime = 13;
var dinnerTime = 20;
var napTime = 21;
var isParty=0;

function time(){
    var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var meridian = 'AM';
if(h>=noon){
    meridian = 'PM';
}
if(h>noon){
    h = h-12;
}
if(m<10){
    m = "0"+m;
}
if(h<10){
    h = "0"+h;
}
if(s<10){
    s = "0"+s;
}

document.getElementById("time").innerHTML = h+":"+m+":"+s+" "+meridian;

}

var updateImg = function(){

    time();
    var hours = new Date().getHours();
    //date will give us date based on our computer but time will be in 24 format 
    var textId = document.getElementById("text");
    var imageId = document.getElementById("image");
    if(isParty == 1){
        textId.innerText = "It's Partyy Timee!";
        imageId.src = "images/party.jpg";
        
    }
    else if(hours == wakeupTime){
        textId.innerText = "Wake up Lazyy!!";
        imageId.src = "images/baby1.jpg";
    }
    else if(hours == lunchTime){
        textId.innerText = "It's Lunch Time Let's Eatt!";
        imageId.src = "images/food.jpg";
    }
    else if(hours == dinnerTime){
        textId.innerText = "It's Dinner Time!";
        imageId.src = "images/chicken.jpg";
    }
    else if(hours == napTime){
        textId.innerText = "It's Sleeping Time!";
        imageId.src = "images/sleep.jpg"
    }
   else if(hours<=morning){
    textId.innerText = "Good Morning!";
    imageId.src = "images/baby3.jpg";
   }
   else if(hours<=afternoon){
       textId.innerText="Good Afternoon!";
       imageId.src = "images/baby4.jpg";
   }
   else{
    textId.innerText = "Good Evening!";
    imageId.src = "images/baby5.jpeg";
   }

}
updateImg();
var mine = setInterval(updateImg,1000);

//Events
var partyId = document.getElementById("party");

var partyEvent = function(){
    if(isParty == 1){
        isParty=0;
        partyId.value = "Party";
        partyId.style.backgroundColor="white";
        console.log(isParty);
        partyTime = 0;
    }
    else{
        isParty = 1;
        partyId.value = "Party Over";
        partyId.style.backgroundColor="orange";
        console.log(isParty);
        partyTime = new Date().getHours();
    }
}
partyId.addEventListener("click", partyEvent);

var wakeupId = document.getElementById("wakeup");
var wakeUpEvent = function(){
    wakeupTime = wakeupId.value;
}
wakeupId.addEventListener("change", wakeUpEvent);

var lunchId = document.getElementById("lunch");
var lunchEvent = function(){
    lunchTime = lunchId.value;
}
lunchId.addEventListener("change",lunchEvent);

var dinnerId = document.getElementById("dinner");
var dinnerEvent = function(){
    dinnerTime = dinnerId.value;
}
dinnerId.addEventListener("change", dinnerEvent);

var napId = document.getElementById("nap");
var napEvent = function(){
    napTime = napId.value;
}
napId.addEventListener("change",napEvent);


