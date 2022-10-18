//House 
//this inside Global Scope

// this.table = "Window table";

// const cleanTable = function (soap) {
//     console.log(`cleaning ${this.table} using ${soap}`)
// }


// this.garage = {
//     table :"garage table" ,
// }

// cleanTable.call(this, 'Rin soap');    //output - cleaning Window table
// cleanTable.call(this.garage, "Collin spray")      //ouput- cleaning garage table using Collin spray



// this.garage.cleaningTable();      //output - cleaning garage table

// console.log(this.garage.table);   //output - garage table

//this inside an object

// let johnRoom = {
//     table : "John's table",
//     cleaningTable() {
//         console.log(`cleaning ${this.table}`)
//     }
// }

// johnRoom.cleaningTable();           //output - cleaning John's table

//this inside an inner function

// const cleanTable = function (soap) {
//     const innerFunc = (_soap) => {
//         console.log(`cleaning ${this.table} using ${_soap}`);
//     }
//     innerFunc(soap);
// }

// cleanTable.call(this, 'Rin soap');
// cleanTable.call(this.garage, "Collin spray") 

//this inside a constructor

// let createRoom = function (name){
//     this.table = `${name} 's room`;
// }

// createRoom.prototype.cleantable = function (soap) {
//     console.log(`cleaning ${this.table} using ${soap}`)
//  }

// const jillsRoom = new createRoom('Jill');
// const johnsRoom = new createRoom('John');

// jillsRoom.cleantable('Rin soap');       
// johnsRoom.cleantable('Collin spray');

// cleanTable.call(jillsRoom, 'lux');
// cleanTable.call(johnsRoom, 'collin');


//this inside a class

// class createRoom {
//     constructor(name){
//         this.table = `${name} 's room`;
//     }
//     cleanTable(soap) {
//         console.log(`cleaning ${this.table} using ${soap}`);
//     }
// }

// const jillsRoom = new createRoom('Jill');
// const johnsRoom = new createRoom('John');

// jillsRoom.cleanTable('Rin soap');       //output - cleaning Jill 's room using Rin soap 
// johnsRoom.cleanTable('Collin spray');    //ouput- cleaning John 's room using Collin spray


// Design pattern problem
// class Student {
//     static noofStudents = 0;
//     constructor(name,age,phone_no,board_marks){
//         this.name = name;
//         this.age = age;
//         this.phn = phone_no;
//         this.marks = board_marks;
//         Student.noofStudents += 1;
//     }
//     checkEligibility(){
//         if(this.marks > 40){
//             console.log('Eligible');
//         } else {
//             console.log('Not Eligible');
//         }
//     }
// }

// const john = new Student('john',18,9898796059,70);
// const jill = new Student('jill',19,9897896059,66);
// const mary = new Student('mary',17,9898796059,39);
// const sam = new Student('sam',17,9890096059,90);
// const nancy = new Student('nancy',18,9892296059,20);

// john.checkEligibility();      //output - Eligible
// mary.checkEligibility();      //output - Not Eligible

// console.log(Student.noofStudents);    //output - 5



//Fat arror functions

// var getA = function (a) {
//     return a;
// }                      //normal function expression

// let getA = a => a ;    //FAT => function

// let square = a => { return a*a};
// console.log(square(3));

// let multiply = (a,b) => { return a*b};
// console.log(multiply(3,4));


// var x = function () {
//     this.val = 1;
//     setTimeout(() => {
//         this.val++;
//         console.log(this.val);
//     },1)
// }

// var xx = new x();    //output - 2

// var x = (...n) => {
//     console.log(n[0]);
// }

// x(1,2,3,4);


//Code for checking which students are eligible for placements
// class Student {
//     static noofStudents = 0;
//     constructor(name,age,phone_no,board_marks){
//         this.name = name;
//         this.age = age;
//         this.phn = phone_no;
//         this.marks = board_marks;
//         Student.noofStudents += 1;
//     }
//     checkEligibility(){
//         if(this.marks > 40){
//             console.log('Eligible');
//         } else {
//             console.log('Not Eligible');
//         }
//     }
//     checkeligiblityforPlacements(minboardMrks) {
//         return (age) => {
//              if(this.age > age && this.marks > minboardMrks){
//                 console.log(this.name + " is eligible");
//              } else {
//                 console.log(this.name + " is not eligible");
//              }
//         }
//     }
// }

// const john = new Student('john',18,9898796059,70);

// const mary = new Student('mary',18,9898796059,39);

// john.checkeligiblityforPlacements(55)(17);      //output - john is eligible
// mary.checkeligiblityforPlacements(55)(17);      //output - mary is not eligible