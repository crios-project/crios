var secret = "87737676"; //will
var input = "";
var timer;
var mode = false;

$(document).keyup(function(e) {
    //alert(e.which);
    input += e.which;    
    
    clearTimeout(timer);
    timer = setTimeout(function() { input = ""; }, 200);
    
    check_input();
});

function check_input() {
    if(input == secret) {
        //the secret code
        window.location = "full.htm";
    }
}

$(document).ready(function() {
    setInterval(function() { $('#info').html('Keystroke: ' + input); }, 100);
});