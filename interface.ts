interface IStudent{
    firstName:string;
    lastName:string;
    age:number;
    course:string;

    fullName : () => void;
    biography: () => void;
}

class Student implements IStudent{
    firstName:string;
    lastName:string;
    age:number;
    course:string;

    constructor(firstName:string,lastName:string,age:number,course:string){

        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.course=course;
    }

    public fullName():string{
        return `${this.firstName} ${this.lastName}`
    }
    public biography():void{
        let bio:string=`FULL NAME : ${this.firstName}`
        console.log(bio)
    }
}

let student=new Student("dfds","frsfgr",12,"svdfv");
student.fullName()
console.log(student.biography());

