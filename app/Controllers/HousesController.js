import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";


function _draw() {
  let template = ""
  ProxyState.houses.forEach(h => template += h.Template)
  document.getElementById("listings").innerHTML = template
}
export class HousesController {
  constructor() {
    console.log("this is the houses controller");
    ProxyState.on("houses", _draw)
  }

  async viewHouses() {
    try {
      await housesService.getHouses()
      document.getElementById('modal-body-slot').innerHTML = getHouseForm()
      document.getElementById('create-button').classList.remove('visually-hidden')
    } catch (error) {
      console.error(error)
    }

  }


  async handleSubmit(id) {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let rawData = {
        bedrooms: form.bedroom.value,
        bathrooms: form.bathroom.value,
        year: form.year.value,
        description: form.description.value,
        price: form.price.value,
        levels: form.level.value,
        imgUrl: form.imgUrl.value
      }
      console.log(rawData);
      if (!id) {
        housesService.createHouse(rawData)
      } else {

        housesService.editHouse(rawData, id)
      }
      let modal = document.getElementById('new-listing')
      form.reset()
      bootstrap.Modal.getOrCreateInstance(modal).hide() //NOTE closes bootstrap modal




    } catch (error) {
      console.error(error)
    }

  }

  async deleteHouse(id) {
    try {

      await housesService.deleteHouse(id)
    } catch (error) {
      console.error(error)
    }
  }

  editHouse(id) {
    const house = ProxyState.houses.find(h => h.id == id)
    document.getElementById('modal-body-slot').innerHTML = getHouseForm(house)
    let modal = document.getElementById('new-listing')
    bootstrap.Modal.getOrCreateInstance(modal).toggle()
  }

}