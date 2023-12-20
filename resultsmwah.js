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
        meaning = "You are completely and utterly delusional.<br><br>It's very possible that you can no longer live without your delusions. You constantly fall in love with two-dimensional characters, and you wish you could walk straight into your computer screen. Real life will never be fulfilling to you. It's too late. But there's no need to feel guilty about it.<br><br>It doesn't matter what everyone else thinks. Surrender yourself fully to your delusions—to your imagination. As long as you're happy, nothing else matters. I just ask that you stay cognizant of your own health. Always make sure to eat, take care of yourself when you're sick, and take care of yourself in general. As long as you do that, you may continue living your blissful, luscious, delusional life, where you never have to worry about the pain of reality again.<br><br>Your delusions shall never betray you.<br><br>"
    } else if (score >= 17) {
        meaning = "You are extermely delusional.<br><br>You are likely subjected to nothing but painful things in your everyday life. I can understand why you would want to avert your eyes from such a reality. However, you are not yet ready to fully surrender yourself to these delusions, for you still believe that you will someday be able to return to reality and live a fulfilling life.<br><br>Do you ever find it difficult to distinguish between delusions and reality? This is not a good position to be in, as it's dangerous for your delusions to affect reality.<br><br>The time for you to make a decision is drawing near. Will you gather your resolve and devote yourself to your delusions? Or will you strive for the faint wisp of hope that you may return to reality?"
    } else if (score >= 7) {
        meaning = "You are moderately delusional, which is the most common diagnosis.<br><br>You live a relatively comfortable life in the real world, and you are likely able to spend around the same amount of time hanging out with friends as you do enjoying TV, video games, and other media by yourself. Human beings are creatures that require delusions in moderation, for such a thing is the reason why our minds are so enriched. In your case, I'm sure you can enjoy your delusions while still making the best of your real life.<br><br>Going forward, it'll be important to maintain a good balance between real life and delusions. If you allow your delusions to run too wild, you may find yourself in danger of becoming a freak in no time at all."
     } else {
        meaning = "You are not delusional in the slightest.<br><br>Your personality may be a bit too pragmatic, but you lead a very fulfilling life. You're adept at socializing, you have many friends, you've had many romantic relationships, and you're doing very well in work and school. You're most likely living a life in which delusions aren't even necessary. I cannot possibly understand why someone like you would want to play a game like this.<br><br>Please continue to live your happy, fulfilling life in the three-dimensional world. I'm sure that there are many fun and exciting things ahead of you." 
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
