let score=prompt ("plz enter the number for finding grade:");


if (score >= 80 && score <= 100){
    grade=('A');
}
else if( score >= 70 && score <= 79){
    grade=('B');
}
else if ( score >= 60 && score <= 78){
    grade=('C');
}
else if (score >= 0 && score <= 59) {
    grade=('Failed');
}

 document.write("Your grade acording to the number: ",grade,"<br>");


//  ASSIGNMENT USING ARRAYS AND LENGTH ====================>

 var firstNames = ["Blue ", "Pink ", "Red "];
 var lastNames = ["Royal", "Baby", "Fusia"];
 var fullNames = [];
 for
 (var i = 0; i < firstNames.length; i++) {
     for
     (var j = 0; j < lastNames.length; j++) {
     
fullNames.push(lastNames[j] + firstNames[i]);
 
}
}
document.write(fullNames,"<br>");

//  ASSIGNMENT USING ARRAYS AND LENGTH ====================>
// EXAMPLE # 2

var firstNames = ["Blue ", "Pink ", "Red "];
var lastNames = ["Royal", "Baby", "Fusia"];
var fullNames = [];
for
(var i = 0; i < firstNames.length; i++) {
    for
    (var j = i; j < lastNames.length; j++) {
    
fullNames.push(lastNames[j] + firstNames[i]);

document.write(fullNames,"<br>")
}
}