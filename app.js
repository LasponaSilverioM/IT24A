//if else statement
let grade = 76;

if (grade >= 75) {
  console.log("You are Pass.");
} else if (grade <= 75 && grade > 85) {
  console.log("You are Failed.");
} else {
    console.log("You are Excellent.");
  }

//switch Statement 
let month = 9;
let monthName;

switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "Apil";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
   case 8:
    monthName = "August";
    break;
   case 9:
    monthName = "September";
    break;  
    case 10:
    monthName = "October";
    break;
     case 11:
    monthName = "November";
    break; 
     case 12:
    monthName = "December";
    break;
  default:
    dayName = "Invalid Month";
}

console.log("Month is " + monthName);