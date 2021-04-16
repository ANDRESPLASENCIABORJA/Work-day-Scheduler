//Important variables to make our page work and to make all the thing that we are going to put in the funcions display on our page
var currentDay = $("#currentDay"); //This var now is used.
var present = $('col-md-1');


//Console logs


//Function to display the current date and time using moment also we are going to use this to make the timeblocks change of color
function displayTime () {
    var dayWeek = moment().format('dddd, MMMM Do hh:mm:ss a');
    currentDay.text(dayWeek);
}

//Handling with the timeblocks changing of color
moment.updateLocale('zh-cn', {
    meridiem :
function nineHour (hour) {
    var nineAmEl = $('#hour-9');
    if (hour == 9) {
        return nineAmEl.addClass('present');
    } else if (hour <= 17) {
        return nineAmEl.addClass('past');
    } else {
        return nineAmEl.addClass('future');
    }
}
});


function hourTen (hour) {
    var tenAmEl = $('#hour-10');
    if (hour == 10) {
        return tenAmEl.addClass('present');
    } else if (hour == 11) {
        return tenAmEl.addClass('past');
    } else {
        return tenAmEl.addClass('future');
    }
}

function hourEleven (hour) {
    var elevenAmEl = $('#hour-11');
    if (hour == 11) {
        return elevenAmEl.addClass('present');
    } else if (hour <= 17) {
        return elevenAmEl.addClass('past');
    } else {
        return elevenAmEl.addClass('future');
    }
}

function hourTwelve (hour) {
    var twelvePmEl = $('#hour-12');
    if (hour == 12) {
        return twelvePmEl.addClass('present');
    } else if (hour <= 17) {
        return twelvePmEl.addClass('past');
    } else {
        return twelvePmEl.addClass('future');
    }
}

function hourOne (hour) {
    var onePmEl = $('#hour-01');
    if (hour == 13) {
        return onePmEl.addClass('present');
    } else if (hour <= 17) {
        return onePmEl.addClass('past');
    } else {
        return onePmEl.addClass('future');
    }
}

function hourTwo (hour) {
    var twoPmEl = $('#hour-02');
    if (hour == 14) {
        return twoPmEl.addClass('present');
    } else if (hour <= 17) {
        return twoPmEl.addClass('past');
    } else {
        return twoPmEl.addClass('future');
    }
}

function hourThree (hour) {
    var threePmEl = $('#hour-03');
    if (hour == 15) {
        return threePmEl.addClass('present');
    } else if (hour <= 17) {
        return threePmEl.addClass('past');
    } else {
        return threePmEl.addClass('future');
    }
}

function hourFour (hour) {
    var fourPmEl = $('#hour-04');
    if (hour == 16) {
        return fourPmEl.addClass('present');
    } else if (hour <= 17) {
        return fourPmEl.addClass('past');
    } else {
        return fourPmEl.addClass('future');
    }
}


function hourFive (hour) {
    var fivePmEl = $('#hour-05');
    if (hour == 17) {
        return fivePmEl.addClass('present');
    } else {
        return fivePmEl.addClass('future');
    }
}






//Lets call the function displayTime with a time interval so it can display the current time
setInterval(displayTime, 1000);
//Lets call all the other variables
nineHour();
hourTen();
hourEleven();
hourTwelve();
hourOne();
hourTwo();
hourThree();
hourFour();
hourFive();