//Important variables to make our page work and to make all the thing that we are going to put in the funcions display on our page
var currentDay = $("#currentDay"); //This var now is used.
var present = $('col-md-1');
var nineAmEl = $('#hour-9');
var tenAmEl = $('#hour-10');
var elevenAmEl = $('#hour-11');
var twelvePmEl = $('#hour-12');
var onePmEl = $('#hour-01');
var twoPmEl = $('#hour-02');
var threePmEl = $('#hour-03');
var fourPmEl = $('#hour-04');
var fivePmEl = $('#hour-05');

//Console logs


//Function to display the current date and time using moment also we are going to use this to make the timeblocks change of color
function displayTime() {
    var dayWeek = moment().format('dddd, MMMM Do hh:mm:ss a');
    currentDay.text(dayWeek);
}

//Handling with the timeblocks changing of color

    function allHours(dayWeek, currentDay) {
    if (currentDay == 1) {
        return nineAmEl.addClass('present');
    } else if (dayWeek == 0) {
        return nineAmEl.addClass('past');
    } else if (dayWeek < 9 && dayWeek > 17) {
        return nineAmEl.addClass('future');
    } else if (dayWeek == 10) {
        return tenAmEl.addClass('present');
    } else if (dayWeek == 11) {
        return tenAmEl.addClass('past');
    } else if (dayWeek < 10 && dayWeek > 17) {
        return tenAmEl.addClass('future');
    } else if (dayWeek == 11) {
        return elevenAmEl.addClass('present');
    } else if (dayWeek == 12) {
        return elevenAmEl.addClass('past');
    } else if (dayWeek < 11 && dayWeek > 17) {
        return elevenAmEl.addClass('future');
    } else if (dayWeek == 12) {
        return twelvePmEl.addClass('present');
    } else if (dayWeek == 13) {
        return twelvePmEl.addClass('past');
    } else if (dayWeek < 12 && dayWeek > 17) {
        return twelvePmEl.addClass('future');
    } else if (dayWeek == 13) {
        return onePmEl.addClass('present');
    } else if (dayWeek == 14) {
        return onePmEl.addClass('past');
    } else if (dayWeek < 13 && dayWeek > 17) {
        return onePmEl.addClass('future');
    } else if (dayWeek == 14) {
        return twoPmEl.addClass('present');
    } else if (dayWeek == 15) {
        return twoPmEl.addClass('past');
    } else if (dayWeek < 14 && dayWeek > 17) {
        return twoPmEl.addClass('future');
    } else if (dayWeek == 15) {
        return threePmEl.addClass('present');
    } else if (dayWeek == 16) {
        return threePmEl.addClass('past');
    } else if (dayWeek < 15 && hour > 17) {
        return threePmEl.addClass('future');
    } else if (dayWeek == 16) {
        return fourPmEl.addClass('present');
    } else if (dayWeek == 17) {
        return fourPmEl.addClass('past');
    } else if (dayWeek < 14 && dayWeek > 17) {
        return fourPmEl.addClass('future');
    } else if (dayWeek == 17) {
        return fivePmEl.addClass('present');
    } else {
        return fivePmEl.addClass('future');
    }

}


//Lets call the function displayTime with a time interval so it can display the current time
setInterval(displayTime, 1000);
//Lets call all the other variables
allHours();