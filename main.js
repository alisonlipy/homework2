var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  var random = Math.floor(Math.random()*array.length)
  return array[random];
}

var storyText = '＄564,302,000,000';
randomize.addEventListener('click', result);

function result() {
  var newStory = storyText; 
  
  if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Bob',name); 
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300*0.0714286) + ' stone'; 
    var temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 farenheit',temperature); 
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory; 
  story.style.visibility = 'visible';
}
