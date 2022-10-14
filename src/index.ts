abstract class Vehicle {
    abstract clone(): Vehicle;
    abstract represent(): string;
  
    model: string;
    color: string;
    brand: string;
  
    constructor(model: string, color: string, brand: string) {
      this.model = model;
      this.color = color;
      this.brand = brand;
    }
  }
  
  class Car extends Vehicle {
    numberOfWheels: number;
    numberOfDoors: number;
  
    clone(): Car {
      return new Car(this.model, this.color, this.brand, this.numberOfWheels, this.numberOfDoors);
    }
  
    represent(): string {
      return `Your car details: ${this.brand} ${this.model} ${this.color} ${this.numberOfWheels} ${this.numberOfDoors}`;
    }
  
    constructor(model: string, color: string, brand: string, numberOfWheels: number, numberOfDoors: number) {
      super(model, color, brand);
      this.numberOfWheels = numberOfWheels;
      this.numberOfDoors = numberOfDoors;
    }
  }
  
  class Boat extends Vehicle {
    weight: number;
  
    clone(): Boat {
      return new Boat(this.model, this.color, this.brand, this.weight);
    }
  
    represent(): string {
      return `Your boat details: ${this.brand} ${this.model} ${this.color} ${this.weight}`;
    }
  
    constructor(model: string, color: string, brand: string, weight: number) {
      super(model, color, brand);
      this.weight = weight;
    }
  }
  
  class Application {
    vehicles: Vehicle[] = [];
  
    constructor() {
      const car = new Car("Gol", "Preto", "Volkswagen", 4, 4);
      const boat = new Boat("Titanic", "Branco", "Titanic", 100000);
      this.vehicles.push(car.clone());
      this.vehicles.push(car.clone());
      this.vehicles.push(car.clone());
      this.vehicles.push(boat.clone());
      this.vehicles.push(boat.clone());
      this.vehicles.push(boat.clone());
    }
  
    getVehicles() {
      return this.vehicles.map((vehicle) => vehicle.clone());
    }
  }
  
  const runExercise = () => {
    const app = new Application();
    const vehicles = app.getVehicles();
    vehicles.forEach((vehicle) => console.log(vehicle.represent()));
  };
  
  runExercise();