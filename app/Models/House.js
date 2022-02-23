export class House {
  constructor({ id, bedrooms, bathrooms, levels, year, price, imgUrl, description }) {
    this.id = id || ""
    this.bedrooms = bedrooms || ""
    this.bathrooms = bathrooms || ""
    this.levels = levels || ""
    this.year = year || ""
    this.price = price || ""
    this.imgUrl = imgUrl || ""
    this.description = description || ""
  }

  get Template() {
    return `
      <div class="col-md-4">
        <div class="bg-white rounded shadow">
          <img class="object-fit-img rounded-top" src="${this.imgUrl}" alt="car image">
          <div class="p-3 clip-text">
            <p>${this.year} | ${this.bedrooms} | ${this.bathrooms}</p>
            <p></p>
            <p>${this.description}</p>
            <p>${this.price}</p>
            <p>${this.levels}</p>
            <div class="text-end">
            <button class="btn btn-outline-warning" onclick="app.housesController.editHouse('${this.id}')"> Edit </button>
            <button class="btn btn-outline-danger" onclick="app.housesController.deleteHouse('${this.id}')"> delete </button>
            </div>
          </div>
        </div>
      </div>
    `
  }
}