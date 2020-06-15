

// 1. Declare an empty array using JS literal notation to store student names in future.



// var studentName =[]



// 2. Declare an empty array using JS object notation to store student names in future.


// var studentName =["Ayan","Mudassir","Hussain","Waqar"]



// 3. Declare and initialize a strings array.



// var fruits = ["Apple","Mango","Papaya","Melon"]




// 4. Declare and initialize a numbers array.


// var num = [11,22,33,44,15]



// 5. Declare and initialize a boolean array.



// var boolean_array = [ true, false]





// 6. Declare and initialize a mixed array.



// var mix_array = ["Apple",12,"Mango", true, false]




// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:





// var Qualification =["FSC","HSC","BCS","B.Com","MBA","MS","M.PHIl","PHD","BS"]
// var index = 0;

// document.write("<h1> Qualifications </h1> <br/>")
// document.write("1)" + Qualification[index] +"<br/>")
// document.write("2)" + Qualification[++index] +"<br/>")
// document.write("3)" + Qualification[++index] +"<br/>")
// document.write("4)" + Qualification[++index] +"<br/>")
// document.write("5)" + Qualification[++index] +"<br/>")
// document.write("6)" + Qualification[++index] +"<br/>")
// document.write("7)" + Qualification[++index] +"<br/>")
// document.write("8)" + Qualification[++index] +"<br/>")
// document.write("9)" + Qualification[++index] +"<br/>")







// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:





// var names =["Michael","John","Tony"]
// var num = [320,230,480]
// var total_marks=500;

// document.write("<h2> Score Of " +names[0] + " is "+num[0]+" Percentage: " +(num[0]/total_marks)*100+"%<h2>")
// document.write("<h2> Score Of " +names[1] +" is "+num[1]+" Percentage: " +(num[1]/total_marks)*100+"%<h2>")
// document.write("<h2> Score Of " +names[2] +" is "+num[2]+" Percentage: " +(num[2]/total_marks)*100+"%<h2>")




// 9. Initialize an array with color names. Display the array
// elements in your browser.

        
    //     var colorName = ["pink","Yellow","Red","Purple",]
    //     // console.log(colorName)
    //    document.write(colorName)


// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.


        // var user_color = prompt("What color you want add in start of array")
        // colorName.unshift(user_color)
        // console.log(colorName)
    

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.


        // var user_color = prompt("What color you want add in start of array")
        // colorName.push(user_color)
        // console.log(colorName)


// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
 
    
        // var user_color1 = prompt("What color you want add in start of array")
        // var user_color2 = prompt("What color you want add in start of array")
        // colorName.unshift(user_color1)
        // colorName.unshift(user_color2)
        // console.log(colorName)

// d. Delete the first color in the array. Display the updated
// array in your browser.

            //   colorName.shift()
            //   console.log(colorName)

// e. Delete the last color in the array. Display the updated
// array in your browser.

          
            // colorName.pop()
            // console.log(colorName)



// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.


        //   var colorIndex = +prompt("Which index you want add Color")
        //   var user_color =  prompt("What Color you want add")

        //   colorName.splice(colorIndex,0,user_color)

        //   console.log(colorName)

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

        // var colorIndex = +prompt("Which index you want to start delete Color")
        // var deleteRange =  +prompt("How many color you want delete")

        // colorName.splice(colorIndex,deleteRange)
        // console.log(colorName)






// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.




// var scoresStudent=[123,111,344,234,470]

// document.write("Scores Of Student "+scoresStudent +"<br/>")
// document.write("Scores Of Student "+scoresStudent.sort())




// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.




// var citites = ["Karachi","Lahore","Quetta","Peshawer","Pindi","Naran"]

// document.write("Original array: " + citites+"<br/>" )
// document.write("Slice array: " + citites.slice(2,4)+"<br/>" )




// 12. Write a program to create a single string from thebelow mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)




// var arr = ["This","is","my","Cat"];
// var j_arr = arr.join()

// document.write("Original array: " + arr+"<br/>" )
// document.write("Join array: " + j_arr +"<br/>" )

// console.log(typeof arr + " " + typeof j_arr)





// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)



// var arr = [];

// arr.unshift("Keyoard")
// arr.unshift("Mouse")
// arr.unshift("Monitor")
// arr.unshift("Printer")
// document.write(arr+"<br/>")
// document.write(arr.pop() +"<br/>")
// document.write(arr.pop() +"<br/>")
// document.write(arr.pop() +"<br/>")
// document.write(arr.pop() +"<br/>")





// 14. Create a new array. Store values one by one in such a waythat you can access the values in reverse order. (Last In-First Out)




// var arr = [];

// arr.unshift("Keyoard")
// arr.unshift("Mouse")
// arr.unshift("Monitor")
// arr.unshift("Printer")
// document.write(arr+"<br/>")
// document.write(arr.shift() +"<br/>")
// document.write(arr.shift() +"<br/>")
// document.write(arr.shift() +"<br/>")
// document.write(arr.shift() +"<br/>")



// 15. Write a program to store phone manufacturers (Apple,  Samsung, Motorola, Nokia, Sony & Haier) in an array.Display the following dropdown/select menu in your browser using document.write() method:

var phones = ["Apple","Samsung","Nokia","Sony","Haier"]