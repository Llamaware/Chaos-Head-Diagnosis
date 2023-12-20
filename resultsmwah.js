window.onload = function() {
    document.getElementById("refresh").style.display="none";
};


function clearBoxes(){
    var checkedBoxes = document.querySelectorAll('input:checked') 
    for (var i = 0; i < checkedBoxes.length; i++) { 
        checkedBoxes[i].checked = false;
    }
}

//Calculates your score
function calculateScore() {
    var totalChecked = document.querySelectorAll('input[type="checkbox"]:checked') 
    var score = totalChecked.length 

    //Associates your score with what it says about you
    var meaning;
    if (score >= 22) {
        meaning = "You are completely and utterly delusional."
    } else if (score >= 17) {
        meaning = "You are extermely delusional."
    } else if (score >= 7) {
        meaning = "You are moderately delusional, which is the most common diagnosis.<br><br>You live a relatively comfortable life in the real world, and you are likely able to spend around the same amount of time hanging out with friends as you do enjoying TV, video games, and other media by yourself. Human beings are creatures that require delusions in moderation, for such a thing is the reason why our minds are so enriched. In your case, I'm sure you can enjoy your delusions while still making the best of your real life.<br><br>Going forward, it'll be important to maintain a good balance between real life and delusions. If you allow your delusions to run too wild, you may find yourself in danger of becoming a freak in no time at all."
     } else {
        meaning = "You are not delusional in the slightest." 
    }

    var scoreDiv = document.getElementById("score"); 
    var meaningDiv = document.getElementById("meaning"); 
    scoreDiv.innerHTML = "Your Score: " + score.toString() 
    meaningDiv.innerHTML = meaning 
    document.getElementById("refresh").style.display="inline"; 
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}


function clearPage() {
    clearBoxes() 
    var scoreDiv = document.getElementById("score"); 
    var meaningDiv = document.getElementById("meaning"); 
    scoreDiv.innerHTML = "" 
    meaningDiv.innerHTML = "" 
    document.getElementById("refresh").style.display="none"; 
}
