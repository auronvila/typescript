import axios from "axios";

const personName: string = "Auron";
const isAdmin: boolean = true;
const age: number = 18;
const nothing: undefined = undefined;

//built in objects
const today: Date = new Date();

//Arrays
const myArr: string[] = ["Auron", "Mehmet", "Alp"];
myArr.map((i) => {
  if (i === "Auron") {
    console.log(i);
  }
});

//classes
class Car {}
const car: Car = new Car();

//Object Literal
const myObj: { x: number; y: string } = {
  x: 3,
  y: "3",
};

//functions
const logNum: (i: number) => void = (i: number) => {
  console.log(i);
};

//JSON
const json = '{"x": "1","y":"2"}';
const ret: { x: string; y: string } = JSON.parse(json);

// console.log(ret.x);
