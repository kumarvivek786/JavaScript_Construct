//UC-1 Read a single digit number and write the number in word using case

var readlineSync=require('readline-sync');
    var number=readlineSync.question('Enter the number: ');
    
    switch(number)
    {
        case "0":
           console.log('zero')
        break;
        case "1":
           console.log('one')
            
        break;
        case "2":
            console.log('TWO')
        break;
        case "3":
            console.log('Three')
        break
        case '4':
          console.log('Four')
        break;
        case '5':
          console.log("Five")
        break;
        case '6':
            console.log("six")
        break;
        case '7':
            console.log("seven")
        break;
        case '8':
            console.log("Eight")
        break;
        case '9':
            console.log("nine")
        break;
    
        default:
            console.log('Enter correct number');
        break;
        
    
    }