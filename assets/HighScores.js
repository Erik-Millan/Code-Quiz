var clearBtn = document.getElementById("clear");

// Clear High Scores
clearBtn.addEventListener("click", function() {
    localStorage.clear();
})

var finalScore = {
  contactInfo: "",
  timeleft: ""
}

var finalScore = [];


//Load Scores 
var loadScores = function() {
  var finalScore = localStorage.getItem("contactInfo, timeleft");
  finalScore = JSON.parse(finalScore);
  
    if (finalScore !== null) {
    
       for (var i = 0; i < finalScore.length; i++) {

        var createList = document.createElement("li");   
        var finalScore = finalScore[i];
        createList.textContent = finalScore;
      }    
    }
    finalScore.push(finalScore);
};