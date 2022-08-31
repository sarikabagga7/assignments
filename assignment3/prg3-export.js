

class Course{

setCourseDetails(courseName,price,validity, trainerName,phoneNUmber){
    this.courseName=courseName
    this.price=price
    this.validity=validity
    this.trainerName=trainerName
    this.phoneNUmber=phoneNUmber
}

showDetails()
{

   return `Thank you for showing interest in ${this.courseName} - Current Price is  ${this.price} and validity of course is till  ${this.validity} If you have any query then reach out to ${this.trainerName} mobile - ${this.phoneNUmber}`;     
   
} 
}

let course1=new Course()
//let course1=new Course(courseName,price,validity,trainerName,phoneNUmber)
course1.setCourseDetails("JavaScript",4000,"6 months","Mukesh Otwani","94974783748");
console.log(course1.showDetails());




let course2=new Course()
//let course1=new Course(courseName,price,validity,trainerName,phoneNUmber)
course2.setCourseDetails("Cypress",2000,"2 months","Mukesh Otwani","94974783748");
console.log(course2.showDetails());



let course3=new Course()
//let course1=new Course(courseName,price,validity,trainerName,phoneNUmber)
course3.setCourseDetails("Playwright",2000,"2 months","Mukesh Otwani","94974783748");
console.log(course3.showDetails());

// export objects 
export {course1,course2,course3}

