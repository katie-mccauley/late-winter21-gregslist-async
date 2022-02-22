import { ProxyState } from "../AppState.js"
import { getCarForm } from "../Components/CarForm.js"
import { carsService } from "../Services/CarsService.js"

function _draw() {
  let template = ''
  ProxyState.cars.forEach(c => template += c.Template)
  document.getElementById('listings').innerHTML = template
}

export class CarsController {
  constructor() {
    ProxyState.on('cars', _draw)
    console.log('cars controller loaded')
  }

  viewCars() {
    _draw()
    document.getElementById('modal-body-slot').innerHTML = getCarForm()
    document.getElementById('create-button').classList.remove('visually-hidden')
  }

  createCar(event) {
    event.preventDefault()
    // NOTE grabs the form from the event submission
    let form = event.target
    console.log('hi from create car', form)
    // NOTE collects the information from the form and organizes it in one place
    let newCar = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      description: form.description.value,
      price: form.price.value,
      color: form.color.value,
      imgUrl: form.imgUrl.value
    }
    console.log('new car', newCar)
    // NOTE passes data to service
    carsService.createCar(newCar)
    // NOTE gets the modal element by it's id
    let modal = document.getElementById('new-listing')
    // NOTE clears form inputs
    form.reset()
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(modal).hide() //NOTE closes bootstrap modal
  }

  deleteCar(carId) {
    console.log('delete card', carId)
    // NOTE just passes the ID of the car to be deleted
    carsService.deleteCar(carId)
  }
}