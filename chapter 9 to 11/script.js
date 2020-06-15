// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”



// var city = prompt("Enter City name");
// if(city === "karachi"){
// alert("Welcome to city of lights")
// }
// else{
//     alert("Invalid City")
// }





// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.





// var gender = prompt("Enter Gender");

// if(gender === "male"){
// alert("Good morning Sir")
// }
// else if(gender === "female"){
// alert("Good Morning Madam")
// }
// else{
//     alert("Invalid")
// }





// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:




// var color = prompt("Enter Trafic signal Color")
// if(color === "red"){
// alert("Must Stop")
// }
// else if(color === "yellow"){
// alert("Ready To Move")
// }
// else if(color === "green"){
// alert("Move Now")
// }
// else{
//     alert("Inavlid")
// }





// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”






// var fuel = +prompt("Enter Remaining Fuel");
//  if(fuel <= 0.25){
// alert("Please Refill The Fuel In Your Car")
//  }
//  else{
//      alert("Have A Safe Journey")
//  }




//  5. Run this script, & check whether alert message would be displayed or not. Record the outputs.


// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }


// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }


//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }


// if (c === 13){
// alert("condition 2 is true");}


// if (++c < 14){
// alert("condition 3 is true");}


// if(c === 14){
// alert("condition 4 is true");}



// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");}


// if (true){
// alert("True");}


// if (false){
// alert("False");}


// if("car" < "cat"){
// alert("car is smaller than cat");}





// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:





// var total_marks = +prompt("Enter Total marks")
// var get_marks = +prompt("Enter Your Marks");

// var per = (get_marks/total_marks)*100


// document.write("<h1>Marksheet</h1> <br/>")

// if(per >= 80){
//     document.write("<h3>Total Marks: "+total_marks+"</h3>")
//     document.write("<h3>Marks Obtained: "+get_marks+"</h3>")
//     document.write("<h3>Percentage: "+per+"%</h3>")
//     document.write("<h3>Grade: A-One</h3> ")
//     document.write("<h3>Remarks: Excellent</h3> ")
// }
// else if(per >= 70){
//     document.write("<h3>Total Marks: "+total_marks+"</h3>")
//     document.write("<h3>Marks Obtained: "+get_marks+"</h3>")
//     document.write("<h3>Percentage: "+per+"%</h3>")
//     document.write("<h3>Grade: A</h3> ")
//     document.write("<h3>Remarks: Good</h3> ")
// }
// else if(per >= 60){
//     document.write("<h3>Total Marks: "+total_marks+"</h3>")
//     document.write("<h3>Marks Obtained: "+get_marks+"</h3>")
//     document.write("<h3>Percentage: "+per+"%</h3>")
//     document.write("<h3>Grade: B</h3> ")
//     document.write("<h3>Remarks: You Need To Improve</h3> ")
// }
// else if(per < 60){
//     document.write("<h3>Total Marks: "+total_marks+"</h3>")
//     document.write("<h3>Marks Obtained: "+get_marks+"</h3>")
//     document.write("<h3>Percentage: "+per+"%</h3>")
//     document.write("<h3>Grade: Fail</h3> ")
//     document.write("<h3>Remarks: Fail</h3> ")
// }





// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.



// var user_num = +prompt("Guess the number")
// var num = 5;

// if(user_num === num){
//     alert("Bingo! Correct")
// }
// else if(user_num === num-1 || user_num === num+1){
//     alert("Close! Enough")
// }
// else{
//     alert("Try Again")
// }




// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.




// var num = +prompt("Enter numer")

// if(num%3 === 0){
// alert("Given Numer is Divisile")
// }
// else{
//     alert("Not Divisile")
// }





// 9. Write a program that checks whether the given input is an even number or an odd number.



// var num = +prompt("Enter Numbers")

// if(num%2 === 0){
// alert("Even Numbers")
// }
// else if(num%2 === 1){
// alert("Odd Numbers")
// }




// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”




// var temp = +prompt("Enter temperature")

// if(temp > 40){
//     document.write("It is too Hot Outside")
// }
// else if(temp > 30){
//     document.write("The weather Today Is Normal")
// }
// else if(temp > 20){
//     document.write("Today ! weather is cool")
// }
// else if(temp > 10){
//     document.write("OMG ! weather is so cool")
// }



// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.



// var value1 = +prompt("Enter First Value")
// var value2 = +prompt("Enter Second value")
// var operaotr= prompt("Enter operator in above\n +  -  *  /  %")

// if(operaotr === "+"){
//     alert(value1 + value2)
// }
// else if(operaotr === "-"){
//     alert(value1 - value2)
// }
// else if(operaotr === "*"){
//     alert(value1 * value2)
// }
// else if(operaotr === "/"){
//     alert(value1 / value2)
// }
// else if(operaotr === "%"){
//     alert(value1 % value2)
// }