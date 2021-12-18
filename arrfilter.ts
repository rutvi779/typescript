interface student{
    name:string;
    age:number;
    rollno:number;
}

let Student:student[]=[
    {
    name:"dsf",
    age:12,
    rollno:45
},
  {
    name:"df",
    age:18,
    rollno:40
},
  {
    name:"sf",
    age:15,
    rollno:49
}

]
let studentage:student[]=Student.filter(stu=>stu.age<18)
console.log(studentage)
