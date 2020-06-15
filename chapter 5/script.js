
// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.



// var add1 =  parseInt(prompt("enter number"))
// var add2 =  parseInt(prompt("enter number"))

// var result = add1 + add2
// alert(result)




// 2. Repeat task1 for subtraction, multiplication, division & modulus.



// var add1 =  parseInt(prompt("enter number"))
// var add2 =  parseInt(prompt("enter number"))

// var result = add1 * add2
// alert(result +" For multiplication")

// var result = add1 / add2
// alert(result +" For Division")

// var result = add1 - add2
// alert(result +" For Substration")

// var result = add1 % add2
// alert(result +" For Modulus")




// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.




// var num 
// document.write("Value after variable declaration is " + num +"<br/>")
// num=5
// document.write("Intial value is " + num +"<br/>")
// ++num
// document.write("Value after increment is " + num + "<br/>")
// num = num+7;
// document.write("Value after addition is " + num + " <br/>")
// --num
// document.write("value after decrement " + num + "<br/>")
// num = num%num;
// document.write("The reminder is " + num )





// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. 




// var tickets = +prompt("How much tickets you want to buy")
// var t_price = +prompt("Whats is price of tickets")

// document.write("Total cost to buy " + tickets +" tickets to a movie is " + tickets*t_price )





// 5. Write a script to display multiplication table of any number in your browser.



// var table = +prompt("What Table You want To print")
// var range = +prompt("From where tale to start")

// document.write("<h2> Tale Of " + table +" </h2><br/>")
// document.write(table +" x " + range + " = "+ table*range + "<br/>")
// document.write(table +" x " + ++range + " = "+ table*range + "<br/>")
// document.write(table +" x " + ++range + " = "+ table*range + "<br/>")
// document.write(table +" x " + ++range + " = "+ table*range + "<br/>")
// document.write(table +" x " + ++range + " = "+ table*range + "<br/>")
// document.write(table +" x " + ++range + " = "+ table*range + "<br/>")
// document.write(table +" x " + ++range + " = "+ table*range + "<br/>")
// document.write(table +" x " + ++range + " = "+ table*range + "<br/>")
// document.write(table +" x " + ++range + " = "+ table*range + "<br/>")
// document.write(table +" x " + ++range + " = "+ table*range + "<br/>")




// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.



// var F_temp = +prompt("Enter farrenheit temperature to convert celsius")
// var C_temp = +prompt("Enter Celsius temperature to convert Farrenheit")

// var F_res = (C_temp * 9/5) + 32
// var C_res = (F_temp-32)*5/9

// document.write(F_temp +"°F is " + C_res +"°C <br/>" )
// document.write(C_temp + "°C is " +F_res +"°F" )



// 7. Write a program to implement checkout process of ashopping cart system for an e-commerce website. Store the following in variables




// var item = +prompt("Price of item one")
// var Quantity_item = +prompt("Quantity of item")
// var Charges = +prompt("Enter Shipping Charges")


// document.write("Price of item is " + item +"<br/>")
// document.write("Quantity of item is" + Quantity_item + "<br/>")
// document.write("Shipping Charges is" + Charges + "<br/><br/><br/>")
// document.write("Total cost of your order is " + (item*Quantity_item+Charges))






// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser


// var t_num = +prompt("Enter Total nubmer")
// var obt_num = +prompt("Enter Obtain nubmer")
// var per = (obt_num/t_num)*100

// document.write("Total Number is " + t_num +"<br/>")
// document.write("Obtain Number is " + obt_num +"<br/>")
// document.write("Your Percentage is " + per +"%<br/>")






// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write ascript to convert the total currency to Pakistani Rupees.Perform all calculations in a single expression.
// Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)




// var dollar = +prompt("Enter Us Dollar Ammount")
// var rate_dollar = +prompt("Enter Dollar Rate")
// var riyal = +prompt("Enter Saudi Riyal Amount")
// var rate_riyal = +prompt("Enter Saudi Riyal Rate")

// var result = (dollar*rate_dollar) + (riyal*rate_riyal)
// document.write("Total Currency in PKR is: " + result)





// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression



// var num = 5;

// num = num+5*10/2
// document.write(num)





// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.



// var cur_year = +prompt("Enter Current Year")
// var birth_year = +prompt("Enter your birth year")

// var result = cur_year - birth_year

// document.write("Current Year is: " +cur_year +"<br/>")
// document.write("birth Year is: " +birth_year +"<br/>")
// document.write("Your age  is: " +result +"<br/>")




// 12. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.



// var fav_snacks = +prompt("Enter Snacks name")
// var cur_age = +prompt("Enter Current Age")
// var max_age = +prompt("Enter Your Maximum Age")
// var qt = +prompt("Enter Quantity as Per Year eat")

// document.write("Favourite Snacks  " + fav_snacks +"<br/>")
// document.write("Current Age is " + cur_age +"<br/>")
// document.write("Maximum Age is " + max_age +"<br/>")
// document.write("Enter Quantity as per year eat " + qt +"<br/>")
// document.write("You need" + ((cur_age-max_age)*qt)+" Snacks To last You Until the ripe old age of " + max_age)

