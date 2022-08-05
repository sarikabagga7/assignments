/*
Program 8- Write a program that creates the below Object.
	Object name - Student
	Property 
		Name
		College Name
		Location
		PinCode
		Teachers details should be teacherName, teacherPhone, teacherSubjects

	Print Student name, teacherName on console.
*/
let student={
    name:"Sarika",
    collegeName:"GNDU",
    location:"Jalandhar",
    pincode:146002,
    teacher:{
        teacherName: "MukeshSir",
        teacherPhone:"78868687687",
        teacherSubjects :["JAVA","JavaScript, Selenium, Python"]
    }
}

console.log("Student Name:"+student.name);

console.log("Teacher Name:"+student.teacher.teacherName);

console.log("Subjects:"+student.teacher.teacherSubjects);

