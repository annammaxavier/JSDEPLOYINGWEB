/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var clear_day = document.getElementById("clear-button");
var mon = document.getElementById("monday");
var tue = document.getElementById("tuesday");
var wed = document.getElementById("wednesday");
var thu = document.getElementById("thursday");
var fri = document.getElementById("friday");


var cost = document.getElementById("calculated-cost");
var half = document.getElementById("half");
var full = document.getElementById("full");

let dayCounter = 0;
let totalcost = 0;
let dailyRate = 35;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


function selectDay(event){
    if (event.target.classList.contains('clicked') === false){
      event.target.classList.add('clicked');
      dayCounter++;
      Recalculate();
    }
  }

// day_buttons.forEach(item => item.addEventListener('click', selectDay));
mon.addEventListener("click", selectDay);
tue.addEventListener("click", selectDay);
wed.addEventListener("click", selectDay);
thu.addEventListener("click", selectDay);
fri.addEventListener("click", selectDay);


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearDay(){
	// day_buttons.forEach(item => item.classList.remove('clicked'));
	mon.classList.remove("clicked");
	tue.classList.remove("clicked");
	wed.classList.remove("clicked");
	thu.classList.remove("clicked");
	fri.classList.remove("clicked");
	half.classList.remove("clicked");
	full.classList.add("clicked");
    dayCounter = 0;
    Recalculate();
  
 }
clear_day.addEventListener('click', clearDay);





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function HalfDayClicked(){
    half.classList.add('clicked');
    full.classList.remove('clicked');
    dailyRate = 20;
    Recalculate();

}

half.addEventListener('click', HalfDayClicked);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function FullDayClicked(){
	full.classList.add('clicked');
	half.classList.remove('clicked');
	dailyRate = 35;
	Recalculate();

}
full.addEventListener('click', FullDayClicked);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function Recalculate(){
	totalcost = dayCounter * dailyRate;
	cost.innerHTML = totalcost;
}