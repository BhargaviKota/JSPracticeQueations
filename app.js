// 1. Write a JavaScript program to calculate the volume of a
// sphere using an arrow function


// let pie=22/7;
// let sphereVolume= (radius)=>{
//     let volume= 4/3*pie*(radius*radius*radius)
//     console.log(`The volume of the sphere is: ${volume.toFixed(2)}`)
// }

// sphereVolume(4)




// 3. When a user brings the mouse over the bold text it should be
// highlighted.

// let text= document.querySelector('b');

// text.addEventListener("mouseenter",()=>{
//     text.style.cssText="color: red ; font-size:30px; font-style:italic;background-color:lightblue"
// })

// 4. Show the width and height of the window (it should change
//     when window is resized)
    
// let height,width;

// let windowHeight= ()=>{
//     height= window.innerHeight;
//     width= innerWidth;
//     console.log(`The current height and width of the window is: 
//     Height:  ${height}
//     width: ${width}`)
// }

// windowHeight()

// 5. Write a JavaScript program to display the current day and
// time in the following format.Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38



// let date = new Date();
// let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// let today= ()=>{
//     let day= weekday[date.getDay()]
//     console.log(`Today is: ${day}.`)
//     let hours= date.getHours();
//     if(hours>12){
//         console.log(`Current time is: ${hours-12} pm: ${date.getMinutes()}: ${date.getSeconds()}`)
//     }
//     else{
//         console.log(`Current time is: ${hours} am: ${date.getMinutes()}: ${date.getSeconds()}`)
//     }
// }

// today()

// 6. Write a JavaScript program to find the area of a triangle
// where lengths of the three of its sides are 5, 6, 7.

// let triangle=(a,b,c)=>{
//     let res=(a+b+c)/2
//     let s= res.toFixed(2)
//     let area= Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2)
    // console.log(`The area of a triangle is: ${area}`)
// }

// triangle(5,3,5)

// 7. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with the guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

// let a = prompt("Enter any number to guess the output")

// if(a>=1 && a<=10){
//     console.log("Good Work");
// }else{
//     console.log("Not matched")
// }

// 8. Write a JavaScript program to convert temperatures to and
// from Celsius, Fahrenheit. Go to the editor [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output : 60°C is 140 °F 45°F is 7.222222222222222°C


// let input= prompt("Enter C for celsius and F for Fahrenheit to convert the temperature").toLocaleLowerCase();
// let degree= prompt("Enter the degress to covert")
// if(input==="c"){
//     let output = degree * (9/5)+ 32 ;
//     console.log(`${degree}\u00B0 C is ${output}\u00B0 F`)
// }else if(input==="f"){
//     let output= (32*degree-32) * 5/9;
//     console.log(`${degree}\u00B0 F is ${output}\u00B0 C`)
// }else{
//     console.log("Enter the correct formate to check the temperature")
// }


// 9. Write a JavaScript program to find the largest of three given
// integers.

// let numbers = [80,90,50,100,20,150,200,85,140,56];

// let largeNumbers= numbers.sort((a,b) =>{
//     return b-a;
// })

// for(let i=0;i<3;i++){
//     console.log(largeNumbers[i])
// }

// 10. Write a javascript program to print “You got A+” if the
// student has got marks between 91-100, print “You got A” if
// marks are between 81-90, print “You got B” if marks are
// between 71-80, print “You got C” if marks are between 41-70
// and print “You got F” if marks are below 40.

// let marks= prompt("Enter your marks to know your grade");

// if(marks<=100 && marks>=91){
//     console.log("You got A+")
// }else if(marks<=90 && marks>=81){
//     console.log("You got A")
// }else if(marks<=80 && marks>=71){
//     console.log("You got B")
// }else if(marks<=70 && marks>=61){
//     console.log("You got C")
// }else if(marks<=60 && marks>=51){
//     console.log("You got D")
// }else if(marks<=50 && marks>=41){
//     console.log("You got E")
// }else{
//     console.log("You got F that means your Fail in the examination")
// }