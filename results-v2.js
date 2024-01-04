window.onload = function() {
    document.getElementById("refresh").style.display="none";
};


function clearBoxes(){
    var checkedBoxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkedBoxes.length; i++) {
        checkedBoxes[i].checked = false;
    }
}

function checkAllBoxes(){
    var checkedBoxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkedBoxes.length; i++) {
        checkedBoxes[i].checked = true;
        var event = new Event('change');
        checkedBoxes[i].dispatchEvent(event);
    }
}

//Calculates your score
function calculateScore() {
    var categories = {};
    var totalScore = 0;

    var questions = document.querySelectorAll('li');

    questions.forEach(function(question) {
        var checkbox = question.querySelector('input[type="checkbox"]');
        var isChecked = checkbox.checked;
        var weight = parseFloat(question.getAttribute('data-weight'));
        var category = question.getAttribute('data-category');

        if (isChecked) {
            totalScore += weight;

            if (!categories[category]) {
                categories[category] = 0;
            }
            categories[category] += weight;
        }
    });

    var meaning;
    if (totalScore >= 52) {
        meaning = "You are completely and utterly delusional.<br><br>It's very possible that you can no longer live without your delusions. You constantly fall in love with two-dimensional characters, and you wish you could walk straight into your computer screen. Real life will never be fulfilling to you. It's too late. But there's no need to feel guilty about it.<br><br>It doesn't matter what everyone else thinks. Surrender yourself fully to your delusions&#8212;to your imagination. As long as you're happy, nothing else matters. I just ask that you stay cognizant of your own health. Always make sure to eat, take care of yourself when you're sick, and take care of yourself in general. As long as you do that, you may continue living your blissful, luscious, delusional life, where you never have to worry about the pain of reality again.<br><br>Your delusions shall never betray you.<br><br>&quot;A Word from Takumi&quot;<br>D-Did you know? If you stay a virgin till you turn 30, you become a wizard and get magic powers. That's why 3D sucks shit. It's totally worthless, fuhihi... A girlfriend that lives inside your head is the best kind of girlfriend, after all. Everyone knows that, ROFLMAO."
    } else if (totalScore >= 42) {
        meaning = "You are extremely delusional.<br><br>You are likely subjected to nothing but painful things in your everyday life. I can understand why you would want to avert your eyes from such a reality. However, you are not yet ready to fully surrender yourself to these delusions, for you still believe that you will someday be able to return to reality and live a fulfilling life.<br><br>Do you ever find it difficult to distinguish between delusions and reality? This is not a good position to be in, as it's dangerous for your delusions to affect reality.<br><br>The time for you to make a decision is drawing near. Will you gather your resolve and devote yourself to your delusions? Or will you strive for the faint wisp of hope that you may return to reality?<br><br>&quot;A Word from Rimi&quot;<br>From this point forward, I don't want you to have any more delusions. I know all too well that reality is full of pain, but that's exactly what makes all the good, happy moments so irreplacable. So please, come back. Come back to reality. Okay?<br><br>&quot;A Word from Kozue&quot;<br>Hmm-sies... How to go fully delusional...? Weeeell, first, try not to talk to anybody at all... and theeeen... that's it! If you do that, then you'll have no choice but to have a whole bunch of bunches of delusions!"
    } else if (totalScore >= 27) {
        meaning = "You are moderately delusional, which is the most common diagnosis.<br><br>You live a relatively comfortable life in the real world, and you are likely able to spend around the same amount of time hanging out with friends as you do enjoying TV, video games, and other media by yourself. Human beings are creatures that require delusions in moderation, for such a thing is the reason why our minds are so enriched. In your case, I'm sure you can enjoy your delusions while still making the best of your real life.<br><br>Going forward, it'll be important to maintain a good balance between real life and delusions. If you allow your delusions to run too wild, you may find yourself in danger of becoming a freak in no time at all.<br><br>&quot;A Word from Ayase&quot;<br>I suggest you sing. Let song flow from your lips. Singing is an act that exists in reality. However, pouring your thoughts into song is an act born from delusion. Singing allows these two sides to coexist, and you can share such a beautiful coalescense with many. That is why you should sing.<br><br>&quot;A Word from Yua&quot;<br>I by no means think it's weird to enjoy anime, but please, don't let anime be the only thing you talk about in daily conversations."
     } else if (totalScore >= 15) {
        meaning = "You are slightly delusional.<br><br>Perhaps not everything in your life is going favorably, but you have one or more things that you can devote yourself to, and you work hard at them every day. For this reason, you probably don't have much time for things like delusions. If you keep trying your hardest, you should be able to live a fulfilling life.<br><br>But I urge you to please be careful. If you by some chance fall, or lose one of the things you're devoted to, you may suddenly find yourself tempted to abandon everything and escape into delusions.<br><br>&quot;A Word from Nanami&quot;<br>If you're gonna turn out like my big bro, make sure you're someone other people can rely on when things get tough. Even better if you stay in tune with the latest fashion trends! Oh, and it'd make me real happy if you made sure to take care of your family too.<br><br>&quot;A Word from Sena&quot;<br>Whatever you're aiming to do, push as hard as you possibly can to achieve it. But, if you need a break, take one. It's not smart to work too hard&#8212;you'll just end up burning yourself out. I recommend adding a good walk to your daily routine."
     } else {
        meaning = "You are not delusional in the slightest.<br><br>Your personality may be a bit too pragmatic, but you lead a very fulfilling life. You're adept at socializing, you have many friends, you've had many romantic relationships, and you're doing very well in work and school. You're most likely living a life in which delusions aren't even necessary. I cannot possibly understand why someone like you would want to take a quiz like this.<br><br>Please continue to live your happy, fulfilling life in the three-dimensional world. I'm sure that there are many fun and exciting things ahead of you.<br><br>&quot;A Word from Misumi&quot;<br>Whenever you see someone grinnin' 'cause they've got some delusion runnin' through their head, don't call 'em a freak! Instead, treat 'em like a friend! If you do that, chicks'll dig you because they think you're a nice guy, and you'll be even MORE likable!"
    }

    // Display total score
    var scoreDiv = document.getElementById("score");
    var meaningDiv = document.getElementById("meaning");
    var subscoreDiv = document.getElementById("subscore");
    var subtypeDiv = document.getElementById("subtype");
    scoreDiv.innerHTML = "Total Score: " + totalScore + " / 60";

    // Display subscores for each category
    subscoreDiv.innerHTML = ""
    for (var category in categories) {
        var score = categories[category];
        subscoreDiv.innerHTML += '<br>' + category + ": " + score;
    }

    var normalizedScores = {};

    // Normalize the scores
    for (var category in categories) {
        var score = categories[category];
        var maxScore = getMaxScoreForCategory(category); // Function to get the maximum possible score for each category
        normalizedScores[category] = score / maxScore;
    }


    // Check if at least 3 normalized scores are within 1 point of each other
    var isBalanced = false;
    var items = Object.keys(normalizedScores).map(function(key) {
      return [key, normalizedScores[key]];
    });

    items.sort(function(first, second) {
      return second[1] - first[1];
    });

    const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
    items=flatten(items).filter(function(_, i) {
        return i % 2 === 1;
    })
 
    var distThreshold = 0.05;
    var isBalanced = false;
    if (items.length < 3) {
      isBalanced = true;
    }
    else {
      for (let i = 0; i < items.length; i++) {
        if (items[i] > 0.0001) { 
          if (i+3 < items.length) {
            if (items[i] - items[i+2] < distThreshold) {
              isBalanced = true;
              break;
            }
          }
          else {
            if (items[i] < distThreshold) {
              if (8 - items.length > 2) {
                isBalanced = true;
                break;
              }
            }
          }
        }
      }
    }

    var highestCategory = "not any specific"; // Initialize with a default type

    // Find the category with the highest normalized score
    var highestNormalizedScore = -1;

    for (var category in normalizedScores) {
        var normalizedScore = normalizedScores[category];

        if (normalizedScore > highestNormalizedScore) {
            highestNormalizedScore = normalizedScore;
            highestCategory = category;
        }
    }
	
	if (isBalanced) {
    // If at least 4 normalized scores are within 1 point of each other
    subtypeDiv.innerHTML = "You are Balanced type.";
  } else {
      subtypeDiv.innerHTML = "You are " + highestCategory + " type.";
  }

  meaningDiv.innerHTML = meaning;
  document.getElementById("refresh").style.display="inline";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

}

function getMaxScoreForCategory(category) {
    // Define the maximum possible scores for each category
    var maxScores = {
        "Paranoid": 10,
        "Supernatural": 13,
        "Imaginative": 16.5,
        "Asocial": 5,
        "Emotional": 3,
        "Cognitive": 9,
        "Hallucination": 3.5,
        "Placebo": 1
    };

    return maxScores[category];
}

function clearPage() {
    clearBoxes()
    var scoreDiv = document.getElementById("score");
    var subscoreDiv = document.getElementById("subscore");
    var subtypeDiv = document.getElementById("subtype");
    var meaningDiv = document.getElementById("meaning");
    scoreDiv.innerHTML = ""
    subscoreDiv.innerHTML = ""
    subtypeDiv.innerHTML = ""
    meaningDiv.innerHTML = ""
    document.getElementById("refresh").style.display="none";
}
