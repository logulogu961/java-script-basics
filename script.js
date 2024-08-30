


document.write("");


console.log("hello java script")
alert("welcome")



// var sum = 0;
// for(var i = 1; i <= 100; i++) {
    
// sum = sum + i;
// }
// console.log(sum);

// interation 1
// sum=0
// i=1
// sum=0+1    1

// interation 2
// sum=1
// i=2
// sum=2+1    3

// interation 3
// sum=2
// i=3
// sum=3+3    6

// for loop without interation
var j = 1;
for (; j <10; j += 2) {
    console.log(j);
}

// prime nubers
 const number = parseInt(prompt("enter the number"));
 var count = 0;
 if (number  === 1) {
    console.log("1 is niether a prime number nor a composite number");
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            count++;
        }
    }
}
if (count > 0) {
    console.log(number + "is not a prime number");
    } else {
        console.log(number + "is a prime number");
    }