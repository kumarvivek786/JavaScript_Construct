

var readlineSync = require('readline-sync');
var digit = readlineSync.question("Choose an option:1.Feet to Inch\t2.Feet to Meter\t3.Inch to feet\t4.meter to feet");


    switch (digit)
     {
   
      case "1":
        let num1=readlineSync.question('Enter number? ');
        let res=num1*12;
        console.log("Feet to inch is "+res + " inch");
        break;
      case "2":
        let num2=readlineSync.question('Enter number? ');
        meter= num1*0.305;
        console.log("Feet to meter conversion is: "+meter+" m");
        break;
      case "3":
        let num3=readlineSync.question('Enter number? ');
        feet=num3*0.084;
        console.log("Inch to feet conversion is: "+feet+"feet");
        break;
      case "4":
        let num4=readlineSync.question('Enter number? ');  
        mfeet=num4*3.28;
        console.log("Meter to feet conversion is: "+mfeet+" feet");
        break;
        default:
          console.log("Enter valid option");
          break;
    }
  
    