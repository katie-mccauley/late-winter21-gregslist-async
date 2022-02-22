import { generateId } from '../Utils/generateId.js'

export class Car {
  constructor({ make, model, year, price, description, color, imgUrl }) {
    this.id = generateId()
    this.make = make,
      this.model = model,
      this.year = year,
      this.price = price,
      this.description = description,
      this.color = color,
      this.imgUrl = imgUrl
  }

  get Template() {
    return `
      <div class="col-md-4">
        <div class="bg-white rounded shadow">
          <img class="img-fluid rounded-top" src="${this.imgUrl}" alt="car image">
          <div class="p-3">
            <p>${this.year} | ${this.make} | ${this.model}</p>
            <p></p>
            <p>${this.description}</p>
            <p>$${this.price}</p>
            <div class="d-flex align-items-center">
              <p class="m-0">Color:</p>
              <div class="color-box ms-2" style="background-color: ${this.color}"></div>
            </div>
            <div class="text-end">
            <button class="btn btn-outline-danger" onclick="app.carsController.deleteCar('${this.id}')"> delete </button>
            </div>
          </div>
        </div>
      </div>
    `
  }
}