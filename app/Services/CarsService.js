import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";



class CarsService{
  createCar(newCar) {
    console.log('service got the car', newCar);
    // NOTE turns the car data into a classed 'Car' object
    let realCar = new Car(newCar)
    console.log('its a real car now', realCar);
    // ProxyState.cars.push(realCar) NOTE push does not trigger listeners
    // NOTE inserts the car created into the array with the rest of the cars there (spread operator)
    ProxyState.cars = [realCar,...ProxyState.cars]
  }
  
  deleteCar(carId) {
    console.log('service deleting car', carId);
    // NOTE find the index of the car to delete
    let indexToDelete = ProxyState.cars.findIndex(c => c.id ==carId)
    console.log('deleting index', indexToDelete);
    ProxyState.cars.splice(indexToDelete,1)
    // NOTE just here to trigger the listener
    ProxyState.cars = ProxyState.cars
  }

}

export const carsService = new CarsService()