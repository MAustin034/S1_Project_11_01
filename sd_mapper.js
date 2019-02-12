/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Mickal Austin Mickal Austin 
   Date: 2/12/19   

*/



// variable with a value of the date
var thisTime = new Date();
//sets value of the timeStr to the moeth of thisTime variable
var timeStr = thisTime.toLocaleString();

document.getElementById("timeStamp").innerHTML = timeStr;

var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = (2 * thisMonth + thisHour) % 24;

var imgStr = "<img src='sd_sky" + mapNum + ".png'>";

document.getElementById('planisphere').insertAdjacentHTML('afterbegin', imgStr);