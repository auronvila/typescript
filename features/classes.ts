class Vehicle {
  constructor(public fast: string) {
    console.log(fast);
  }

  public honk(): void {
    console.log("tytyyyy");
  }
}
const vehicle1 = new Vehicle("fast");
const ctor = vehicle1.fast;

class Car extends Vehicle {
  //super is an instance of the parent constructor and takes in the parameters needed.
  constructor(wheel: number, color: string) {
    super(color);
  }

  private speed(): void {
    console.log("I am faster");
  }

  public makeCarFaster(): void {
    this.speed();
  }
}

const vehicle = new Vehicle("");
const car = new Car(4, "");

vehicle.honk();
car.makeCarFaster();
car.honk();
