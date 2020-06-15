// 1. Declare and initialize an empty multidimensional array. (Array of arrays)



        // var empty_arr = [[],[],[],[],[]]


     

// 2. Declare and initialize a multidimensional array representing the following matrix:





// var multi_arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]


// for(var i = 0;i<multi_arr.length;i++){
 
//         for(var j = 0;j<multi_arr[i].length;j++){
//                     document.write(multi_arr[i][j])
//  }
//  document.write("<br/>")
// }




// 3. Write a program to print numeric counting from 1 to 10.



// for(var i = 1;i<=10;i++){
// document.write(i + "<br/>")
// }





// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.



// var start = +prompt("Start of Table")
// var length = +prompt("length of table")
// var table = +prompt("Which Table")

// for(var i = start; i <= length;i++){
// document.write(table+" x "+ i +" = " + table*i + "<br/>")
// }





// 5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]



// var fruits = ["Apple","Banana","Mango","Orange","Strawberry"]

// for(var i = 0; i<fruits.length;i++){
//     document.write( fruits[i] +"<br/>")
// }
// document.write("<br/><br/>")
// for(var i = 0; i<fruits.length;i++){
//     document.write( "Element at index "+ i + " is "+fruits[i]+"<br/>")
// }



// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k




// var num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// document.write("<h2>Counting</h2>")
// for(var i =0; i< num.length;i++){
//     document.write(num[i]+",")
// }

// document.write("<br/><br/>")
// document.write("<h2>Reverse Counting</h2>")

// for(var i =num.length-1; i >= 0;i--){
//     document.write(num[i]+",")
// }
// document.write("<br/><br/>")

// document.write("<h2>Even</h2>")

// for(var i=0; i<=20;i++){                           
//     if( i%2  === 0){                     
//         document.write(i+",")
//     }
// }

// document.write("<br/><br/>")

// document.write("<h2>Odd</h2>")

// for(var i=0; i<=20;i++){
//     if( i%2  === 1){
//         document.write(i+",")
//     }
// }


// document.write("<cr/><br/>")

// document.write("<h2>Series</h2>")

// for(var i=2; i<=20;i++){
//     if( i%2  === 0){
//         document.write(i+"K,")
//     }
// }








// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:





// var user = prompt("Enter item")
// var items = ["cake","apple pie","cookie","chips","patties"]


// var flag = false; 

// for(var i = 0;i<items.length;i++){
//            if(items[i] === user){
//              flag = true;
//              break;
//            }             
// }
// if(flag){
//         alert("your item " + user +" is at index: " +i )
// }
// else{
//         alert("Not Found")
// }




// 8. Write a program to identify the largest number in the  given array.
// A = [24, 53, 78, 91, 12].



// var array = [24, 53, 78, 91,100, 12];
// var largest= 0;

// for (i=0; i<=array.length;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }

// alert("largest number is " + largest)





// 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]



// var array = [24,53, 78, 91,100, 12];
// var smallest= array[0];

// for (i=0; i<=array.length;i++){
//     if (array[i]<smallest) {
//         var smallest=array[i];
//     }
// }

// alert("Smallest number is " + smallest)




// 10. Write a program to print multiples of 5 ranging 1 to 100.


// var table = +prompt("Which Table")
// var start = +prompt("Start of Table")
// var length = +prompt("length of table")

// document.write("<h2> Table of: "+ table +"<h2/>")
// document.write("<h2> Starting  Pont: "+ start +"<h2/>")
// document.write("<h2> Length of Table : "+ length +"<h2/>")
// for(var i = start; i <= length;i++){
// document.write( table*i + "<br/>")
// }