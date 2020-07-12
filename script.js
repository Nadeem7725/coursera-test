// Solution to Module 4
/*
Expected Output:
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/
(function (window){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for(var i=0;i<names.length;i++){
    var initLetter = (names[i].charAt(0)).toLowerCase();
    if(initLetter === 'j'){ //true if and only if strictly equals
      byeSpeaker.speak(names[i]);
    }else{
      helloSpeaker.speak(names[i]);
    }
  }
})(window);
