//UC-1 Read a single digit number and write the number in word using case

var readlineSync=require('readline-sync');
    var number=readlineSync.question('Enter the number: ');
    
    switch(number)
    {
       
        case "1":
           console.log('MONDAY')
            
        break;
        case "2":
            console.log('TUESDSY')
        break;
        case "3":
            console.log('WEDNESDAY')
        break
        case '4':
          console.log('THURSDAY')
        break;
        case '5':
          console.log("FRIDAY")
        break;
        case '6':
            console.log("SATURDAY")
        break;
        case '7':
            console.log("SUNDAY")
        break;
        
        default:
            console.log('Enter correct number');
        break;
        
    
    }