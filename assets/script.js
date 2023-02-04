const text_area = $('textarea');
const saveButton = $('.savebtn'); 
const timeblocks = Array.from(document.getElementsByClassName("time-block"));

const currentTime = new Date();
const currentHour = currentTime.getHours();




// when the button is clicked will display the current date on the page
let btnShow = document.querySelector('button');
let output = document.querySelector('h1');

btnShow.addEventListener('click', () => {
    let today = new Date();
    
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();

    let current_date =  `${month}/${date}/${year}`;
    output.innerHTML = current_date;
})

// event handler to save the events

const saveEvent = function(){
    // will retrieve the value of the textarea
    const event = text_area.value;

    // store the event in local storage
    localStorage.setItem('event', event);
}

// will attach the event handler function to the save button
saveButton.on('click', saveEvent);

// Retrieve the stored event when the page is reloaded
const storedEvent = localStorage.getItem('event');
if(storedEvent){
    text_area.value =storedEvent;
}

// get the value stored in local storage
var saved_value = localStorage.getItem('event');

// check if the value is set in the local storage
if(saved_value){
    console.log(saved_value);
} 
// if no value is set in the textarea will log that no event was set in the localstorage
const saveBtn = document.querySelector('.saveBtn');
saveButton.on('click', function() {
  const textarea = this.parentElement.querySelector('textarea');
  console.log(textarea.value);
  console.log(textarea);
  if (textarea.value == "") {
    console.log("No event stored in local storage");
    return;
  }
  const eventId = this.parentElement.id;
  localStorage.setItem(eventId, textarea.value);
});

function timeTracker(){
    // get the current number of hours 
    var timeNow = moment().hour();

    // loop over the time blocks
    $(".time-block").each(function(){
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // to check the time and add the classes for the background indicators
        if (blockTime < timeNow){
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow){
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else{
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
    })
 }

 let hours = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];
hours.forEach(function(hour) {
  let description = $("#hour-" + hour + " .description");
  description.val(localStorage.getItem("hour-" + hour));
});






