//UC-3 Read a single digit Number and Write Unit

var readlineSync=require('readline-sync');
var number=readlineSync.question('Enter the number: ');

switch(number)
{
    case "0":
       console.log('zero')
    break;
    case "1":
       console.log('unit')
        
    break;
    case "10":
        console.log('Ten')
    break;
    case "100":
        console.log('Hundread')
    break
    case '1000':
      console.log('Thousand')
    break;
    case '10000':
      console.log("Ten Thousand")
    break;
    case '100000':
        console.log("Lakhs")
    break;
    case '1000000':
        console.log("Ten Lakhs")
    break;
    case '10000000':
        console.log("Crores")
    break;

    default:
        console.log('Enter the Number correct');
    break;
    

}

