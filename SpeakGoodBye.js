//continuation of Module 4 Solution

(function (window) {
var byeSpeaker = {};
var speakWord = "Good Bye";

byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}

window.byeSpeaker = byeSpeaker;

})(window);